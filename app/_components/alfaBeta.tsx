import Image from "next/image";

export function AlfaBetaSpace() {
  return (
    <section className="relative mt-[-80px] w-full bg-linear-to-b bg-[#09071d] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-6 justify-start md:justify-start">
          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            AULAS
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            FORMACÕES 
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            OFICINAS E EVENTOS
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-10 text-left md:text-left">
          SALA ALFA-<span className="bg-gradient-to-r from-[#b5b1c7] to-[#9d14ff] bg-clip-text text-transparent">BEТА</span> 
        </h1>

        <div className="grid gap-10 lg:gap-12 text-white/90 leading-relaxed lg:grid-cols-1">
          <div className="space-y-6 sm:space-y-8">
<div className="grid gap-10 lg:gap-12 text-white/90 leading-relaxed lg:grid-cols-1">
  <div className="space-y-6 sm:space-y-8">
    <div>
      <h3 className="w-[100%px] text-lg sm:text-xl text-white mb-1">
        As salas ALFA e BETA formam um espaço flexível e adaptável, que
        pode funcionar como duas salas independentes para aulas, oficinas
        e encontros teóricos, ou como uma única sala integrada para eventos
        maiores, formações, apresentações e hackathons. A divisória de vidro
        permite essa transformação com facilidade, tornando o ambiente um
        recurso estratégico para formação multidisciplinar.ARA – Laboratório Avançado de Robótica e Automação
      </h3>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>


    </section>
  );
}
