import Image from "next/image";

export default function IncodeSpace() {
  return (
    <section className="relative w-full bg-linear-to-b bg-black py-12 sm:py-16 lg:py-20 px-8 lg:px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

       
        <div className="flex flex-wrap gap-3 mb-6 justify-start md:justify-start">
          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
           Tecnologia 
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            Desenvolvimento 
          </span>

          <span className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
           Prática
          </span>
        </div>

       
         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-10 text-left md:text-left">
          Incode Tech School
        </h2>

        
        <p className="text-gray-300 leading-relaxed">
         A INCODE Tech School, sediada dentro do Oxygeni HUB no CEUMA
          Campus Renascença, representa a escola de tecnologia da vida
           real, conectando o ensino à prática com metodologias ágeis,
            aprendizagem baseada em desafios e parceria direta com
          empresas, startups e o ecossistema de inovação.
        </p>

        <p className="text-gray-300 leading-relaxed">
         Este espaço abriga as turmas dos cursos livres de tecnologia
         , além de ser usado como laboratório prático dos cursos de
          graduação como Análise e Desenvolvimento de Sistemas [ADS] 
          e Engenharia de Software. Também funciona como ponto de
           partida para experiências como bootcamps, hackathons,
          mentorias e desafios corporativos.
        </p>

      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-14">
        
       
        <div>
           <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                <span> O que acontece na INCODE</span>
              </div>

          <ul className="space-y-4 text-sm sm:text-base text-gray-300">
                {[
                  "  Aulas presenciais formação INCODE.",
                  " Atividades práticas para cursos da CEUMA, especialmente: Projetos Integradores de ADS e Eng. Software e Oficinas para outras áreas (Saúde, Direito, Administração etc.) que desejam desenvolver soluções tecnológicas.",
                  "  Programas de extensão e iniciação tecnológica: voltados a estudantes de outras graduações que desejam aprender a programar ou entender melhor o universo digital.",
                  " Startup Experience: alunos atuam como desenvolvedores em projetos reais com startups do Oxygeni ou empresas parceiras.",
                  " Maratonas de programação e eventos como a INCODE Challenge.",
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
                <span>Metodologias Ativas Aplicadas</span>
            </div>

         <ul className="space-y-4 text-sm sm:text-base text-gray-300">
                {[
                  " Microlearning e trilhas curtas de conhecimento.",
                  " Challenge Based Learning: aprendizado com base em desafios.",
                  "Peer-to-peer: colaboração entre pares.",
                  "Gamificação com sistema de ranking, PINs, certificados por etapa e vitrine de talentos.",
                  
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
                A INCODE serve como hub formativo transversal, acessível a qualquer aluno da CEUMA interessado em tecnologia, programação e inovação.
                 É um espaço que democratiza o conhecimento digital, oferece alta empregabilidade e amplia a visão de mundo dos estudantes.
              </p>
            </div>
         
      </div>

  



    </section>
  );
}
