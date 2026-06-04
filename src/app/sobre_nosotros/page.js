'use client';

import { useEffect } from 'react';

export default function SobreNosotros() {

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .philosophy-card, .profile-exp-list').forEach((el) =>
      observer.observe(el)
    );

    // Parallax hero
    const handleScroll = () => {
      const heroBg = document.querySelector('.hero-bg');
      if (heroBg) heroBg.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
    };
    window.addEventListener('scroll', handleScroll);

    // Cookie banner check
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
      <header className="main-header">
        <nav className="nav-container">
          <a href="/" className="logo">
            <img src="/LexMar_logo_white.png" alt="LexMar Abogados" />
            <span className="logo-text">LEXMAR</span>
          </a>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger" aria-label="Menú"><span></span></label>
            <span></span>
          

          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Inicio</a></li>
            <li><a href="/servicios" className="nav-link">Servicios</a></li>
            <li><a href="/sobre_nosotros" className="nav-link active">Sobre Nosotros</a></li>
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
        <section className="hero" style={{ height: '55vh', minHeight: '400px' }}>
          <div className="hero-bg" style={{ backgroundImage: "linear-gradient(160deg, rgba(22, 42, 84, 0.88) 0%, rgba(22, 42, 84, 0.55) 100%), url('/pexels-blitzboy-1106412.jpg')" }}></div>
          <div className="hero-content">
            <p className="eyebrow">Quiénes somos</p>
            <h1 className="reveal">Un despacho nacido <span className="text-accent">de una vocación</span></h1>
            <p className="hero-desc reveal reveal-delay-1">Compromiso, transparencia y honestidad en cada caso.</p>
          </div>
        </section>

        <section className="contact-bar">
          <div className="container contact-bar-grid">
            <a href="https://maps.google.com/?q=Calle+Bethencourt+y+Molina+1+Santa+Cruz+Tenerife" className="contact-bar-item" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-location-dot"></i> Santa Cruz de Tenerife
            </a>
            <a href="tel:+34611770042" className="contact-bar-item"><i className="fa-solid fa-phone"></i> 611 770 042</a>
            <a href="mailto:info@lexmarabogados.es" className="contact-bar-item"><i className="fa-solid fa-envelope"></i> info@lexmarabogados.es</a>
            <span className="contact-bar-item"><i className="fa-regular fa-clock"></i> Respuesta en 24–48 h</span>
          </div>
        </section>

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
              <p>LexMar nace de la unión de dos pasiones: el mar y el derecho. Su fundadora, Coral Ramos Gonzalo, eligió este nombre porque ambos comparten algo en común: la capacidad de transmitir calma incluso en los momentos más difíciles. Y eso es exactamente lo que LexMar quiere ofrecerte.</p>
              <p>Coral estudió Derecho y Ciencias Políticas en la Universidad Carlos III de Madrid. Tras siete años en despachos de Madrid, en 2024 regresó a Tenerife. En 2025 fundó LexMar para recuperar el contacto directo con la abogacía de sala, honesta y cercana.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Nuestra filosofía</span>
              <h2 className="section-title">Los principios que nos guían</h2>
              <div className="title-underline"></div>
            </div>
            <div className="philosophy-grid">
              <div className="philosophy-card reveal">
                <h3>El derecho, explicado para que lo entiendas</h3>
                <p>Nada de tecnicismos innecesarios. Te explicamos tu situación con claridad y te ayudamos a tomar decisiones informadas.</p>
              </div>
              <div className="philosophy-card reveal reveal-delay-1">
                <h3>Honestidad por encima de los honorarios</h3>
                <p>No aceptamos casos sin viabilidad real. Si tu asunto no tiene recorrido, te lo decimos antes de que inviertas tiempo y dinero.</p>
              </div>
              <div className="philosophy-card reveal reveal-delay-2">
                <h3>Tu tranquilidad, nuestro objetivo</h3>
                <p>En LexMar trabajamos para que, una vez que nos confíes tu asunto, puedas respirar tranquilo. Nos ocupamos nosotros.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="section-header">
              <span className="section-label">Formación y experiencia</span>
              <h2 className="section-title">Coral Ramos Gonzalo</h2>
              <div className="title-underline"></div>
            </div>
            <ul className="profile-exp-list reveal">
              <li>Graduada en Derecho y Ciencias Políticas — Universidad Carlos III de Madrid</li>
              <li>Máster de Acceso a la Abogacía — Universidad Autónoma de Madrid</li>
              <li>Más de 10 años de experiencia en despachos de Madrid (GSG Abogados, Alonso Román, Plaza Abogados)</li>
              <li>Experiencia como responsable de Relaciones Laborales en gran empresa</li>
              <li>Fundadora de LexMar Abogados (2025)</li>
            </ul>
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
                <li><a href="/politica_privacidad">Política de Privacidad</a></li>
                <li><a href="/politica_cookies">Política de Cookies</a></li>
                <li><a href="/">Inicio</a></li>
                <li><a href="/sobre_nosotros">Sobre Nosotros</a></li>
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
              <li><a href="/politica_privacidad">Privacidad</a></li>
              <li><a href="/politica_cookies">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>


      <div className="cookie-banner" id="cookieBanner">
        <p>Utilizamos cookies propias y de terceros para mejorar tu experiencia. Más información en nuestra <a href="/politica-cookies">Política de Cookies</a>.</p>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn-reject" onClick={() => setCookie('rejected')}>Rechazar no esenciales</button>
          <button className="cookie-btn cookie-btn-accept" onClick={() => setCookie('accepted')}>Aceptar todas</button>
        </div>
      </div>
    </>
  );
}