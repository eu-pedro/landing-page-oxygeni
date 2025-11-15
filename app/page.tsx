/* eslint-disable @next/next/no-img-element */
"use client";

import { LinkTreeGrid } from "./_components/link-three";
import { CosmicHero } from "./_components/cosmic-hero";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Coffee,
  Cpu,
  Layers,
  Lightbulb,
  Presentation,
  Users,
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
import { OxygeniHubSection } from "./_components/oxygeni-hub-section";

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

      <OxygeniHubSection />

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
