export default function Ofrecemos() {
  return (
    <section id="ofrecemos" className="ofrecemos section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Ofrecemos</h2>
          <div className="separator"></div>
          <h3>Nuestro compromiso se enfoca en satisfacer las necesidades<br />de nuestros clientes, implementando una<br />seguridad física, disuasiva y preventiva.</h3>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-box"><i className="fas fa-check-double"></i></div>
            <h4>Agentes para control de acceso</h4>
          </div>
          <div className="service-card">
            <div className="icon-box"><i className="fas fa-user-tie"></i></div>
            <h4>Agentes de seguridad residencial, comercial e industrial</h4>
          </div>
          <div className="service-card">
            <div className="icon-box"><i className="fas fa-video"></i></div>
            <h4>Agentes de control y supervisión de video vigilancia</h4>
          </div>
          <div className="service-card">
            <div className="icon-box"><i className="fas fa-boxes"></i></div>
            <h4>Agentes de supervisión de mercancía</h4>
          </div>
          <div className="service-card">
            <div className="icon-box"><i className="fas fa-store-alt"></i></div>
            <h4>Agentes de bodega</h4>
          </div>
        </div>
      </div>
    </section>
  );
}