import { NextResponse } from "next/server";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(body) {
  const errors = {};
  if (!body.name || String(body.name).trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!body.email || !isValidEmail(body.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!body.message || String(body.message).trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { valid, errors } = validate(body);

    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const payload = {
      name: String(body.name).trim(),
      email: String(body.email).trim(),
      company: body.company ? String(body.company).trim() : "",
      message: String(body.message).trim(),
    };

    // Placeholder: this API can be wired to a server-side email provider if needed.
    // Contact form currently sends mail directly via EmailJS from the client.
    if (process.env.CONTACT_EMAIL) {
      console.log("[Contact form submission]", payload);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[Contact API error]", e);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
