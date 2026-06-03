'use client';
import Script from 'next/script';

export default function PoliticaPrivacidad() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: 'auto', padding: '40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <h1 style={{ color: '#2c3e50' }}>Política de Privacidad</h1>
      <p>A continuación puede consultar nuestra política de privacidad actualizada:</p>
      
      {/* Enlace de Iubenda */}
      <a 
        href="https://www.iubenda.com/privacy-policy/40092268" 
        className="iubenda-white iubenda-noiframe iubenda-embed" 
        title="Política de Privacidad"
      >
        Política de Privacidad
      </a>

      {/* Carga del script de Iubenda */}
      <Script
        id="iubenda-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (w,d) {
                var loader = function () {
                    var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
                    s.src="https://cdn.iubenda.com/iubenda.js"; 
                    tag.parentNode.insertBefore(s,tag);
                }; 
                if(w.addEventListener){
                    w.addEventListener("load", loader, false);
                }else if(w.attachEvent){
                    w.attachEvent("onload", loader);
                }else{
                    w.onload = loader;
                }
            })(window, document);
          `,
        }}
      />
      
      <p style={{ marginTop: '30px' }}>
        <a href="/">Volver a la página principal</a>
      </p>
    </div>
  );
}