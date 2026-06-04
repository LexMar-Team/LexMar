'use client';

import { useEffect } from 'react';

export default function Servicios() {

  // Scroll reveal + parallax hero + cookie banner (igual que en la home)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .service-card').forEach((el) =>
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
            <li><a href="/servicios" className="nav-link active">Servicios</a></li>
            <li><a href="/sobre_nosotros" className="nav-link">Sobre Nosotros</a></li>
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

        {/* ===================== HERO ===================== */}
        <section className="hero" style={{ height: '55vh', minHeight: '420px' }}>
          <div
            className="hero-bg"
            style={{
              backgroundImage:
                "linear-gradient(160deg, rgba(22, 42, 84, 0.85) 0%, rgba(22, 42, 84, 0.55) 100%), url('/pexels-mikebirdy-996328.jpg')",
            }}
          ></div>
          <div className="hero-content">
            <p className="eyebrow">Áreas de práctica</p>
            <h1 className="reveal">
              Servicios jurídicos <span className="text-accent">a tu medida</span>
            </h1>
            <p className="hero-desc reveal reveal-delay-1">
              Asesoramiento especializado en Derecho Laboral, Civil, Penal y de Familia para
              particulares y empresas en Tenerife, Canarias y toda España.
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
              <i className="fa-regular fa-clock"></i> Respuesta en 24–48 h
            </span>
          </div>
        </section>

        {/* ===================== INTRO ===================== */}
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              En LexMar tratamos cada asunto como lo que es: único. Antes de aceptar un caso,
              lo analizamos con honestidad para decirte exactamente qué posibilidades tienes.
              Si hay viabilidad, trabajamos tu asunto como si fuera nuestro. Si no la hay, te
              lo decimos también, porque tu tiempo y tu tranquilidad importan.
            </p>
          </div>
        </section>

        {/* ===================== ÁREAS DETALLADAS ===================== */}
        <section className="section">
          <div className="container">

            {/* ── ÁREA 1: LABORAL ── */}
            <div className="service-area reveal" id="laboral">
              <div className="service-area-header">
                <div className="service-area-icon">
                  <i className="fa-solid fa-anchor"></i>
                </div>
                <div>
                  <h2 className="service-area-title">Derecho Laboral y de la Seguridad Social</h2>
                  <p className="service-area-subtitle">
                    Defensa de trabajadores y asesoramiento a empresas en Tenerife y toda España
                  </p>
                </div>
              </div>
              <p className="service-area-intro">
                El trabajo es uno de los pilares de tu vida. Cuando algo falla —un despido, un
                conflicto con la empresa, un accidente— las consecuencias son inmediatas y el
                sistema puede resultar complicado. En LexMar te acompañamos en todo el proceso,
                desde la primera consulta hasta la resolución del asunto.
              </p>
              <ul className="service-topics">
                <li>Despidos: improcedentes, nulos, disciplinarios y objetivos</li>
                <li>Extinción del contrato (art. 50 ET)</li>
                <li>Conciliación de la vida familiar y laboral</li>
                <li>Reclamación de salarios e indemnizaciones</li>
                <li>Reclamación de antigüedad y categoría</li>
                <li>Sanciones disciplinarias</li>
                <li>Modificaciones sustanciales de condiciones de trabajo</li>
                <li>Acoso laboral y sexual</li>
                <li>ERTEs y expedientes de regulación de empleo</li>
                <li>Accidentes de trabajo y enfermedades profesionales</li>
                <li>Recargo de prestaciones</li>
                <li>Incapacidad temporal y permanente</li>
                <li>Prestaciones por desempleo y conflictos con el SEPE</li>
                <li>Conflictos colectivos y representación sindical</li>
                <li>Asesoramiento a empresas en materia laboral</li>
                <li>Elecciones Sindicales</li>
                <li>Negociación con sindicatos</li>
                <li>Contratos de Alta Dirección</li>
                <li>SEMAC y procedimientos judiciales</li>
              </ul>
              <a href="/contacto" className="service-cta">
                Consultar ahora <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* ── ÁREA 2: CIVIL ── */}
            <div className="service-area reveal" id="civil">
              <div className="service-area-header">
                <div className="service-area-icon">
                  <i className="fa-solid fa-gavel"></i>
                </div>
                <div>
                  <h2 className="service-area-title">Derecho Civil</h2>
                  <p className="service-area-subtitle">
                    Contratos, familia, herencias y reclamaciones en Canarias y toda España
                  </p>
                </div>
              </div>
              <p className="service-area-intro">
                El Derecho Civil regula los aspectos fundamentales de la vida de las personas:
                la propiedad, los contratos, las herencias, la familia, los daños. Cuando surge
                un conflicto en estos ámbitos, contar con el asesoramiento adecuado marca la
                diferencia.
              </p>
              <ul className="service-topics">
                <li>Responsabilidad civil: daños y perjuicios</li>
                <li>Herencias, testamentos y particiones hereditarias</li>
                <li>Divorcios, custodias y modificación de medidas</li>
                <li>Impago de pensiones e incapacitación</li>
                <li>Reclamaciones de cantidad y deudas entre particulares</li>
                <li>Procedimientos monitorios</li>
                <li>Contratos: compraventa, arras, arrendamiento</li>
                <li>Arrendamientos urbanos: desahucios y reclamación de renta</li>
                <li>Reclamaciones judiciales y extrajudiciales</li>
                <li>Propiedad horizontal y comunidades de propietarios</li>
                <li>Contratos para empresas: colaboración, prestación de servicios, confidencialidad…</li>
              </ul>
              <a href="/contacto" className="service-cta">
                Consultar ahora <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* ── ÁREA 3: PENAL ── */}
            <div className="service-area reveal" id="penal">
              <div className="service-area-header">
                <div className="service-area-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div>
                  <h2 className="service-area-title">Derecho Penal</h2>
                  <p className="service-area-subtitle">
                    Defensa y acusación particular en toda clase de delitos
                  </p>
                </div>
              </div>
              <p className="service-area-intro">
                Cuando un asunto llega a la vía penal —ya seas investigado o víctima— lo que
                está en juego es muy serio. En LexMar Abogados actuamos con rigor, rapidez y
                sin rodeos. Somos procesalistas: nos gusta estar en sala y sabemos cómo trabajar
                los casos para obtener el mejor resultado posible.
              </p>
              <ul className="service-topics">
                <li>Defensa en causas penales de todo tipo</li>
                <li>Acusación particular: representación de víctimas y perjudicados</li>
                <li>Denuncias y querellas</li>
                <li>Delitos contra las personas: lesiones, amenazas, coacciones, homicidios…</li>
                <li>Violencia de género y doméstica (defensa y acusación)</li>
                <li>Delitos sexuales: acoso, agresiones…</li>
                <li>Delitos patrimoniales: hurtos, robos, daños, usurpación…</li>
                <li>Delitos económicos: estafas, falsedades, apropiación indebida…</li>
                <li>Delitos contra la seguridad vial: alcoholemia, drogas, conducción temeraria…</li>
                <li>Delitos laborales: accidentes de trabajo, condiciones ilegales…</li>
                <li>Delitos contra la salud pública: tráfico de estupefacientes…</li>
                <li>Delitos contra el honor: calumnias e injurias</li>
                <li>Delitos contra la familia: abandono, impago de alimentos, sustracción de menores…</li>
                <li>Delitos leves y juicios rápidos</li>
                <li>Recursos de apelación</li>
                <li>Jurisdicción de Menores</li>
              </ul>
              <a href="/contacto" className="service-cta">
                Consultar ahora <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* ── ÁREA 4: ACCIDENTES ── */}
            <div className="service-area reveal" id="accidentes">
              <div className="service-area-header">
                <div className="service-area-icon">
                  <i className="fa-solid fa-car-burst"></i>
                </div>
                <div>
                  <h2 className="service-area-title">Accidentes</h2>
                  <p className="service-area-subtitle">
                    Reclamaciones de indemnización a aseguradoras en Tenerife y toda España
                  </p>
                </div>
              </div>
              <p className="service-area-intro">
                Los accidentes de tráfico y los accidentes laborales pueden tener importantes
                consecuencias físicas, económicas y emocionales, tanto para ti como para tus
                allegados. En LexMar te ayudamos a reclamar la indemnización que te corresponde:
                lesiones, daños materiales, lucro cesante y secuelas. Negociamos con las
                aseguradoras y, si es necesario, vamos a juicio. Luchamos por ti y por la máxima
                indemnización.
              </p>
              <ul className="service-topics">
                <li>Accidentes de tráfico: conductor, ocupante o peatón</li>
                <li>Vehículos públicos y privados</li>
                <li>Accidentes de trabajo</li>
                <li>Negligencias médicas</li>
                <li>Reclamación contra aseguradoras</li>
                <li>Vía extrajudicial y judicial</li>
              </ul>
              <a href="/contacto" className="service-cta">
                Consultar ahora <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

          </div>
        </section>

        {/* ===================== CTA FINAL ===================== */}
        <section className="cta-section">
          <div className="container">
            <span className="section-label" style={{ color: 'var(--accent)' }}>
              Podemos ayudarte
            </span>
            <h2>¿Necesitas asesoramiento personalizado?</h2>
            <p>
              La primera consulta es el primer paso. Te diremos con honestidad qué podemos
              hacer por ti.
            </p>
            <a href="/contacto" className="btn-primary">
              Solicitar información <i className="fa-solid fa-arrow-right"></i>
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

      {/* ===================== COOKIE BANNER ===================== */}
      <div className="cookie-banner" id="cookieBanner">
        <p>
          Utilizamos cookies propias y de terceros para mejorar tu experiencia. Más información
          en nuestra <a href="/politica_cookies">Política de Cookies</a>.
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
