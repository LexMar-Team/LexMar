'use client';
import { useState } from 'react';
import '../globals.css'; // Asegúrate de que esta ruta sea la correcta

export default function Contacto() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      area: e.target.area.value,
      mensaje: e.target.mensaje.value,
    };

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
  };

  return (
    <>
      <header className="main-header">
        <nav className="nav-container">
          <a href="index.html" className="logo">
            <img src="LexMar_logo_white.png" alt="LexMar Abogados" />
            <span className="logo-text">LEXMAR</span>
          </a>
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger" aria-label="Menú"><span></span></label>
          <ul className="nav-menu">
            <li><a href="index.html" className="nav-link">Inicio</a></li>
            <li><a href="servicios.html" className="nav-link">Servicios</a></li>
            <li><a href="sobre-nosotros.html" className="nav-link">Sobre Nosotros</a></li>
            <li><a href="contacto.html" className="nav-btn-alt active">Consulta</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" style={{ height: '50vh', minHeight: '380px' }}>
          <div className="hero-bg" style={{ backgroundImage: "linear-gradient(160deg, rgba(22, 42, 84, 0.88) 0%, rgba(22, 42, 84, 0.55) 100%), url('/pexels-mikebirdy-996328.jpg')" }}></div>
          <div className="hero-content">
            <p className="eyebrow">Primer paso hacia tu tranquilidad</p>
            <h1 className="reveal">¿Cómo podemos <span className="text-accent">ayudarte?</span></h1>
            <p className="hero-desc reveal reveal-delay-1">Estamos aquí para escucharte. Rellena el formulario o contáctanos directamente, y te respondemos en el menor tiempo posible.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-card reveal">
              <div className="contact-info">
                <h2>Información de contacto</h2>
                <ul className="contact-details">
                  <li><i className="fa-solid fa-location-dot"></i> <span>Calle Bethencourt y Molina nº 1, 1º Local 36<br />38003 Santa Cruz de Tenerife</span></li>
                  <li><i className="fa-solid fa-phone"></i> <a href="tel:+34611770042">611 770 042</a></li>
                  <li><i className="fa-solid fa-envelope"></i> <a href="mailto:info@lexmarabogados.es">info@lexmarabogados.es</a></li>
                </ul>
              </div>

              <div className="contact-form">
                <h3>Enviar consulta</h3>
                {!formSubmitted ? (
                  <form id="formContainer" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre Completo *</label>
                      <input type="text" id="nombre" name="nombre" placeholder="Ej: Juan García" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico *</label>
                      <input type="email" id="email" name="email" placeholder="juan@ejemplo.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono de Contacto</label>
                      <input type="tel" id="telefono" name="telefono" placeholder="+34 000 000 000" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="area">Área del asunto</label>
                      <select id="area" name="area">
                        <option value="">Seleccione el área...</option>
                        <option value="laboral">Derecho Laboral</option>
                        <option value="civil">Derecho Civil</option>
                        <option value="penal">Derecho Penal</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mensaje">Cuéntanos brevemente tu situación *</label>
                      <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                    </div>
                    <div className="form-group">
                      <label className="form-checkbox">
                        <input type="checkbox" id="privacidad" name="privacidad" required />
                        <span>He leído y acepto la <a href="politica_de_privacidad.html" target="_blank">Política de Privacidad</a> *</span>
                      </label>
                    </div>
                    <button type="submit" className="btn-submit">Enviar consulta</button>
                  </form>
                ) : (
                  <div className="form-success">
                    <i className="fa-solid fa-circle-check" style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '0.75rem' }}></i>
                    <h4>¡Gracias por contactar con LexMar!</h4>
                    <p>Hemos recibido tu mensaje. Nos pondremos en contacto en 24–48 horas.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}