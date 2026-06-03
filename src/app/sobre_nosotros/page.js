
'use client';

import { useEffect } from 'react';

export default function SobreNosotros() {

  // Lógica de Scroll Reveal + Parallax Hero + Cookie Banner
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    // Observamos elementos de contenido para la animación
    document.querySelectorAll('.reveal, .profile-grid, .about-text').forEach((el) =>
      observer.observe(el)
    );

    const handleScroll = () => {
      const heroBg = document.querySelector('.hero-bg');
      if (heroBg) heroBg.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
    };
    window.addEventListener('scroll', handleScroll);

    const banner = document.getElementById('cookieBanner');
    if (banner && localStorage.getItem('lexmar_cookies')) {
      banner.classList.add('hidden');
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setCookie = (val) => {
    localStorage.setItem('lexmar_cookies', val);
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.add('hidden');
  };

  return (
    <>
      {/* HEADER INTEGRADO */}
      <header className="main-header">
        <nav className="nav-container">
          <a href="/" className="logo">
            <img src="/LexMar_logo_white.png" alt="LexMar Abogados" />
            <span className="logo-text">LEXMAR</span>
          </a>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger" aria-label="Menú">
            <span></span>
          </label>

          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Inicio</a></li>
            <li><a href="/servicios" className="nav-link">Servicios</a></li>
            <li><a href="/sobre_nosotros" className="nav-link active">Sobre Nosotros</a></li>
            <li><a href="/contacto" className="nav-btn-alt">Consulta</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO CON PARALLAX */}
        <section className="hero" style={{ height: '55vh', minHeight: '400px' }}>
          <div className="hero-bg" style={{ backgroundImage: "linear-gradient(160deg, rgba(22, 42, 84, 0.88) 0%, rgba(22, 42, 84, 0.55) 100%), url('/pexels-blitzboy-1106412.jpg')" }}></div>
          <div className="hero-content">
            <p className="eyebrow">Quiénes somos</p>
            <h1 className="reveal">Un despacho nacido <span className="text-accent">de una vocación</span></h1>
            <p className="hero-desc reveal reveal-delay-1">Compromiso, transparencia y honestidad en cada caso.</p>
          </div>
        </section>

        {/* CONTACT BAR */}
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

        {/* CONTENIDO PRINCIPAL */}
        <section className="section bg-white">
          <div className="container profile-grid">
            <div className="profile-image reveal">
              <img src="/pexels-blitzboy-1106412.jpg" alt="Coral Ramos Gonzalo" />
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--light-bg)', borderRadius: '12px' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '0.25rem' }}>Fundadora</p>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Coral Ramos Gonzalo</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 0 }}>Abogada colegiada nº 131177 ICAM</p>
              </div>
            </div>

            <div className="about-text reveal reveal-delay-1">
              <span className="section-label">Historia y filosofía</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>LexMar, donde el mar y el derecho se encuentran</h2>
              <div className="title-underline left" style={{ marginBottom: '1.75rem' }}></div>
              <p>LexMar nace de la unión de dos pasiones: el mar y el derecho...</p>
            </div>
          </div>
        </section>
      </main>

      {/* COOKIE BANNER (Estructura igual a Servicios) */}
      <div className="cookie-banner" id="cookieBanner">
        <p>
          Utilizamos cookies propias y de terceros para mejorar tu experiencia. Más información en nuestra <a href="/politica-cookies">Política de Cookies</a>.
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn-reject" onClick={() => setCookie('rejected')}>Rechazar no esenciales</button>
          <button className="cookie-btn cookie-btn-accept" onClick={() => setCookie('accepted')}>Aceptar todas</button>
        </div>
      </div>
    </>
  );
}