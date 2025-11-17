import Image from "next/image";

export function AlfaBetaInstructions() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#09071d] to-[#4A0B78] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-6 justify-start md:justify-start">

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                <span className="text-base sm:text-lg">➜</span>
                <span>Estrutura e Aplicações</span>
              </div>

              <ul className="space-y-4 text-white text-sm sm:text-base">
                {[
                  "Salas de aula tecnológicas com recursos multimídia, ideais para metodologias ativas.",
                  "Ambientes de formação continuada e extensão universitária.",
                  "Workshops, treinamentos, maratonas de inovação e bootcamps.",
                  "Apresentações de TCCs aplicados e pitchs de startups universitárias.",
                  "Eventos internos com empresas parceiras (como talks, rodas de conversa e mini palestras).",
                  "Sala tradicional, mas com potencial para receber bootcamps, maratonas, formações da INCODE, oficinas com empresas.",
                  "Cursos de todas as áreas podem realizar momentos de aulas teóricas em metodologias ativas aqui.",
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
              <p className="text-xs sm:text-sm w-[50vw] md:text-base text-white/90">
                Cria um ambiente ativo de aprendizagem e inovação, promovendo integração entre os
                cursos e conexão com práticas de mercado. Permite múltiplos formatos: desde uma aula
                tradicional com apoio digital até uma experiência imersiva de formação por desafios.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
