'use client';
 
import { useState, useEffect } from 'react';
 
export default function Contacto() {
  const [formSubmitted, setFormSubmitted] = useState(false);
 
  // Scroll reveal + parallax hero + cookie banner
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
 
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
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const formData = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      area: e.target.area.value,
      mensaje: e.target.mensaje.value,
    };
 
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
 
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert('Hubo un error al enviar el mensaje, inténtalo de nuevo.');
      }
    } catch {
      alert('Hubo un error al enviar el mensaje, inténtalo de nuevo.');
    }
  };
 
  return (
    <>
      {/* ===================== HEADER ===================== */}
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
            <li><a href="/sobre-nosotros" className="nav-link">Sobre Nosotros</a></li>
            <li><a href="/contacto" className="nav-btn-alt active">Consulta</a></li>
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
 
        {/* ===================== HERO ===================== */}
        <section className="hero" style={{ height: '50vh', minHeight: '380px' }}>
          <div
            className="hero-bg"
            style={{
              backgroundImage:
                "linear-gradient(160deg, rgba(22, 42, 84, 0.88) 0%, rgba(22, 42, 84, 0.55) 100%), url('/pexels-mikebirdy-996328.jpg')",
            }}
          ></div>
          <div className="hero-content">
            <p className="eyebrow">Primer paso hacia tu tranquilidad</p>
            <h1 className="reveal">
              ¿Cómo podemos <span className="text-accent">ayudarte?</span>
            </h1>
            <p className="hero-desc reveal reveal-delay-1">
              Estamos aquí para escucharte. Rellena el formulario o contáctanos directamente,
              y te respondemos en el menor tiempo posible.
            </p>
          </div>
        </section>
 
        {/* ===================== CONTACT BAR ===================== */}
        <section className="contact-bar">
          <div className="container contact-bar-grid">
            <a
              href="https://maps.google.com/?q=Calle+Bethencourt+y+Molina+1+Santa+Cruz+Tenerife"
              className="contact-bar-item"
              target="_blank"
              rel="noopener noreferrer"
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
              <i className="fa-regular fa-clock"></i> Lun–Vie: 9:00–18:00
            </span>
          </div>
        </section>
 
        {/* ===================== FORMULARIO Y DATOS ===================== */}
        <section className="section">
          <div className="container">
            <div className="contact-card reveal">
 
              {/* ── DATOS DE CONTACTO ── */}
              <div className="contact-info">
                <div>
                  <h2>Información de contacto</h2>
                  <p>Estamos listos para escuchar su caso y ofrecerle la mejor estrategia legal.</p>
                </div>
 
                <ul className="contact-details">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>
                      Calle Bethencourt y Molina nº 1, 1º Local 36
                      <br />
                      38003 Santa Cruz de Tenerife
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <a
                      href="tel:+34611770042"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      611 770 042
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a
                      href="mailto:info@lexmarabogados.es"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      info@lexmarabogados.es
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe"></i>
                    <a
                      href="https://www.lexmarabogados.es"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      www.lexmarabogados.es
                    </a>
                  </li>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>Lunes – Viernes: 9:00 – 18:00</span>
                  </li>
                </ul>
 
                <div
                  className="footer-social"
                  style={{ marginTop: 'auto', paddingTop: '2rem' }}
                >
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
 
              {/* ── FORMULARIO ── */}
              <div className="contact-form">
                <h3>Enviar consulta</h3>
 
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre Completo *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ej: Juan García"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="juan@ejemplo.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono de Contacto</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="+34 000 000 000"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="area">Área del asunto</label>
                      <select id="area" name="area" defaultValue="">
                        <option value="" disabled>Seleccione el área...</option>
                        <option value="laboral">Derecho Laboral</option>
                        <option value="civil">Derecho Civil</option>
                        <option value="penal">Derecho Penal</option>
                        <option value="familia">Derecho de Familia</option>
                        <option value="sucesiones">Sucesiones</option>
                        <option value="accidente">Accidente de tráfico</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mensaje">Cuéntanos brevemente tu situación *</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        placeholder="Escribe aquí brevemente tu consulta legal..."
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label className="form-checkbox">
                        <input type="checkbox" id="privacidad" name="privacidad" required />
                        <span>
                          He leído y acepto la{' '}
                          <a href="/politica-privacidad" target="_blank">
                            Política de Privacidad
                          </a>{' '}
                          *
                        </span>
                      </label>
                    </div>
                    <button type="submit" className="btn-submit">
                      Enviar consulta
                    </button>
                    <p className="form-disclaimer">
                      Toda la información que nos facilites es estrictamente confidencial y
                      está protegida por el secreto profesional y la normativa de protección
                      de datos (RGPD y LOPDGDD). Nos comprometemos a responderte en un plazo
                      máximo de 24–48 horas en días hábiles.
                    </p>
                  </form>
                ) : (
                  <div className="form-success" style={{ display: 'block' }}>
                    <i
                      className="fa-solid fa-circle-check"
                      style={{
                        fontSize: '2rem',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        display: 'block',
                      }}
                    ></i>
                    <h4>¡Gracias por contactar con LexMar!</h4>
                    <p>
                      Hemos recibido tu mensaje y nos pondremos en contacto contigo en un
                      plazo máximo de 24–48 horas. Si tu asunto es urgente, llámanos
                      directamente al{' '}
                      <a href="tel:+34611770042" style={{ color: 'var(--accent)' }}>
                        611 770 042
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
 
            </div>
          </div>
        </section>
 
      </main>
 
      {/* ===================== FOOTER ===================== */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <div className="logo" style={{ marginBottom: '0.75rem' }}>
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
          Utilizamos cookies propias y de terceros para mejorar tu experiencia. Más información
          en nuestra <a href="/politica-cookies">Política de Cookies</a>.
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
