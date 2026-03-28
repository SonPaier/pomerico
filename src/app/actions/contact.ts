"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const topic = formData.get("topic") as string;
  const brief = formData.get("message") as string;

  if (!name || !email) {
    return { success: false, error: "Name and email are required" };
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please provide a valid email address" };
  }

  // TODO: Replace with actual email service (Formspree, SendGrid, etc.)
  console.log("Contact form submission:", { name, email, phone, topic, brief });

  return { success: true };
}
