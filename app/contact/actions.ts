"use server";

export type ContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  formData: FormData
): Promise<ContactFormResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email) {
    return {
      ok: false,
      error: "Please fill in name and email.",
    };
  }
  if (name.length > 120) {
    return { ok: false, error: "Name is too long." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length > 5000) {
    return {
      ok: false,
      error: "Message is too long (max 5000 characters).",
    };
  }

  // Wire to email, webhook, or database when ready.
  console.log("[contact] submission", {
    name,
    email,
    messageLength: message.length,
  });

  return { ok: true };
}
