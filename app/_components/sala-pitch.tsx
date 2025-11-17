

export function SalaPitchSpace() {
  return (
    <section className="relative w-full  bg-[#4A0B78] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-6 justify-start md:justify-start">
          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            PRÁTICA  
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            COCRIAÇÃO 
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            CRIATIVIDADE
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-10 text-left md:text-left">
          SALA <span className="bg-gradient-to-r  from-[#ffffff] to-[#ac38ff] bg-clip-text text-transparent">PITCH</span> 
        </h1>

        <div className="grid gap-10 lg:gap-12 text-white/90 leading-relaxed lg:grid-cols-1">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="w-[70vw] text-lg sm:text-xl text-white mb-1">
                <strong>A Sala PITCH</strong> foi pensada como um ambiente disruptivo,
                dinâmico e inspirador, que estimula a criatividade, o
                pensamento inovador e o trabalho em equipe. Equipada
                com poltronas móveis, painéis de vidro, recursos
                multimídia e elementos de design flexível, ela promove
                uma experiência diferenciada de aprendizado, ideal para
                atividades práticas, imersões e sessões colaborativas.
                Além disso, conta com uma divisória de vidro que a
                conecta diretamente ao Espaço COLAB, permitindo a
                expansão para eventos maiores e criando um
                ecossistema fluido entre ideação (Sala Pitch) e execução
                (Espaço Colab).
              </h3>
              <h3 className="w-[70vw] mt-6 text-lg sm:text-xl text-white mb-1">
                <strong>A Sala PITCH</strong>  é um espaço onde ideias ganham forma, se
                transformam em soluções e são apresentadas com
                propósito. Ela simboliza o espírito do Oxygeni HUB: um
                lugar onde pensar diferente é o ponto de partida para
                inovar juntos.
              </h3>

            </div>

          </div>
        </div>
      </div>


    </section>
  );
}
