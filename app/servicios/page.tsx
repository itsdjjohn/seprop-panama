"use client";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function ServiciosPage() {
  return (
    <main>
      {/* Banner de entrada con espacio para el navbar global */}
      <section className="banner-dark section-padding" style={{ paddingTop: '140px' }}>
        <div className="container">
          <h1>Nuestros <span style={{ color: 'var(--primary-color)' }}>Servicios</span></h1>
          <div className="separator"></div>
          <p className="banner-footer" style={{ marginTop: '20px' }}>
            Soluciones de seguridad integral en Panamá.
          </p>
        </div>
      </section>

      {/* Vigilancia Física */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container nosotros-container">
          <div className="nosotros-image">
            <img src="/images/1-222.png" alt="Vigilancia Física" />
          </div>
          <div className="nosotros-text">
            <h3>VIGILANCIA FÍSICA</h3>
            <div className="separator left"></div>
            <p><strong>SEPROP – PANAMÁ</strong> se enfoca principalmente en evitar daños y riesgos.</p>
            <p>Prevención, disuasión, acción y resultados.</p>
          </div>
        </div>
      </section>

      {/* Monitoreo */}
      <section className="banner-dark section-padding">
        <div className="container">
          <h2>VIDEO VIGILANCIA VIRTUAL</h2>
          <div className="separator"></div>
          <div className="nosotros-container" style={{ marginTop: '40px' }}>
            <div className="nosotros-text" style={{ color: '#fff' }}>
              <p>Sistemas tecnológicos para supervisión constante y rápida respuesta.</p>
            </div>
            <div className="nosotros-image">
              <img src="/images/1111-768x765.png" alt="Monitoreo" style={{ border: '5px solid var(--primary-color)' }} />
            </div>
          </div>
        </div>
      </section>

      <Contacto />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}