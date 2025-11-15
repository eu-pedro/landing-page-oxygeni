"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./animate-on-scroll";

export function AppleLabSpace() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#2A0140] to-[#4A0B78] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <AnimateOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            className="flex flex-wrap gap-3 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {["Robótica", "Inteligência Artificial", "Digitais Imersivas"].map(
              (badge) => (
                <motion.span
                  key={badge}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                >
                  {badge}
                </motion.span>
              )
            )}
          </motion.div>

          <motion.h2
            id="spaces"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-10"
          >
            APPLE LAB
          </motion.h2>

          {/* GRID PRINCIPAL */}
          <div className="grid gap-10 lg:gap-12 text-white/90 leading-relaxed lg:grid-cols-1">
            {/* LISTA DE LABS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-6 sm:space-y-8"
            >
              {[
                {
                  title: "LARA – Laboratório Avançado de Robótica e Automação",
                  text: "Aplicações: robótica educacional, automação industrial...",
                },
                {
                  title: "LIA – Laboratório de Inteligência Artificial",
                  text: "Aplicações: análise de dados, machine learning, visão computacional...",
                },
                {
                  title:
                    "LUIGI – Laboratório Universitário de Inovação em Games e Imersão",
                  text: "Aplicações: desenvolvimento de jogos, VR/AR, storytelling digital...",
                },
              ].map((lab, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-1">
                    {lab.title}
                  </h3>
                  <p className="text-sm sm:text-base">{lab.text}</p>

                  {index < 2 && (
                    <div className="h-px w-full bg-white/10 my-4" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* ATIVIDADES + BENEFÍCIO */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 bg-[#7b2cff] text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(123,44,255,0.6)] mb-5">
                  <span>Atividades previstas</span>
                </div>

                <ul className="space-y-4 text-sm sm:text-base">
                  {[
                    "Minicursos e oficinas temáticas: Robótica Educacional, Introdução à IA...",
                    "Projetos de iniciação científica e TCCs aplicados em tecnologia.",
                    "Grupos de pesquisa e extensão tecnológica.",
                    "Hackathons e challenges corporativos.",
                    "Experimentos de simulação: modelos virtuais, automações...",
                    "Interações com startups e empresas parceiras.",
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
                  podem colaborar...
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* LOGO DE FUNDO — leve floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.16, y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 sm:right-10 lg:right-20 top-[51.2%] -translate-y-1/2 w-[380px] sm:w-[520px] lg:w-[800px] hidden md:block"
        >
          <Image
            src="/oxygeni-logo-white.webp"
            alt="Oxygeni Lab tracejado"
            width={800}
            height={800}
            className="object-contain"
          />
        </motion.div>
      </AnimateOnScroll>
    </section>
  );
}
