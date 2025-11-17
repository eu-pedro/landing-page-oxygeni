"use client";

import Image from "next/image";

export function CasuloSpace() {
  const activities = [
    "Reuniões de cocriação com empresas e startups: construção de projetos conjuntos e desenvolvimento de soluções para desafios reais.",
    "Mentorias especializadas com profissionais de mercado (tecnologia, negócios, saúde, direito, etc.).",
    "Grupos de pesquisa e extensão tecnológica, com foco em soluções regionais.",
    "Rodadas de pitch: apresentações de ideias ou negócios por parte de alunos, empresas juniores e startups incubadas.",
    "Hackathons e challenges corporativos, promovidos em parceria com empresas.",
    "Articulações institucionais com governos, investidores e parceiros estratégicos do Oxygeni HUB.",
    "Oficinas de soft skills com foco em negociação, liderança, comunicação assertiva e inteligência emocional.",
    "Grupos de estudo mercadológico e pesquisa aplicada com foco em tendências e oportunidades.",
    "Reuniões de planejamento de squads interdisciplinares e projetos de extensão tecnológica.",
  ];

  return (
    <section className="relative mt-[0.1px] w-full bg-[#681CE3] text-white mt-10 py-16 sm:py-20 overflow-hidden">
      
      <div className="absolute inset-y-0 right-[-20%] hidden sm:flex items-center justify-end opacity-[0.4] pointer-events-none">
        <Image
          src="/oxygeni-logo.webp"
          alt="Oxygeni HUB marca d'água"
          width={1200}
          height={1200}
          className="object-contain w-[260px] sm:w-[600px] lg:w-[700px] h-auto mt-[-600px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 space-y-16">
        {/* Bloco principal (chips + título + parágrafo) */}
        <div className="max-w-3xl text-left">
          <div className="flex flex-wrap gap-3 pt-4 sm:pt-6 mb-6">
            <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
              Inovação
            </span>
            <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
              AMBIENTE DE CONEXÕES
            </span>
            <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
              ESTRATÉGIAS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            CASULO
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
            A Sala CASULO foi pensada como um ambiente reservado, inspirador
            e altamente funcional para interações com o mundo externo, servindo
            como ponte entre a Universidade CEUMA e o ecossistema de inovação,
            startups e empresas parceiras. Seu ambiente mais intimista e
            confortável favorece reuniões estratégicas, mentorias, trocas de
            ideias e articulações institucionais.
          </p>
        </div>

        {/* Bloco das atividades previstas */}
        <div className="relative flex flex-col gap-8 mt-[200px] w-[82vw]">
          


          
          <div className="relative z-10 w-full  max-w-3xl text-left   sm:mt-6 ml-[1%] text-sm sm:text-base md:text-lg leading-relaxed ">
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-6">
              Atividades previstas
            </div>

            <ul className="space-y-4 text-sm sm:text-base">
              {activities.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C78BFF] bg-[#7b2cff]/20 text-[10px] sm:text-xs shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </span>
                  <p className="leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
