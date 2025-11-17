"use client";

import Image from "next/image";

export function EcosystemsCasulo() {
  
  return (
    <section className="relative w-full bg-linear-to-b text-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl flex flex-col   sm:text-4xl lg:text-5xl font-extrabold text-black mb-8 sm:mb-5 text-left md:text-left">
          Interdisciplinaridade <span className="bg-gradient-to-r from-[#1e0a75] to-[#9d14ff] bg-clip-text text-transparent">e visão de ecossistema</span>  
        </h2>

        <div className="grid lg:gap-12  leading-relaxed lg:grid-cols-1">
          <div className="space-y-6 w-[67vw] sm:space-y-8">
<div>

  <h3 className="font-bold text-lg sm:text-xl text-black mb-1 mt-[-20px]">
    A Sala CASULO será utilizada como "base de
    lançamento" de diversas iniciativas do Oxygeni HUB
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
                  <li key={item} className="flex gap-3 items-end">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#8f28f0] bg-[#7b2cff]/10 text-[10px] sm:text-xs text-[#8f28f0] shrink-0">
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
        <div className="flex flex-col sm:flex-row items-start justify-between border-t border-white/10 mt-[100px] bg-gray-900 w-full px-4 sm:px-10 py-10 sm:py-16 relative overflow-hidden">
        
        {/* Texto */}
        <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-2 text-[#C78BFF] font-semibold">
            <span className="text-2xl sm:text-5xl">➜</span>
            <h1 className="text-2xl sm:text-4xl text-white">
                Benefício Intercurso
            </h1>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
            A Sala CASULO é um ponto de conexão, diálogo e construção. Um espaço
            pensado para acolher ideias e transformá-las em soluções reais. Com foco
            em integração com o ecossistema externo, ela fortalece o protagonismo
            estudantil e posiciona a Universidade CEUMA como um ambiente inovador,
            conectado e relevante para o futuro do trabalho.
            </p>
        </div>

        {/* Logo (some no mobile) */}
        <div className="hidden sm:flex items-center justify-end opacity-20 pointer-events-none">
            <Image
            src="/oxygeni-logo.webp"
            alt="Oxygeni HUB marca d'água"
            width={600}
            height={400}
            className="object-contain w-[180px] md:w-[300px] lg:w-[450px]"
            />
        </div>
        </div>


    </section>
  );
}