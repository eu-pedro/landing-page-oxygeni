import Image from "next/image";

export default function ColabSpace() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 px-8 lg:px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        <div className="flex flex-wrap gap-3 mb-6 justify-start md:justify-start">
          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-[#7b2cff] backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(0,0,0,0.15)]">
            Robótica
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-[#7b2cff] backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(0,0,0,0.15)]">
            Inteligência Artificial
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-[#7b2cff] backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(0,0,0,0.15)]">
            Digitais Imersivas
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-8 sm:mb-10 text-left md:text-left">
          Espaço Colab
        </h2>

        <p className="text-black leading-relaxed">
          O Espaço COLAB é o coração pulsante da colaboração no Oxygni Hub. Um ambiente de trabalho compartilhado,
          com design aberto, multifuncional e pensado para estimular a troca de experiências, a interdisciplinaridade e o empreendedorismo universitário.
        </p>

        <p className="text-black leading-relaxed">
          Neste espaço, convivem os núcleos estratégicos da CEUMA, empresas juniores, startups em estágio inicial,
          professores orientadores, estudantes criadores e parceiros externos. Mais do que um local para sentar e
          produzir, o COLAB é um ecossistema de ação e inovação.
        </p>

        <p className="text-black leading-relaxed">
          O Espaço COLAB é onde o conhecimento se transforma em ação colaborativa. Um verdadeiro centro de protagonismo
          estudantil e inovação aplicada, integrando núcleos institucionais, startups, desenvolvedores e futuros líderes
          em um mesmo ambiente criativo e produtivo.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-14">

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
            <span>Quem ocupa o COLAB?</span>
          </div>

          <p className="text-black leading-relaxed">
            <span className="text-black font-semibold">Núcleos Institucionais:</span>
            O NUTED (Tecnologias Educacionais), o NUSTI (Soluções Tecnológicas Inovadoras),
            o NITE (Inovação e Transferência de Tecnologia), e o Núcleo de Patentes e Propriedade Intelectual.
          </p>

          <p className="text-black leading-relaxed">
            <span className="text-black font-semibold">Empresas Juniores da CEUMA:</span>
            Espaço para atuação, reuniões, atendimento de projetos e captação de clientes.
          </p>

          <p className="text-black leading-relaxed">
            <span className="text-black font-semibold">Desenvolvedores e squads interdisciplinares:</span>
            Projetos com foco em soluções digitais, produtos e desafios do mercado.
          </p>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
            <span>Atividades previstas</span>
          </div>

          <ul className="space-y-4 text-sm sm:text-base text-black">
            {[
              "Desenvolvimento de projetos multidisciplinares com orientação de professores ou mentores externos.",
              "Reuniões de planejamento e sprint reviews de squads.",
              "Ações de consultoria júnior, projetos de extensão, análise de dados e desenvolvimento de MVPs.",
              "Acompanhamento de TCCs aplicados e pesquisas com foco em inovação.",
              "Recepção de desafios corporativos, programas de estágio e pré-incubação de startups.",
              "Redação de projetos de inovação, captação de editais e patentes acadêmicas."
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#C78BFF] bg-[#7b2cff]/10 text-[10px] sm:text-xs text-[#7b2cff] shrink-0">
                  ✓
                </span>
                <p className="text-black">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
            <span>Cultura do COLAB — O espaço promove</span>
          </div>

          <ul className="space-y-4 text-sm sm:text-base text-black">
            {[
              "Trabalho coletivo, não hierárquico, com base na confiança e na entrega de valor.",
              "Interação entre cursos, promovendo diversidade de ideias e soluções.",
              "Modelo de comunidade, onde estudantes, professores e profissionais compartilham conhecimento e oportunidades.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#C78BFF] bg-[#7b2cff]/10 text-[10px] sm:text-xs text-[#7b2cff] shrink-0">
                  ✓
                </span>
                <p className="text-black">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-black/10">
          <div className="flex items-center gap-2 text-[#7b2cff] font-semibold mb-2">
            <span className="text-base sm:text-lg">➜</span>
            <h3 className="text-base sm:text-lg md:text-xl text-black">
              Benefício Intercurso
            </h3>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-black">
            Oferece um espaço onde teoria e prática se encontram por meio da criatividade aplicada à resolução de desafios reais.
            Estimula o protagonismo estudantil e a conexão com o mercado, sendo um ponto de partida para iniciativas empreendedoras
            ou projetos integradores.
          </p>
        </div>

      </div>
    </section>
  );
}
