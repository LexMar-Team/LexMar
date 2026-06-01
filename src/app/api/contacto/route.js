import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  mensaje: z.string().min(10),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const validatedData = schema.parse(body);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@lexmarabogados.es',
      subject: `Nueva consulta de ${validatedData.nombre}`,
      text: `Mensaje: ${validatedData.mensaje}`,
    });

    return NextResponse.json({ message: 'Enviado', data });
  } catch (error) {
    // ESTO MOSTRARÁ EL ERROR REAL EN TU TERMINAL
    console.error("ERROR DETALLADO:", error); 
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}