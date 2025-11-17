import Image from "next/image";

export function SalaPitchIntro() {
  return (
    <section className="relative w-full mt-[-60px] bg-linear-to-t from-[#111827] to-[#6f06a7] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-6 justify-start md:justify-start">

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                <span className="text-base sm:text-lg">➜</span>
                <span>Atividades previstas</span>
              </div>

              <ul className="space-y-4 text-white text-sm sm:text-base">
                {[
                  "Layout flexível com mobiliário colaborativo.",
                  "Painéis para escrita e visualização de mapas mentais e fluxogramas.",
                  "Clima informal que favorece a troca de ideias sem hierarquia.",
                  "Integração com outras salas para ampliar experiências de inovação",
                  
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-end">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#C78BFF] bg-[#7b2cff]/10 text-[10px] sm:text-xs text-[#E2C2FF] shrink-0">
                      ✓
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-[#C78BFF] font-semibold mb-2">
                <span className="text-base sm:text-lg">➜</span>
                <h3 className="text-base sm:text-lg md:text-xl text-white">
                  Benefício Intercurso
                </h3>
              </div>
              <p className="text-xs sm:text-sm w-[70vw] md:text-base text-white/90">
                Oferece um espaço onde teoria e prática se encontram por meio da criatividade aplicada à
                resolução de desafios reais. Estimula o protagonismo estudantil e a conexão com o
                mercado, sendo um ponto de partida para iniciativas empreendedoras ou projetos
                integradores.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
