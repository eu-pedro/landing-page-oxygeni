"use client";

import { LinkTreeGrid } from "./_components/link-three";
import { CosmicHero } from "./_components/cosmic-hero";
import { motion } from "framer-motion";
import { ExpandableCardGrid } from "@/components/expandable-card-grid";
import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-white">
      <CosmicHero />

      <section className="w-full bg-white">
        <LinkTreeGrid />
      </section>

      <section className=" px-10 ">
        <div className="h-[0.8px] bg-zinc-400/60 w-full mb-15" />

        <div className="grid lg:grid-cols-2 gap-7 grid-cols-1">
          <div className="">
            <h2 className="text-[#1A151E] text-5xl font-bold">Oxygeni HUB</h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-zinc-700 md:text-base mt-6 text-left font-normal"
            >
              O Oxygeni HUB reúne ambientes projetados para estimular a
              colaboração, a troca de conhecimento e o desenvolvimento contínuo.
              Cada espaço foi pensado para oferecer conforto, tecnologia e
              dinamismo, permitindo que estudantes, pesquisadores e
              profissionais se conectem e construam soluções inovadoras. O
              ambiente incentiva a criatividade e o trabalho em equipe, criando
              uma atmosfera viva e inspiradora para novas ideias.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-zinc-700 md:text-base mt-6 text-left font-normal"
            >
              Além das áreas de convivência, o hub conta com laboratórios
              dedicados à prototipagem, pesquisa e testes de projetos
              tecnológicos. Esses espaços são equipados com ferramentas e
              recursos que permitem que ideias saiam do papel e avancem para
              fases mais concretas de desenvolvimento. Aqui, estudantes e
              equipes multidisciplinares encontram liberdade para experimentar,
              aprender e validar soluções de forma prática.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-zinc-700 md:text-base mt-6 text-left font-normal"
            >
              O Oxygeni HUB funciona também como um ponto de encontro entre
              talentos, professores, empresas e a comunidade acadêmica. É um
              espaço que promove conexões estratégicas, eventos, workshops e
              oportunidades de crescimento. Esse ecossistema fortalece o
              empreendedorismo, impulsiona carreiras e aproxima iniciativas que
              desejam transformar inovação em impacto real dentro e fora da
              Universidade CEUMA.
            </motion.p>
          </div>

          <figure>
            <Image
              src="/oxygeni-hub.jpeg"
              width={1080}
              height={700}
              alt=""
              className="rounded-4xl"
            />
          </figure>
        </div>


        <div className="mt-10">
          <h2 className="text-[#1A151E] text-5xl font-bold">Espaços</h2>
          <ExpandableCardGrid />
        </div>
      </section>
    </main>
  );
}
