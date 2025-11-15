"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

export function AppleLabSpace() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#2A0140] to-[#4A0B78] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-6">
          {["Robótica", "Inteligência Artificial", "Digitais Imersivas"].map(
            (badge) => (
              <span
                key={badge}
                className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]"
              >
                {badge}
              </span>
            )
          )}
        </div>
        <AnimateOnScroll>
          <h2
            id="spaces"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-10"
          >
            APPLE LAB
          </h2>

          <div className="grid gap-10 lg:gap-12 text-white/90 leading-relaxed lg:grid-cols-1">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-1">
                  LARA – Laboratório Avançado de Robótica e Automação
                </h3>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Aplicações:</span> robótica
                  educacional, automação industrial, prototipagem e controle
                  embarcado. Ideal para cursos como Engenharia Mecânica,
                  Engenharia Elétrica, Engenharia de Produção e Computação.
                </p>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-1">
                  LIA – Laboratório de Inteligência Artificial
                </h3>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Aplicações:</span> análise de
                  dados, machine learning, visão computacional e IA aplicada à
                  saúde, negócios e demais áreas. Apoia pesquisas em
                  processamento de dados, automação de processos e algoritmos
                  preditivos. Voltado para Ciência da Computação, Sistemas de
                  Informação, Administração, Direito e Saúde.
                </p>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-1">
                  LUIGI – Laboratório Universitário de Inovação em Games e
                  Imersão
                </h3>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Aplicações:</span>{" "}
                  desenvolvimento de jogos, experiências em VR/AR, storytelling
                  digital, prototipagem UX/UI e gamificação de processos. Ideal
                  para Design, Comunicação, Publicidade, Arquitetura e
                  Computação.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                  <span>Atividades previstas</span>
                </div>

                <ul className="space-y-4 text-sm sm:text-base">
                  {[
                    "Minicursos e oficinas temáticas: Robótica Educacional, Introdução à IA, Desenvolvimento de Games, Imersão em UX/UI.",
                    "Projetos de iniciação científica e TCCs aplicados em tecnologia.",
                    "Grupos de pesquisa e extensão tecnológica, com foco em soluções regionais.",
                    "Hackathons e challenges corporativos, promovidos em parceria com empresas.",
                    "Experimentos de simulação: modelos virtuais, automações, jogos sérios.",
                    "Interações com startups e empresas parceiras, para testes de produtos e validação de protótipos.",
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
                  O Apple Lab promove a integração entre cursos ao oferecer um
                  ambiente de experimentação tecnológica onde diferentes áreas
                  podem colaborar no desenvolvimento de soluções em robótica,
                  inteligência artificial e experiências digitais imersivas. Ele
                  conecta teoria e prática, ampliando a interdisciplinaridade, a
                  pesquisa aplicada e a inovação entre saúde, engenharias,
                  direito, comunicação, design, educação e tecnologia.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <div className="absolute -right-10 sm:right-10 lg:right-20 top-[51.2%] -translate-y-1/2 w-[380px] sm:w-[520px] lg:w-[800px] hidden md:block opacity-[0.16]">
        <Image
          src="/oxygeni-logo-white.webp"
          alt="Oxygeni Lab tracejado"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>
    </section>
  );
}
