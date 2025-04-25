// TestimonialsSection.tsx - Versión Ultra Portable
import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Miguel R.",
      avatar: "M",
      quote: "Recargué a través de WhatsApp en 30 segundos y entré a una partida.",
    },
    {
      name: "Sara T.",
      avatar: "S",
      quote: "Mucho más fácil que PayPal o transferencias bancarias. ¡Solo envía un mensaje y listo!",
    },
    {
      name: "David K.",
      avatar: "D",
      quote: "La experiencia de club de póker más personal y eficiente que he tenido.",
    },
  ];

  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Lo Que Dicen Nuestros Jugadores</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#0D1B2A] rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="h-12 w-12 rounded-full bg-[#00C28B] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-4 w-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="px-6 py-3 text-lg border border-[#FFD700] text-[#FFD700] rounded-full flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Club Verificado - Confiado por más de 500 Jugadores
          </div>
        </div>
      </div>
    </section>
  );
}