/* eslint-disable @next/next/no-img-element */
"use client";

import { LinkTreeGrid } from "./_components/link-three";
import { CosmicHero } from "./_components/cosmic-hero";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { ActivitiesGrid } from "./_components/activities-grid";
import { SpaceCard } from "./_components/space-card";
import { CasuloSpace } from "./_components/casulo-space";
import { FeatureCasulo } from "./_components/feature-casulo";
import { EcosystemsCasulo } from "./_components/ecosystems-casulo";
import { AlfaBetaSpace } from "./_components/alfaBeta";
import { SalaPitchSpace } from "./_components/sala-pitch";
import { AlfaBetaInstructions } from "./_components/AlfaBetaInstructions";
import { SalaPitchInstructions } from "./_components/salaPitchInstrution";
import { SalaPitchIntro } from "./_components/salaPitchIntro";

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
import { AppleLabSpace } from "./_components/apple-lab-space";
import { OxygeniHubSection } from "./_components/oxygeni-hub-section";
import ResetSpace from "./_components/reset-space";
import { Spaces } from "./_components/spaces";

import { Footer } from "./_components/footer";


import ColabSpace from "./_components/colab-space";


import IncodeSpace from "./_components/incode-space";


export default function Home() {
  const partnerLogos = [
    { src: "/LogoCarrosel/logoOxygeniHubBranco.svg", alt: "" },
    { src: "/logos-parceiros/logos/aws.svg", alt: "" },
    { src: "/logos-parceiros/logos/cisco.svg", alt: "" },
    { src: "/logos-parceiros/logos/dayahat.svg", alt: "" },
    { src: "/logos-parceiros/logos/edificare.svg", alt: "" },
    { src: "/LogoCarrosel/logoOxygeniHubBranco.svg", alt: "" },
    { src: "/LogoCarrosel/EVEREST.svg", alt: "" },
    { src: "/LogoCarrosel/FAR.svg", alt: "" },
    { src: "/logos-parceiros/logos/fonotec.svg", alt: "" },
    { src: "/logos-parceiros/logos/globaltec.svg", alt: "" },
    { src: "/LogoCarrosel/logoOxygeniHubBranco.svg", alt: "" },
    { src: "/logos-parceiros/logos/hermione.svg", alt: "" },
    { src: "/logos-parceiros/logos/ilha-games.svg", alt: "" },
    { src: "/logos-parceiros/logos/incode.svg", alt: "" },
    { src: "/logos-parceiros/logos/kadoo.svg", alt: "" },
    { src: "/LogoCarrosel/logoOxygeniHubBranco.svg", alt: "" },
    { src: "/logos-parceiros/logos/lara.svg", alt: "" },
    { src: "/logos-parceiros/logos/lia.svg", alt: "" },
    { src: "/logos-parceiros/logos/ioa.svg", alt: "" },
    { src: "/LogoCarrosel/logoOxygeniHubBranco.svg", alt: "" },
    { src: "/logos-parceiros/logos/tv-mirante.svg", alt: "" },
    { src: "/LogoCarrosel/LogoCeumaBranca.svg", alt: "" },
    { src: "/logos-parceiros/logos/luigi.svg", alt: "" },
    { src: "/logos-parceiros/logos/itc.svg", alt: "" },
    { src: "/LogoCarrosel/logoOxygeniHubBranco.svg", alt: "" },
    { src: "/logos-parceiros/logos/microsoft.svg", alt: "" },
    { src: "/logos-parceiros/logos/needuk.svg", alt: "" },
    { src: "/logos-parceiros/logos/nite.svg", alt: "" },
    { src: "/logos-parceiros/logos/nuted.svg", alt: "" },
    { src: "/LogoCarrosel/logoOxygeniHubBranco.svg", alt: "" },
    { src: "/logos-parceiros/logos/pd-case.svg", alt: "" },
    { src: "/logos-parceiros/logos/psiworks.svg", alt: "" },
    { src: "/logos-parceiros/logos/projeta.svg", alt: "" },
    { src: "/logos-parceiros/logos/rural-track.svg", alt: "" },
    { src: "/LogoCarrosel/logoOxygeniHubBranco.svg", alt: "" },
    { src: "/logos-parceiros/logos/sao-paulo.svg", alt: "" },
    { src: "/logos-parceiros/logos/seeds.svg", alt: "" },
    { src: "/logos-parceiros/logos/terra-zoo.svg", alt: "" },
  ];
  return (
    <main className="bg-white">
      <CosmicHero />

      <div className="flex size-full items-center justify-center bg-background">
        <Marquee className="bg-[#681CE3]">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {partnerLogos.map((logo, index) => (
              <MarqueeItem className="h-28 w-28 py-5" key={index}>
                <Image
                  width={150}
                  height={150}
                  alt={logo.alt}
                  className="overflow-hidden object-fill"
                  src={logo.src}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto">
        <section className="w-full bg-white px-8 lg:px-6 mt-10">
          <h2 className="text-[#1A151E] text-3xl font-bold">Programas</h2>
          <LinkTreeGrid />
        </section>

        <section className="w-full bg-white px-8 lg:px-6 mt-10">
          <h2 className="text-[#1A151E] text-3xl font-bold">Atividades</h2>
          <ActivitiesGrid />
        </section>
      </div>

      <OxygeniHubSection />

      <Spaces />

      <AppleLabSpace />


      
      <CasuloSpace />
      <FeatureCasulo />
      <EcosystemsCasulo />
      <AlfaBetaSpace />
      <AlfaBetaInstructions />
      <SalaPitchSpace />
      <SalaPitchInstructions />
      <SalaPitchIntro />
      <ColabSpace />
      <ResetSpace />
      <IncodeSpace />
      <Footer />
    </main>
  );
}
