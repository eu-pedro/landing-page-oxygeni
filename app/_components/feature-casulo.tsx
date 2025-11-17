"use client";

import { section } from "framer-motion/client";

export function FeatureCasulo() {
  
  return (
    <section className="relative w-full bg-linear-to-b from-[#2A0140] to-[#4A0B78] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl flex flex-col   sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-5 text-left md:text-left">
          Ambiente voltado <span className="bg-gradient-to-r from-[#ffffff] to-[#4A0B78] bg-clip-text text-transparent">para relações de valor</span>  
        </h2>

        <div className="grid lg:gap-12 text-white/90 leading-relaxed lg:grid-cols-1">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-white mb-1">
                O CASULO é mais do que uma simples sala de reuniões.
              </h3>
        
            </div>

            



          </div>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                <span className="text-base sm:text-lg">➜</span>
                <span>Funciona como</span>
              </div>

              <ul className="space-y-4 text-sm sm:text-base">
                {[
                  "O CASULO é mais do que uma simples sala de reuniões.",
                  "Ambiente seguro para feedback e validação de soluções.",
                  "Estação de alinhamento estratégico entre academia e mercado.",
                  "Estação de alinhamento estratégico entre academia e mercado.e iniciativas de impacto.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#C78BFF] bg-[#7b2cff]/10 text-[10px] sm:text-xs text-[#E2C2FF] shrink-0">
                      ✓
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>


            
          </div>
        </div>
    
      </div>


    </section>
  );
}