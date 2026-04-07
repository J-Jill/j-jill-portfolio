import { Resend } from "resend";

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { name, email, message, interests } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "portfolio@jillianram-dev.com",
      to: "jillian@jillianram-dev.com",
      subject: `Portfolio contact — ${name}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Looking for:</strong> ${interests?.join(", ")}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
    });
  }
}
