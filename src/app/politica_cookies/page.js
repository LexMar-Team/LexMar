import { useState } from 'react'; // 1. Importa useState
import Script from 'next/script';

export default function PoliticaCookies() {
  const [formSubmitted, setFormSubmitted] = useState(false); // 2. Define el estado

  // 3. Implementa la función handleSubmit que solicitaste
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
    <div className="container" style={{ maxWidth: '800px', margin: 'auto', padding: '40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <h1 style={{ color: '#2c3e50' }}>Política de Cookies</h1>
      <p>A continuación puede consultar nuestra política de cookies actualizada:</p>
      
      {/* Enlace de Iubenda para Cookies */}
      <a 
        href="https://www.iubenda.com/privacy-policy/40092268/cookie-policy" 
        className="iubenda-white iubenda-noiframe iubenda-embed" 
        title="Política de Cookies"
      >
        Política de Cookies
      </a>

      {/* Script de Iubenda */}
      <Script
        id="iubenda-cookie-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (w,d) { var loader = function () { var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag); }; if(w.addEventListener){ w.addEventListener("load", loader, false); }else if(w.attachEvent){ w.attachEvent("onload", loader); }else{ w.onload = loader; } })(window, document);`,
        }}
      />
      
      <p style={{ marginTop: '30px' }}>
        <a href="/">Volver a la página principal</a>
      </p>
    </div>
  );
}