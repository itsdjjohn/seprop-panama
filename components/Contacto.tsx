"use client";

import React, { useState } from "react";
import { sendContactEmail, sendCVEmail } from "../app/actions";

export default function Contacto() {
  const [formType, setFormType] = useState<"info" | "cv">("info");
  const [loading, setLoading] = useState(false);

  async function handleAction(formData: FormData) {
    setLoading(true);
    const res = formType === "info" ? await sendContactEmail(formData) : await sendCVEmail(formData);
    setLoading(false);

    if (res.success) {
      alert("¡Enviado exitosamente!");
      (document.querySelector("form") as HTMLFormElement).reset();
    } else {
      // Muestra el error específico (como el de tamaño de archivo)
      alert(res.error || "Hubo un problema. Intente por WhatsApp.");
    }
  }

  return (
    <section id="contacto" className="contacto section-padding">
      <div className="container contacto-container">
        <div className="contacto-info">
          <h2>Contáctenos</h2>
          <div className="separator left"></div>
          <h4>SEPROP-PANAMÁ</h4>
          <p><i className="fas fa-phone"></i> Oficina: (+507) 372-9569</p>
          <p><i className="fas fa-mobile-alt"></i> WhatsApp: (+507) 6904-3435</p>
          <ul className="email-list">
            <li><a href="mailto:esquiveljohn2@gmail.com">esquiveljohn2@gmail.com</a></li>
          </ul>
        </div>

        <div className="contacto-form">
          <div className="form-tabs">
            <button className={`tab-btn ${formType === "info" ? "active" : ""}`} onClick={() => setFormType("info")}>Información</button>
            <button className={`tab-btn ${formType === "cv" ? "active" : ""}`} onClick={() => setFormType("cv")}>Hoja de Vida</button>
          </div>

          <form action={handleAction} className="fade-in">
            <div className="form-group"><label>Nombre Completo</label><input type="text" name="nombre" required disabled={loading}/></div>
            {formType === "info" ? (
              <>
                <div className="form-group"><label>Email</label><input type="email" name="email" required disabled={loading}/></div>
                <div className="form-group"><label>Teléfono</label><input type="tel" name="telefono" required disabled={loading}/></div>
                <div className="form-group"><label>Mensaje</label><textarea name="mensaje" rows={3} required disabled={loading}></textarea></div>
              </>
            ) : (
              <>
                <div className="form-group"><label>Teléfono</label><input type="tel" name="telefono" required disabled={loading}/></div>
                <div className="form-group"><label>Puesto</label><input type="text" name="puesto" required disabled={loading}/></div>
                <div className="form-group"><label>Adjuntar CV (PDF Máx 4MB)</label><input type="file" name="cv" accept=".pdf" required disabled={loading} className="file-input"/></div>
              </>
            )}
            <button type="submit" className="btn-primary" disabled={loading}>{loading ? "Procesando..." : "Enviar"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}