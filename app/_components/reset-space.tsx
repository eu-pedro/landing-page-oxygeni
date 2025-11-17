import Image from "next/image";

export default function ResetSpace() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#4A0B78] to-[#2A0140] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

       
        <div className="flex flex-wrap gap-3 mb-6 justify-start md:justify-start">
          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            Bem-estar
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            Coneções
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
           Criatividade
          </span>
        </div>

       
         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-10 text-left md:text-left">
          Espaço RESET
        </h2>

        
        <p className="text-gray-300 leading-relaxed">
          O Espaço RESET foi idealizado como um ambiente de respiro dentro do
          ecossistema de inovação. Em meio à intensidade de ideias,
          desenvolvimento e produção, ele cumpre um papel essencial:
          proporcionar momentos de pausa consciente, equilíbrio emocional e
          reconexão com o coletivo.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Mais do que uma sala de descanso, o RESET é um espaço multifuncional,
          que pode ser usado para reuniões informais, rodas de conversa, eventos
          leves, experiências culturais e dinâmicas de integração.
        </p>

        <p className="text-gray-300 leading-relaxed">
          O Espaço RESET reforça a visão do Oxygeni HUB como um ecossistema
          humano, criativo e sustentável, que valoriza tanto a produtividade
          quanto o bem-estar. Aqui, descansar também é inovar — porque boas
          ideias precisam de pausas para florescer.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-14">
        
       
        <div>
           <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                <span> Propósito do RESET</span>
              </div>

          <ul className="space-y-4 text-sm sm:text-base text-gray-300">
                {[
                  "  Cuidar do bem-estar emocional e social da comunidade acadêmica.",
                  " Estimular a criatividade fluida e descontraída, onde grandes ideias costumam surgir.",
                  "  Ser um ambiente seguro para trocas sinceras, mentorias espontâneas e encontros entre alunos, professores e parceiros.",
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

     
        <div>
           <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                <span>Atividades previstas</span>
            </div>

         <ul className="space-y-4 text-sm sm:text-base text-gray-300">
                {[
                  " Rodas de conversa entre alunos, professores e mentores.",
                  " Clubes temáticos: leitura, cinema, inovação, empreendedorismo, diversidade.",
                  " Mini palestras inspiradoras, TED universitário, “talks de bolso”.",
                  " Dinâmicas de soft skills: empatia, escuta ativa, colaboração, storytelling.",
                  " Sessões de meditação, mindfulness, yoga ou alongamento.",
                  " Sessões criativas livres: ideação descontraída, cocriação de projetos em clima informal.",
                  "  Exposições artísticas de alunos, músicas, podcasts e momentos culturais.",
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


         <div>
           <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                <span>Estrutura Física</span>
            </div>

         <ul className="space-y-4 text-sm sm:text-base text-gray-300">
                {[
                  " Poltronas e pufes confortáveis , iluminação suave e decoração acolhedora.",
                  "Espaço com isolamento acústico parcial para conversar tranquilas.",
                  " Recursos multimidia para exibição de videos, podcasts e apresentações curtas.",
                  "Possibilidade de café colaborativo ou espaço para lanche entre equipes.",
                 
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

          <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-[#C78BFF] font-semibold mb-2">
                <span className="text-base sm:text-lg">➜</span>
                <h3 className="text-base sm:text-lg md:text-xl text-white">
                  Benefício Intercurso
                </h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-white/90">
                Promove equilíbrio, escuta,criatividade e saúde mental, beneficiando todos os 
                cursos da universidade. É O ambiente onde conexões humanas se fortalecem,
                e as ideias podem emergir de forma mais natural e colaborativa.
              </p>
            </div>
         
      </div>

    </section>
  );
}
