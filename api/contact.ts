import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { name, email, message, interests } = await req.json();

  await resend.emails.send({
    from: "portfolio@jillianram-dev.com",
    to: "jillian@jillianram-dev.com",
    subject: `Portfolio contact — ${name}`,
    html: `
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Looking for:</strong> ${interests?.join(", ")}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
