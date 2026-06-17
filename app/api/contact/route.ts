import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";

const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function rateLimit(ip: string) {
  const now = Date.now();
  const current = hits.get(ip);
  if (!current || current.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (rateLimit(ip)) {
    return NextResponse.json({ message: "Too many requests. Please wait a minute and try again." }, { status: 429 });
  }

  const payload: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please correct the highlighted fields and try again." }, { status: 400 });
  }

  const { name, email, subject, projectType, message } = parsed.data;
  const configured = process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL;

  if (!configured) {
    const metadata = { name, emailDomain: email.split("@")[1], subject, projectType, messageLength: message.length };
    if (process.env.NODE_ENV !== "production") {
      console.info("Development contact submission metadata:", metadata);
      return NextResponse.json({ message: "Development mode: email is not configured, but the form submission validated successfully." });
    }
    return NextResponse.json({ message: "Contact email is not configured. Please set Resend environment variables." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL as string,
    to: process.env.CONTACT_TO_EMAIL as string,
    replyTo: email,
    subject: `Portfolio contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
  });

  if (result.error) {
    return NextResponse.json({ message: "Email delivery failed. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ message: "Message sent. Farid will reply soon." });
}
