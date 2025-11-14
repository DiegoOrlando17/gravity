import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, video, message } = await req.json();

    if (!name || !email || !video) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Enviar correo a Gravity Company
    await resend.emails.send({
      from: "Audicion Web Gravity Company <onboarding@resend.dev>",
      to: process.env.NEXT_PUBLIC_GRAVITY_EMAIL ?? "gravitycompanyproyect@gmail.com",
      subject: `🎬 Nueva Audición: ${name}`,
      html: `
        <h2>🩰 Nueva Audición Recibida</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Video:</strong> <a href="${video}" target="_blank">${video}</a></p>
        ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ""}
        <hr style="margin-top:16px;margin-bottom:16px;border:none;border-top:1px solid #ddd;" />
        <p>Este mensaje fue enviado automáticamente desde el sitio de Gravity Company.</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ Error enviando audición:", error);
    return NextResponse.json({ error: "Error enviando audición" }, { status: 500 });
  }
}
