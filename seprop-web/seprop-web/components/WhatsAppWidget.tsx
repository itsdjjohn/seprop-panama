"use client";

import React, { useState } from "react";

export default function WhatsAppWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="wa-widget-container">
      {isChatOpen && (
        <div className="wa-chat-window">
          <div className="wa-header">
            <div className="wa-header-title">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </div>
            <button className="wa-close-btn" onClick={() => setIsChatOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="wa-body">
            <div className="wa-bubble">
              Hola 👋, bienvenido a <strong>Seprop-Panamá</strong>
            </div>
            <div className="wa-bubble short">
              ¿Podemos ayudarle?
            </div>
            
            <a 
              href="https://api.whatsapp.com/send/?phone=50769043435&text=Hola+%2ASeprop-Panam%C3%A1%2A.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+Seprop-Panam%C3%A1+https%3A%2F%2Fseprop-panama.com%2F&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="wa-abrir-btn"
            >
              <i className="fab fa-whatsapp"></i> Abrir chat
            </a>
          </div>
        </div>
      )}

      <button 
        className="wa-float-btn" 
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label="Abrir chat de WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </button>
    </div>
  );
}