/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Añade esta línea
  images: {
    unoptimized: true, // <--- Importante: desactiva la optimización de imágenes de Next.js
  },
}

module.exports = nextConfig
