import React from 'react';

export const metadata = {
  robots: 'noindex, nofollow',
};

export default function AvisoLegal() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', lineHeight: '1.6' }}>
      <h1>Aviso Legal</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>1. Información general</h2>
        <p>
          El titular de esta página web es Coral Ramos Gonzalo, con NIF/CIF [Tu número de NIF], 
          y domicilio social en [Tu dirección completa]. Puedes contactar con nosotros en el correo electrónico: 
          <a href="mailto:tuemail@dominio.com"> info@lexmarabogados.es</a>.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>2. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos de esta web (textos, gráficos, logotipos, imágenes) son propiedad exclusiva de 
          LexMar y están protegidos por la legislación vigente de propiedad intelectual.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso a este sitio web implica la aceptación de las presentes condiciones. El usuario se compromete 
          a hacer un uso diligente y lícito de los contenidos.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>4. Limitación de responsabilidad</h2>
        <p>
          LexMar no se hace responsable de los daños o perjuicios que pudieran derivarse de 
          interferencias, omisiones, interrupciones, virus informáticos o averías telefónicas ajenas a nuestra voluntad.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>5. Legislación y jurisdicción</h2>
        <p>
          La presente web se rige por la legislación española. Cualquier controversia será sometida a los 
          Juzgados y Tribunales de Santa Cruz de Tenerife, salvo que la ley aplicable disponga otra cosa
        </p>
      </section>
    </main>
  );
}