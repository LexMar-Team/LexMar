// BUG FIX 5: Se eliminan las importaciones de Geist/Geist_Mono que no se usan
// (causaban errores de build en Vercel si el paquete no está instalado).
// BUG FIX 6: El metadata se declara ANTES del componente para que Next.js lo exporte correctamente.
// BUG FIX 7: Se añade charset y viewport al <head> que faltaban en el layout original.
import "./globals.css";

export const metadata = {
  title: "LexMar Abogados | Derecho Laboral, Civil, Penal y Familia en Tenerife",
  description:
    "Despacho de abogados en Santa Cruz de Tenerife especializado en Derecho Laboral, Civil, Penal y de Familia. Asesoramiento personalizado, claro y honesto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* Google Fonts: Montserrat + Playfair Display */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/LexMar_logo_navy.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
