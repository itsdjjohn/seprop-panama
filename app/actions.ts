"use server";

import { Resend } from "resend";

// Asegúrate de que esta variable esté en los Settings de Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

// Para la prueba, envíalo a tu Gmail
const CORREO_DESTINO = "esquiveljohn2@gmail.com";

export async function sendContactEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const telefono = formData.get("telefono") as string;
  const mensaje = formData.get("mensaje") as string;

  try {
    await resend.emails.send({
      // CAMBIO VITAL: Usa tu dominio oficial aquí
      from: "Seprop Web <info@seprop-panama.com>", 
      to: CORREO_DESTINO,
      subject: `Consulta Web: ${nombre}`,
      html: `<h2>Nueva consulta</h2><p>Nombre: ${nombre}</p><p>Mensaje: ${mensaje}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
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
      // CAMBIO VITAL: Usa tu dominio oficial aquí
      from: "RRHH Seprop <rrhh@seprop-panama.com>",
      to: CORREO_DESTINO,
      subject: `CV Recibido: ${nombre} - ${puesto}`,
      attachments: [{ filename: file.name, content: buffer }],
      html: `<h2>Nueva Hoja de Vida</h2><p>Candidato: ${nombre}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}