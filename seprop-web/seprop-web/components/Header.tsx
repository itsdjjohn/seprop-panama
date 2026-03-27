"use client";

import React from "react";

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img src="/images/Logo1.png" alt="Seprop-Panamá Logo" />
          </a>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="active">Inicio</a></li>
            <li><a href="#ofrecemos" onClick={handleScroll}>Ofrecemos</a></li>
            <li><a href="#servicios" onClick={handleScroll}>Servicios</a></li>
            <li><a href="#nosotros" onClick={handleScroll}>Nosotros</a></li>
            <li><a href="#valores" onClick={handleScroll}>Valores</a></li>
            <li><a href="#contacto" onClick={handleScroll}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}