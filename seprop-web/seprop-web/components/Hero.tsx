"use client";

import React from "react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const elem = document.getElementById("nosotros");
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero" style={{ backgroundImage: "url('/images/111.png')" }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-text">
          <h1>SEPROP - PANAMÁ</h1>
          <h2>Servicios de Protección Privada</h2>
          <p>Su seguridad es nuestro mayor compromiso.</p>
          <p className="subtitle">
            Con capital 100% panameño; comprometidos con el bienestar y la satisfacción de aquellos que confían en nuestra empresa.
          </p>
          <a href="#nosotros" onClick={handleScroll} className="btn-primary">Conoce más</a>
        </div>
        <div className="hero-image">
          <img src="/images/1-222.png" alt="Agente de Seguridad" />
        </div>
      </div>
    </section>
  );
}