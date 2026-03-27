"use server";

import { Resend } from "resend";

const resend = new Resend("re_WdFpwd2U_LmaEC7inNc6tSyo1G5WTZVuP");
const targetEmail = "atencionalcliente@seprop-panama.com";

export async function sendContactEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const telefono = formData.get("telefono") as string;
  const mensaje = formData.get("mensaje") as string;

  try {
    await resend.emails.send({
      from: "Web Seprop <onboarding@resend.dev>",
      to: targetEmail,
      subject: `Consulta Web: ${nombre}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Nueva consulta de información</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Mensaje:</strong><br/>${mensaje}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function sendCVEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const telefono = formData.get("telefono") as string;
  const puesto = formData.get("puesto") as string;
  const file = formData.get("cv") as File;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await resend.emails.send({
      from: "RRHH Seprop <onboarding@resend.dev>",
      to: targetEmail,
      subject: `CV Recibido: ${nombre} - ${puesto}`,
      attachments: [{ filename: file.name, content: buffer }],
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Nueva Hoja de Vida recibida</h2>
          <p><strong>Candidato:</strong> ${nombre}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Puesto de interés:</strong> ${puesto}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}