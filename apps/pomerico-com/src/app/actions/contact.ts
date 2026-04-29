"use server";

import nodemailer from "nodemailer";

type ContactResult = { success: boolean; error?: string };

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"] as const;

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB per file
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25 MB total
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
  "image/webp",
  "text/plain",
]);

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(formData: FormData): Promise<ContactResult> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const topic = (formData.get("topic") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  const source = (formData.get("source") as string | null)?.trim() ?? "";
  const gdpr = formData.get("gdpr");

  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (!gdpr) {
    return { success: false, error: "Please accept the privacy policy to continue." };
  }

  const rawFiles = formData.getAll("file");
  const incomingFiles: File[] = rawFiles.filter((f): f is File => f instanceof File && f.size > 0);

  let totalSize = 0;
  for (const f of incomingFiles) {
    if (f.size > MAX_FILE_SIZE) {
      return { success: false, error: `File "${f.name}" exceeds the 10MB limit.` };
    }
    if (f.type && !ALLOWED_TYPES.has(f.type)) {
      return { success: false, error: `File type not allowed: ${f.name}. Use PDF, DOC/DOCX, XLS/XLSX, PNG, JPG, or TXT.` };
    }
    totalSize += f.size;
  }
  if (totalSize > MAX_TOTAL_SIZE) {
    return { success: false, error: "Total attachment size exceeds 25MB. Please send larger files separately." };
  }

  const attachments = await Promise.all(
    incomingFiles.map(async (f) => ({
      filename: f.name,
      content: Buffer.from(await f.arrayBuffer()),
      contentType: f.type || "application/octet-stream",
    })),
  );

  const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
  if (missing.length) {
    console.error("Contact form misconfigured, missing env:", missing.join(", "));
    return { success: false, error: "Email service is not configured. Please email office@pomerico.com directly." };
  }

  const port = Number(process.env.SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = `New website inquiry — ${name}${topic && topic !== "Choose a topic" ? ` (${topic})` : ""}${source ? ` [${source}]` : ""}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    topic && topic !== "Choose a topic" ? `Topic: ${topic}` : null,
    source ? `Submitted from: ${source}` : null,
    attachments.length ? `Attachments: ${attachments.map((a) => a.filename).join(", ")}` : null,
    "",
    "Message:",
    message || "(no message)",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#1a1a1a;font-size:14px;line-height:1.5;">
      <h2 style="margin:0 0 12px;color:#183B6E;">New website inquiry</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="font-weight:600;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="font-weight:600;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="font-weight:600;">Phone</td><td>${escapeHtml(phone)}</td></tr>` : ""}
        ${topic && topic !== "Choose a topic" ? `<tr><td style="font-weight:600;">Topic</td><td>${escapeHtml(topic)}</td></tr>` : ""}
        ${source ? `<tr><td style="font-weight:600;">Page</td><td><code>${escapeHtml(source)}</code></td></tr>` : ""}
        ${attachments.length ? `<tr><td style="font-weight:600;">Attachments</td><td>${attachments.map((a) => escapeHtml(a.filename)).join(", ")}</td></tr>` : ""}
      </table>
      <h3 style="margin:20px 0 8px;color:#183B6E;">Message</h3>
      <div style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px;">${escapeHtml(message || "(no message)")}</div>
      <p style="margin-top:24px;color:#666;font-size:12px;">Sent from pomerico.com contact form</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Pomerico Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
      attachments: attachments.length ? attachments : undefined,
    });
  } catch (err) {
    console.error("SMTP send failed:", err);
    return { success: false, error: "We couldn't send your message right now. Please try again or email office@pomerico.com." };
  }

  return { success: true };
}
