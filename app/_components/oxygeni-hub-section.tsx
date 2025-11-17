import { motion } from "framer-motion";
import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

export function OxygeniHubSection() {
  return (
    <section className="bg-[#681CE3] py-10 sm:py-14 px-8 lg:px-6 lg:py-20">
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="oxygeni-hub"
            className="
            text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight 
            scroll-mt-24 transition-all duration-500 
            mb-6 sm:mb-8 
            md:text-left
            target:drop-shadow-[0_0_25px_rgba(199,139,255,0.7)]
          "
          >
            Oxygeni HUB
          </h2>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-white text-sm sm:text-base md:text-lg mt-4 md:mt-6 font-normal leading-relaxed"
              >
                O Oxygeni HUB reúne ambientes projetados para estimular a
                colaboração, a troca de conhecimento e o desenvolvimento
                contínuo. Cada espaço foi pensado para oferecer conforto,
                tecnologia e dinamismo, permitindo que estudantes, pesquisadores
                e profissionais se conectem e construam soluções inovadoras.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                className="text-white text-sm sm:text-base md:text-lg mt-4 md:mt-5 font-normal leading-relaxed"
              >
                Além das áreas de convivência, o hub conta com laboratórios
                dedicados à prototipagem, pesquisa e testes de projetos
                tecnológicos. Esses espaços possuem recursos que permitem que
                ideias avancem para etapas mais concretas de desenvolvimento,
                incentivando a experimentação e o aprendizado prático.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                className="text-white text-sm sm:text-base md:text-lg mt-4 md:text font-normal leading-relaxed"
              >
                O Oxygeni HUB também funciona como um ponto de encontro entre
                talentos, professores, empresas e a comunidade acadêmica —
                promovendo conexões estratégicas, eventos, workshops e
                oportunidades de crescimento. O ecossistema impulsiona o
                empreendedorismo e aproxima iniciativas que transformam inovação
                em impacto real dentro e fora da Universidade CEUMA.
              </motion.p>
            </div>

            <figure className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 sm:mt-0">
              <div className="sm:col-span-2 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/oxygeni-hub.jpeg"
                  width={1080}
                  height={700}
                  alt="Oxygeni HUB"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/oxygeni-hub.jpeg"
                  width={1080}
                  height={700}
                  alt="Oxygeni HUB espaço 1"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/oxygeni-hub.jpeg"
                  width={1080}
                  height={700}
                  alt="Oxygeni HUB espaço 2"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>
            </figure>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
