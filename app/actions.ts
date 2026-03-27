"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// Correo de prueba solicitado
const CORREO_DESTINO = "esquiveljohn2@gmail.com"; 

export async function sendContactEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const telefono = formData.get("telefono") as string;
  const mensaje = formData.get("mensaje") as string;

  try {
    await resend.emails.send({
      from: "Seprop Web <info@seprop-panama.com>", // Dominio verificado
      to: CORREO_DESTINO,
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
    console.error("Error Info:", error);
    return { success: false, error: "Error al enviar el mensaje." };
  }
}

export async function sendCVEmail(formData: FormData) {
  try {
    const nombre = formData.get("nombre") as string;
    const telefono = formData.get("telefono") as string;
    const puesto = formData.get("puesto") as string;
    const file = formData.get("cv") as File;

    // Validación de tamaño para evitar crash en Vercel (Límite 4.5MB)
    if (file && file.size > 4 * 1024 * 1024) {
      return { success: false, error: "El archivo es muy pesado (máximo 4MB)." };
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await resend.emails.send({
      from: "RRHH Seprop <rrhh@seprop-panama.com>", // Dominio verificado
      to: CORREO_DESTINO,
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
    console.error("Error CV:", error);
    return { success: false, error: "Error crítico al procesar el archivo." };
  }
}