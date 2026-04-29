"use server";

import nodemailer from "nodemailer";

type ContactResult = { success: boolean; error?: string };

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"] as const;

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

  const subject = `New website inquiry — ${name}${topic && topic !== "Choose a topic" ? ` (${topic})` : ""}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    topic && topic !== "Choose a topic" ? `Topic: ${topic}` : null,
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
    });
  } catch (err) {
    console.error("SMTP send failed:", err);
    return { success: false, error: "We couldn't send your message right now. Please try again or email office@pomerico.com." };
  }

  return { success: true };
}
