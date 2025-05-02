// HeroSection.tsx
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] to-[#121212] z-0"></div>
      <div className="max-w-7xl mx-auto container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Únete al Club. <br />
              <span className="text-[#FFD700]">Juega Póker al Instante.</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Crea una cuenta, descarga la aplicación y envíame un mensaje por WhatsApp para recargar tu saldo. Así de
              fácil.
            </p>
            <button 
              className="inline-flex items-center bg-[#00C28B] hover:bg-[#00C28B]/90 text-white font-bold px-6 py-4 rounded-lg shadow-lg transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Comienza Ahora — Mensaje por WhatsApp
            </button>
          </div>
          <div className="relative">
            <div className="relative bg-[#0D1B2A]/50 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#14532D] rounded-lg p-4 shadow-md relative overflow-hidden">
                  {/* Table felt texture */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-[radial-gradient(#14532D_1px,transparent_1px)] bg-[size:8px_8px]"></div>
                  </div>

                  {/* Community cards */}
                  <div className="flex justify-center space-x-2 mb-6 relative">
                    <div className="bg-white rounded-md w-10 h-14 shadow-md flex flex-col justify-between p-1 transform rotate-1">
                      <div className="text-[#C62828] text-xs font-bold">10</div>
                      <div className="text-[#C62828] text-lg font-bold flex justify-center">♥</div>
                      <div className="text-[#C62828] text-xs font-bold self-end">10</div>
                    </div>
                    <div className="bg-white rounded-md w-10 h-14 shadow-md flex flex-col justify-between p-1 transform -rotate-2">
                      <div className="text-[#C62828] text-xs font-bold">J</div>
                      <div className="text-[#C62828] text-lg font-bold flex justify-center">♦</div>
                      <div className="text-[#C62828] text-xs font-bold self-end">J</div>
                    </div>
                    <div className="bg-white rounded-md w-10 h-14 shadow-md flex flex-col justify-between p-1 transform rotate-2">
                      <div className="text-black text-xs font-bold">Q</div>
                      <div className="text-black text-lg font-bold flex justify-center">♠</div>
                      <div className="text-black text-xs font-bold self-end">Q</div>
                    </div>
                    <div className="bg-white rounded-md w-10 h-14 shadow-md flex flex-col justify-between p-1 transform -rotate-1">
                      <div className="text-black text-xs font-bold">K</div>
                      <div className="text-black text-lg font-bold flex justify-center">♣</div>
                      <div className="text-black text-xs font-bold self-end">K</div>
                    </div>
                    <div className="bg-white rounded-md w-10 h-14 shadow-md flex flex-col justify-between p-1 transform rotate-3">
                      <div className="text-[#C62828] text-xs font-bold">A</div>
                      <div className="text-[#C62828] text-lg font-bold flex justify-center">♥</div>
                      <div className="text-[#C62828] text-xs font-bold self-end">A</div>
                    </div>
                  </div>

                  {/* Player hand */}
                  <div className="flex justify-center space-x-1 relative">
                    <div className="bg-white rounded-md w-12 h-16 shadow-lg flex flex-col justify-between p-1 transform rotate-6 z-10 border border-[#FFD700]">
                      <div className="text-black text-sm font-bold">A</div>
                      <div className="text-black text-2xl font-bold flex justify-center">♠</div>
                      <div className="text-black text-sm font-bold self-end">A</div>
                    </div>
                    <div className="bg-white rounded-md w-12 h-16 shadow-lg flex flex-col justify-between p-1 transform -rotate-6 z-10 border border-[#FFD700]">
                      <div className="text-black text-sm font-bold">A</div>
                      <div className="text-black text-2xl font-bold flex justify-center">♣</div>
                      <div className="text-black text-sm font-bold self-end">A</div>
                    </div>
                  </div>

                  {/* Poker chips */}
                  <div className="absolute bottom-2 left-2 flex space-x-[-8px]">
                    <div className="w-8 h-8 rounded-full bg-[#FFD700] border-2 border-white shadow-md flex items-center justify-center text-[10px] text-[#0D1B2A] font-bold">
                      100
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#C62828] border-2 border-white shadow-md flex items-center justify-center text-[10px] text-white font-bold">
                      500
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#0D1B2A] border-2 border-white shadow-md flex items-center justify-center text-[10px] text-white font-bold">
                      1K
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-2 flex space-x-[-8px]">
                    <div className="w-8 h-8 rounded-full bg-[#00C28B] border-2 border-white shadow-md flex items-center justify-center text-[10px] text-white font-bold">
                      50
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#FFD700] border-2 border-white shadow-md flex items-center justify-center text-[10px] text-[#0D1B2A] font-bold">
                      100
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 rounded-full bg-[#00C28B]"></div>
                    <div className="ml-2">
                      <div className="h-3 w-20 bg-gray-200 rounded"></div>
                      <div className="h-2 w-16 bg-gray-100 rounded mt-1"></div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mb-2 ml-auto w-3/4">
                    <div className="text-xs text-gray-800">¡Hola! Quiero jugar 🃏</div>
                  </div>
                  <div className="bg-[#00C28B]/10 rounded-lg p-2 w-3/4">
                    <div className="text-xs text-gray-800">Tu cuenta ha sido cargada con $50.000 ✅</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-[#FFD700]/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 h-16 w-16 bg-[#00C28B]/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}