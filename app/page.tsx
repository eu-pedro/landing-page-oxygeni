/* eslint-disable @next/next/no-img-element */
"use client";

import { LinkTreeGrid } from "./_components/link-three";
import { CosmicHero } from "./_components/cosmic-hero";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2, Coffee,
  Cpu,
  Layers,
  Lightbulb,
  Presentation,
  Users
} from "lucide-react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { ActivitiesGrid } from "./_components/activities-grid";
import { SpaceCard } from "./_components/space-card";
import { AppleLabSpace } from "./_components/apple-lab-space";

const spaces = [
  {
    icon: Cpu,
    title: "Apple LAB",
    description:
      "Ambiente tecnológico voltado para práticas, prototipação e experiências Apple.",
  },
  {
    icon: Lightbulb,
    title: "CASULO",
    description:
      "Espaço reservado e inspirador para mentorias, ideias e reflexões profundas.",
  },
  {
    icon: Layers,
    title: "SALA ALFA-BETA",
    description:
      "Ambientes flexíveis que se integram para aulas, oficinas e eventos maiores.",
  },
  {
    icon: Presentation,
    title: "SALA PITCH",
    description:
      "Espaço dedicado para apresentações, desafios, prototipagem e ideação.",
  },
  {
    icon: Users,
    title: "ESPAÇO COLAB",
    description:
      "O coração colaborativo do HUB, onde equipes, núcleos e startups trabalham juntas.",
  },
  {
    icon: Coffee,
    title: "ESPAÇO RESET",
    description:
      "Ambiente de pausa consciente, conforto e criatividade fluida para o bem-estar.",
  },
  {
    icon: Code2,
    title: "INCODE TECH SCHOOL",
    description:
      "Escola prática de tecnologia baseada em desafios, projetos reais e metodologias ágeis.",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <CosmicHero />

      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {new Array(10).fill(null).map((_, index) => (
              <MarqueeItem className="h-32 w-32" key={index}>
                <img
                  alt={`Placeholder ${index}`}
                  className="overflow-hidden rounded-full"
                  src={`https://placehold.co/128x128?random=${index}`}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto">
        <section className="w-full bg-white px-10 mt-10">
          <h2 className="text-[#1A151E] text-3xl font-bold">Alguma coisa</h2>
          <LinkTreeGrid />
        </section>

        <section className="w-full bg-white px-10 mt-10">
          <h2 className="text-[#1A151E] text-3xl font-bold">Alguma coisa</h2>
          <ActivitiesGrid />
        </section>
      </div>

      <section className="bg-[#681CE3] py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-5xl font-bold leading-tight">
            Oxygeni HUB
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-white md:text-lg mt-6 font-normal leading-relaxed"
              >
                O Oxygeni HUB reúne ambientes projetados para estimular a
                colaboração, a troca de conhecimento e o desenvolvimento
                contínuo. Cada espaço foi pensado para oferecer conforto,
                tecnologia e dinamismo, permitindo que estudantes, pesquisadores
                e profissionais se conectem e construam soluções inovadoras.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                className="text-white md:text-lg mt-5 font-normal leading-relaxed"
              >
                Além das áreas de convivência, o hub conta com laboratórios
                dedicados à prototipagem, pesquisa e testes de projetos
                tecnológicos. Esses espaços possuem recursos que permitem que
                ideias avancem para etapas mais concretas de desenvolvimento,
                incentivando a experimentação e o aprendizado prático.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
                className="text-white md:text-lg mt-5 font-normal leading-relaxed"
              >
                O Oxygeni HUB também funciona como um ponto de encontro entre
                talentos, professores, empresas e a comunidade acadêmica —
                promovendo conexões estratégicas, eventos, workshops e
                oportunidades de crescimento. O ecossistema impulsiona o
                empreendedorismo e aproxima iniciativas que transformam inovação
                em impacto real dentro e fora da Universidade CEUMA.
              </motion.p>
            </div>

            <figure className="grid grid-cols-2 gap-4">
              <Image
                src="/oxygeni-hub.jpeg"
                width={1080}
                height={700}
                alt="Oxygeni HUB"
                className="rounded-3xl col-span-2 object-cover shadow-sm"
              />

              <Image
                src="/oxygeni-hub.jpeg"
                width={1080}
                height={700}
                alt="Oxygeni HUB espaço 1"
                className="rounded-3xl object-cover shadow-sm"
              />

              <Image
                src="/oxygeni-hub.jpeg"
                width={1080}
                height={700}
                alt="Oxygeni HUB espaço 2"
                className="rounded-3xl object-cover shadow-sm"
              />
            </figure>
          </div>
        </div>
      </section>


      <div className="max-w-7xl mx-auto mt-10 mb-10">
        <h2 className="text-[#1A151E] text-5xl font-bold">Espaços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {spaces.map((space) => (
            <SpaceCard
              key={space.title}
              icon={space.icon}
              title={space.title}
              description={space.description}
            />
          ))}
        </div>
      </div>

      <AppleLabSpace />
    </main>
  );
}

