// CtaSection.tsx - Versión Ultra Portable
import React from 'react';

export default function CtaSection() {
  return (
    <section className="py-20 relative bg-[#0D1B2A]">
      <div className='max-w-7xl mx-auto '>
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-[#00C28B] opacity-10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-[#FFD700] opacity-10 blur-xl"></div>

        {/* Poker chips */}
        <div className="absolute top-10 left-10 h-16 w-16 rounded-full border-4 border-[#FFD700] bg-[#0D1B2A] rotate-12"></div>
        <div className="absolute bottom-20 right-20 h-20 w-20 rounded-full border-4 border-[#C62828] bg-[#0D1B2A] -rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 h-12 w-12 rounded-full border-4 border-[#00C28B] bg-[#0D1B2A] rotate-45"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tu Asiento te Espera en la Mesa.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Sin burocracia. Sin depósitos. Solo envía un mensaje y juega. Vamos a repartir.
          </p>
          <button
            className="inline-flex items-center bg-[#FFD700] hover:bg-[#E6C200] text-[#0D1B2A] font-bold px-8 py-4 rounded-lg shadow-lg text-lg transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Envíanos un Mensaje por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}