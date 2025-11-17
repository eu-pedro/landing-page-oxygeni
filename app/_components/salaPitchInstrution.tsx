import Image from "next/image";

export function SalaPitchInstructions() {
  return (
    <section className="relative w-full mt-[-60px] bg-linear-to-t from-[#6f06a7] to-[#4A0B78] py-12 sm:py-16 lg:py-20 overflow-hidden">
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
                  "Sessões de Design Thinking, Design Sprint, brainstorming e prototipagem rápida.",
                  "Apresentações de pitch de projetos, startups e TCCs com banca avaliadora ou parceiros externos.",
                  "Oficinas de criatividade aplicada, resolução de problemas e mapeamento de oportunidades.",
                  "Simulações de Shark Tank, bancas de desafios, painéis de feedback.",
                  "Preparação de alunos para desafios como hackathons, Olimpíadas de Inovação e maratonas INCODE.",
                  "Eventos como о OxygeniUp, Talks, cursos de curta duração e rodas de ideias.",
                  
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


          </div>
        </div>
      </div>

    </section>
  );
}
