'use client';
import '../globals.css'; // Asegúrate de que esta ruta sea la correcta

export default function Servicios() {
  
  const setCookie = (val) => {
    localStorage.setItem('lexmar_cookies', val);
    document.getElementById('cookieBanner')?.classList.add('hidden');
  };

  return (
    <>
      <header className="main-header">
        <nav className="nav-container">
          <a href="/" className="logo">
            <img src="/LexMar_logo_white.png" alt="LexMar Abogados" />
            <span className="logo-text">LEXMAR</span>
          </a>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger" aria-label="Menú"><span></span></label>
          
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Inicio</a></li>
            <li><a href="/servicios" className="nav-link active">Servicios</a></li>
            <li><a href="/sobre-nosotros" className="nav-link">Sobre Nosotros</a></li>
            <li><a href="/contacto" className="nav-btn-alt">Consulta</a></li>
          </ul>
            <div className="nav-actions">
            <div className="social-icons">
              <a href="#" className="btn-89" aria-label="Facebook" rel="noopener"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="btn-89" aria-label="Instagram" rel="noopener"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="btn-89" aria-label="LinkedIn" rel="noopener"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            </div>
        </nav>
      </header>

      <main>
        <section className="hero" style={{ height: '55vh', minHeight: '420px' }}>
          <div className="hero-bg" style={{ backgroundImage: "linear-gradient(160deg, rgba(22, 42, 84, 0.85) 0%, rgba(22, 42, 84, 0.55) 100%), url('/pexels-mikebirdy-996328.jpg')" }}></div>
          <div className="hero-content">
            <p className="eyebrow">Áreas de práctica</p>
            <h1 className="reveal">Servicios jurídicos <span className="text-accent">a tu medida</span></h1>
            <p className="hero-desc reveal reveal-delay-1">
              Asesoramiento especializado en Derecho Laboral, Civil, Penal y de Familia para particulares y empresas en Tenerife, Canarias y toda España.
            </p>
          </div>
        </section>

        <section className="contact-bar">
          <div className="container contact-bar-grid">
            <a href="https://maps.google.com/?q=Calle+Bethencourt+y+Molina+1+Santa+Cruz+Tenerife" className="contact-bar-item" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-location-dot"></i> Santa Cruz de Tenerife
            </a>
            <a href="tel:+34611770042" className="contact-bar-item">
              <i className="fa-solid fa-phone"></i> 611 770 042
            </a>
            <a href="mailto:info@lexmarabogados.es" className="contact-bar-item">
              <i className="fa-solid fa-envelope"></i> info@lexmarabogados.es
            </a>
            <span className="contact-bar-item">
              <i className="fa-regular fa-clock"></i> Respuesta en 24–48 h
            </span>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              En LexMar tratamos cada asunto como lo que es: único. Antes de aceptar un caso, lo analizamos con honestidad para decirte exactamente qué posibilidades tienes. Si hay viabilidad, trabajamos tu asunto como si fuera nuestro. Si no la hay, te lo decimos también, porque tu tiempo y tu tranquilidad importan.
            </p>
          </div>
        </section>

        {/* Áreas de práctica (resumen de estructura repetitiva) */}
        <section className="section">
          <div className="container">
            
            {/* Ejemplo de un Área - Repetir para Civil, Penal, etc. ajustando id e iconos */}
            <div className="service-area reveal" id="laboral">
              <div className="service-area-header">
                <div className="service-area-icon"><i className="fa-solid fa-anchor"></i></div>
                <div>
                  <h2 className="service-area-title">Derecho Laboral y de la Seguridad Social</h2>
                  <p className="service-area-subtitle">Defensa de trabajadores y asesoramiento a empresas en Tenerife y toda España</p>
                </div>
              </div>
              <p className="service-area-intro">El trabajo es uno de los pilares de tu vida. Cuando algo falla...</p>
              {/* ... resto del contenido ... */}
              <a href="/contacto" className="service-cta">Consultar ahora <i className="fa-solid fa-arrow-right"></i></a>
            </div>

          </div>
        </section>

        {/* ... Resto del contenido (CTA, Footer) ... */}

      </main>

      <div className="cookie-banner" id="cookieBanner">
        <p>Utilizamos cookies propias y de terceros para mejorar tu experiencia. <a href="/politica-cookies">Política de Cookies</a>.</p>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn-reject" onClick={() => setCookie('rejected')}>Rechazar</button>
          <button className="cookie-btn cookie-btn-accept" onClick={() => setCookie('accepted')}>Aceptar</button>
        </div>
      </div>
    </>
  );
}