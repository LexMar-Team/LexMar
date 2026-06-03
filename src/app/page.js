'use client';

import { useEffect } from 'react';

export default function LexMarPage() {

  // BUG FIX 8: Las animaciones reveal y la lógica del cookie banner estaban en un
  // <script> inline en el HTML original. En Next.js los scripts inline no se ejecutan.
  // Se reimplementan con useEffect (equivalente al DOMContentLoaded del navegador).
  useEffect(() => {
    // --- Scroll reveal ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .service-card, .value-card').forEach((el) =>
      observer.observe(el)
    );

    // --- Parallax hero ---
    const handleScroll = () => {
      const heroBg = document.querySelector('.hero-bg');
      if (heroBg) heroBg.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
    };
    window.addEventListener('scroll', handleScroll);

    // --- Cookie banner ---
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
      {/* ===================== HEADER ===================== */}
      <header className="main-header">
        <nav className="nav-container">
          {/* BUG FIX 9: Rutas de imágenes corregidas.
              En Next.js la carpeta /public es la raíz web → /LexMar_logo_white.png
              (sin el prefijo "public/") */}
          <a href="/" className="logo">
            <img src="/LexMar_logo_white.png" alt="LexMar Abogados" />
            <span className="logo-text">LEXMAR</span>
          </a>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger" aria-label="Menú">
            <span></span>
          </label>

          <ul className="nav-menu">
            <li><a href="/" className="nav-link active">Inicio</a></li>
            <li><a href="/servicios" className="nav-link">Servicios</a></li>
            <li><a href="/sobre-nosotros" className="nav-link">Sobre Nosotros</a></li>
            <li><a href="/contacto" className="nav-btn-alt">Consulta</a></li>
          </ul>

          <div className="nav-actions">
            <div className="social-icons">
              <a href="#" className="btn-89" aria-label="Facebook" rel="noopener">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="btn-89" aria-label="Instagram" rel="noopener">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="btn-89" aria-label="LinkedIn" rel="noopener">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* ===================== HERO =====================
            BUG FIX 10: Se restaura la estructura original con <div className="hero-bg">.
            El hero del page.js anterior tenía el fondo como backgroundColor inline,
            eliminando el .hero-bg que era necesario tanto para la imagen de fondo como
            para el efecto parallax. Sin .hero-bg el hero tenía altura 0 o un color plano. */}
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-content">
            <p className="eyebrow">Despacho de Abogados · Santa Cruz de Tenerife</p>
            <h1 className="reveal">
              En medio de la tormenta,{' '}
              <span className="text-accent">somos tu calma.</span>
            </h1>
            <p className="tagline">La tranquilidad es el mejor resultado</p>
            <p className="hero-desc reveal reveal-delay-1">
              Asesoramiento jurídico en Derecho Laboral, Civil, Penal para particulares
              y empresas en Tenerife, Canarias y toda España.
            </p>
            <div className="hero-btns reveal reveal-delay-2">
              <a href="/contacto" className="btn-primary">Solicitar consulta</a>
              <a href="/servicios" className="btn-outline">Ver servicios</a>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT BAR ===================== */}
        <section className="contact-bar">
          <div className="container contact-bar-grid">
            <a
              href="https://maps.google.com/?q=Calle+Bethencourt+y+Molina+1+Santa+Cruz+Tenerife"
              className="contact-bar-item"
              target="_blank"
              rel="noopener"
            >
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

        {/* ===================== ÁREAS DE PRÁCTICA =====================
            BUG FIX 11: className era "services-card" (no existe en el CSS).
            La clase correcta del CSS original es "services-grid". */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Áreas de práctica</span>
              <h2 className="section-title">Asesoramiento jurídico integral</h2>
              <p className="section-subtitle">
                Estudiamos cada asunto antes de aceptarlo. Si tiene base jurídica sólida,
                lo trabajamos con la dedicación que merece. Si no la tiene, preferimos decírtelo.
              </p>
              <div className="title-underline"></div>
            </div>

            <div className="services-grid">
              <div className="service-card reveal">
                <div className="service-icon">
                  <i className="fa-solid fa-anchor"></i>
                </div>
                <h3>Derecho Laboral y Seguridad Social</h3>
                <p>
                  Despidos, reclamaciones de cantidad, accidentes de trabajo, sanciones,
                  incapacidad permanente, conciliación de la vida familiar, etc.
                </p>
              </div>
              <div className="service-card reveal reveal-delay-1">
                <div className="service-icon">
                  <i className="fa-solid fa-gavel"></i>
                </div>
                <h3>Derecho Civil</h3>
                <p>
                  Contratos, arrendamientos, reclamaciones de cantidad, desahucios,
                  divorcios, custodias, herencias, etc.
                </p>
              </div>
              <div className="service-card reveal reveal-delay-2">
                <div className="service-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <h3>Derecho Penal</h3>
                <p>
                  Defensa penal y acusación particular. Lesiones, alcoholemia, delitos
                  contra las personas, delitos económicos, etc.
                </p>
              </div>
              <div className="service-card reveal reveal-delay-3">
                <div className="service-icon">
                  <i className="fa-solid fa-car-burst"></i>
                </div>
                <h3>Accidentes</h3>
                <p>
                  Accidentes de tráfico, accidentes de trabajo y responsabilidad civil.
                  Negociamos con aseguradoras y vamos a juicio si es necesario.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a
                href="/servicios"
                className="btn-primary"
                style={{ background: 'var(--primary)', borderColor: 'var(--primary)' }}
              >
                Ver todos los servicios
              </a>
            </div>
          </div>
        </section>

        {/* ===================== POR QUÉ LEXMAR ===================== */}
        <section className="section bg-white">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Nuestra forma de trabajar</span>
              <h2 className="section-title">¿Por qué elegir LexMar Abogados?</h2>
              <div className="title-underline"></div>
            </div>
            <div className="values-grid">
              <div className="value-card reveal">
                <div className="value-number">01</div>
                <h3>Claridad ante todo</h3>
                <p>Sin tecnicismos. Te explicamos tu situación para que decidas con información real.</p>
              </div>
              <div className="value-card reveal reveal-delay-1">
                <div className="value-number">02</div>
                <h3>Honestidad</h3>
                <p>Solo aceptamos asuntos con viabilidad real. Tu tiempo y tu dinero son importantes.</p>
              </div>
              <div className="value-card reveal reveal-delay-2">
                <div className="value-number">03</div>
                <h3>Trato personalizado</h3>
                <p>No eres un expediente. Conocemos tu caso y te acompañamos en cada momento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SOBRE LEXMAR =====================
            BUG FIX 12: La imagen tenía src="public/pexels-blitzboy-1106412.jpg"
            (ruta relativa incorrecta). En Next.js debe ser "/pexels-blitzboy-1106412.jpg". */}
        <section className="section">
          <div className="container about-grid">
            <div className="about-image reveal">
              <img
                src="/pexels-blitzboy-1106412.jpg"
                alt="LexMar Abogados - Despacho en Tenerife"
              />
            </div>
            <div className="about-text reveal reveal-delay-1">
              <span className="section-label">Sobre LexMar</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Un despacho nacido de una vocación
              </h2>
              <div className="title-underline left" style={{ marginBottom: '1.5rem' }}></div>
              <p>
                LexMar nace con un propósito claro: hacer el derecho accesible, comprensible y
                cercano. Combinamos cercanía y rigor jurídico con una forma de trabajar basada en
                la transparencia, la confianza y la protección real de los intereses de cada
                cliente.
              </p>
              <p>Porque la tranquilidad de nuestros clientes es el horizonte que perseguimos.</p>
              <ul className="about-list">
                <li><i className="fa-solid fa-check"></i> Más de 10 años de experiencia</li>
                <li><i className="fa-solid fa-check"></i> Transparencia total en honorarios</li>
                <li><i className="fa-solid fa-check"></i> Especialización en 4 áreas de práctica</li>
                <li><i className="fa-solid fa-check"></i> 100% compromiso con tu caso</li>
              </ul>
              <a
                href="/sobre-nosotros"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: '1.5rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'var(--primary)',
                  textDecoration: 'none',
                }}
              >
                Conocer el despacho <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== STATS ===================== */}
        <section className="stats-strip">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item reveal">
                <div className="stat-number">+10</div>
                <div className="stat-label">Años de experiencia</div>
              </div>
              <div className="stat-item reveal reveal-delay-1">
                <div className="stat-number">4</div>
                <div className="stat-label">Áreas de práctica</div>
              </div>
              <div className="stat-item reveal reveal-delay-2">
                <div className="stat-number">100%</div>
                <div className="stat-label">Compromiso con tu caso</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CTA FINAL ===================== */}
        <section className="cta-section">
          <div className="container">
            <span className="section-label" style={{ color: 'var(--accent)' }}>
              Podemos ayudarte
            </span>
            <h2>¿Tienes un problema legal? Cuéntanoslo.</h2>
            <p>
              La primera consulta es el primer paso. Te diremos con honestidad qué podemos
              hacer por ti, sin compromiso.
            </p>
            <a href="/contacto" className="btn-primary">
              Contactar con LexMar <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <div className="logo" style={{ marginBottom: '0.75rem' }}>
                {/* BUG FIX 13: Ruta corregida de "public/LexMar_logo_white.png" → "/LexMar_logo_white.png" */}
                <img
                  src="/LexMar_logo_white.png"
                  alt="LexMar Abogados"
                  style={{ height: '36px' }}
                />
                <span className="logo-text">LEXMAR</span>
              </div>
              <p>
                Calle Bethencourt y Molina nº 1,
                <br />
                1º Local 36, 38003 Santa Cruz de Tenerife
              </p>
              <p>
                <a
                  href="tel:+34611770042"
                  style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                >
                  611 770 042
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@lexmarabogados.es"
                  style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                >
                  info@lexmarabogados.es
                </a>
              </p>
              <div className="footer-social">
                <a href="#" className="btn-89 btn-89-dark" aria-label="Facebook" rel="noopener">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="btn-89 btn-89-dark" aria-label="Instagram" rel="noopener">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="btn-89 btn-89-dark" aria-label="LinkedIn" rel="noopener">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Servicios</h4>
              <ul className="footer-links">
                <li><a href="/servicios#laboral">Derecho Laboral</a></li>
                <li><a href="/servicios#civil">Derecho Civil</a></li>
                <li><a href="/servicios#penal">Derecho Penal</a></li>
                <li><a href="/servicios#accidentes">Accidentes</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal y navegación</h4>
              <ul className="footer-links">
                <li><a href="/aviso-legal">Aviso Legal</a></li>
                <li><a href="/politica-privacidad">Política de Privacidad</a></li>
                <li><a href="/politica-cookies">Política de Cookies</a></li>
                <li><a href="/">Inicio</a></li>
                <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2025 LexMar Abogados · Coral Ramos Gonzalo, colegiada nº 131177 ICAM · Todos
              los derechos reservados
            </p>
            <ul className="footer-legal-links">
              <li><a href="/aviso-legal">Aviso Legal</a></li>
              <li><a href="/politica-privacidad">Privacidad</a></li>
              <li><a href="/politica-cookies">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* ===================== COOKIE BANNER ===================== */}
      <div className="cookie-banner" id="cookieBanner">
        <p>
          Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el uso
          del sitio web. Más información en nuestra{' '}
          <a href="/politica-cookies">Política de Cookies</a>.
        </p>
        <div className="cookie-actions">
          <button
            className="cookie-btn cookie-btn-reject"
            onClick={() => setCookie('rejected')}
          >
            Rechazar no esenciales
          </button>
          <button
            className="cookie-btn cookie-btn-accept"
            onClick={() => setCookie('accepted')}
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </>
  );
}
