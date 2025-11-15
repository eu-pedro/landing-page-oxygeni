"use client";

import { LinkTreeGrid } from "./_components/link-three";
import { CosmicHero } from "./_components/cosmic-hero";
import { AnimatePresence, motion } from "framer-motion";
import { ExpandableCardDemo } from "@/components/expandable-card-grid";
import Image from "next/image";
import {
  Code2,
  CodeXml,
  Coffee,
  Cpu,
  Layers,
  Lightbulb,
  Presentation,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

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
                colaboração, a troca de conhecimento e o desenvolvimento
                contínuo. Cada espaço foi pensado para oferecer conforto,
                tecnologia e dinamismo, permitindo que estudantes, pesquisadores
                e profissionais se conectem e construam soluções inovadoras. O
                ambiente incentiva a criatividade e o trabalho em equipe,
                criando uma atmosfera viva e inspiradora para novas ideias.
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
                equipes multidisciplinares encontram liberdade para
                experimentar, aprender e validar soluções de forma prática.
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
                empreendedorismo, impulsiona carreiras e aproxima iniciativas
                que desejam transformar inovação em impacto real dentro e fora
                da Universidade CEUMA.
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

          <div className="mt-10 mb-10">
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
        </section>
      </div>
    </main>
  );
}

import { LucideIcon } from "lucide-react";

interface SpaceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SpaceCard({ icon: Icon, title, description }: SpaceCardProps) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow dark:bg-neutral-900 dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}

export function FollowingPointerDemo() {
  return (
    <div className="mx-auto w-80">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
          <div className="p-4">
            <h2 className="my-4 text-lg font-bold text-zinc-700">
              {blogContent.title}
            </h2>
            <h2 className="my-4 text-sm font-normal text-zinc-500">
              {blogContent.description}
            </h2>

            <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-500">{blogContent.date}</span>

              <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/cursor.png",
  authorAvatar: "/cursor.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);

const ITEMS = [
  {
    id: "dev",
    title: "Desenvolvimento",
    color: "#6D28D9",
    description:
      "Construção de soluções digitais, desde interfaces até sistemas completos, com foco em performance, experiência e escalabilidade.",
  },
  {
    id: "tech",
    title: "Tecnologia",
    color: "#A855F7",
    description:
      "Exploração de ferramentas modernas, arquitetura sólida e aplicações que conectam pessoas e negócios.",
  },
  {
    id: "innovation",
    title: "Inovação",
    color: "#0F0A11",
    description:
      "Experimentação, pesquisa e criação de projetos disruptivos que aproximam universidade, mercado e oportunidades.",
  },
];

export function OxygeniCircularSwitcher() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % ITEMS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-12 items-center">
      {/* LADO ESQUERDO - TEXTO */}
      <div className="w-full md:w-1/2 space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={ITEMS[active].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <h3 className="text-4xl font-bold text-zinc-900">
              {ITEMS[active].title}
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed">
              {ITEMS[active].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-4">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-3 w-3 rounded-full transition ${
                i === active ? "bg-[#681CE3]" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <div
          className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.15)] bg-zinc-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.button
            onClick={() => setActive(0)}
            className="flex items-center justify-center w-full h-1/2"
            animate={{
              scale: active === 0 ? 1.05 : 1,
              boxShadow:
                active === 0
                  ? "0 0 30px rgba(104,28,227,0.6)"
                  : "0 0 0 rgba(0,0,0,0)",
            }}
            whileHover={{
              scale: active === 0 ? 1.08 : 1.03,
              filter: "brightness(1.08)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div
              className={`absolute inset-0 transition-colors ${
                active === 0 ? "bg-[#6D28D9]" : "bg-[#9F6BFF]"
              }`}
            />
            <span className="relative text-white font-bold text-lg md:text-xl text-center px-4">
              {ITEMS[0].title}
            </span>
          </motion.button>

          <div className="flex w-full h-1/2">
            {/* ITEM 1 */}
            <motion.button
              onClick={() => setActive(1)}
              className="relative flex-1 flex items-center justify-center"
              animate={{
                scale: active === 1 ? 1.05 : 1,
                boxShadow:
                  active === 1
                    ? "0 0 30px rgba(104,28,227,0.6)"
                    : "0 0 0 rgba(0,0,0,0)",
              }}
              whileHover={{
                scale: active === 1 ? 1.08 : 1.03,
                filter: "brightness(1.08)",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div
                className={`absolute inset-0 transition-colors ${
                  active === 1 ? "bg-[#A855F7]" : "bg-[#C4A5FF]"
                }`}
              />
              <span className="relative text-white font-bold text-lg md:text-xl text-center px-3">
                {ITEMS[1].title}
              </span>
            </motion.button>

            {/* ITEM 2 */}
            <motion.button
              onClick={() => setActive(2)}
              className="relative flex-1 flex items-center justify-center"
              animate={{
                scale: active === 2 ? 1.05 : 1,
                boxShadow:
                  active === 2
                    ? "0 0 30px rgba(104,28,227,0.6)"
                    : "0 0 0 rgba(0,0,0,0)",
              }}
              whileHover={{
                scale: active === 2 ? 1.08 : 1.03,
                filter: "brightness(1.08)",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div
                className={`absolute inset-0 transition-colors ${
                  active === 2 ? "bg-[#151018]" : "bg-[#2E2635]"
                }`}
              />
              <span className="relative text-white font-bold text-lg md:text-xl text-center px-3">
                {ITEMS[2].title}
              </span>
            </motion.button>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-full ring-4 ring-[#681CE3]/40" />
        </div>
      </div>
    </section>
  );
}

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays } from "lucide-react";
import {
  FollowerPointerCard,
  FollowPointer,
} from "@/components/ui/following-pointer";

type Activity = {
  id: number;
  title: string;
  date: string;
  location: string;
  shortDescription: string;
};

const activities: Activity[] = [
  {
    id: 2,
    title: "Novo Espaço da Oxygeni HUB",
    date: "01 Dez 2025 • 10h",
    location: "Renascença • São Luís - MA",
    shortDescription:
      "Venha conhecer o novo espaço da Oxygeni HUB e participar da inauguração oficial.",
  },
  {
    id: 1,
    title: "Mentoria de Engenharia de Prompt",
    date: "25 Nov 2025 • 19h",
    location: "Online • Google Meet",
    shortDescription:
      "Sessão prática para dominar engenharia de prompts e construir raciocínios com IA.",
  },
];

export function ActivitiesGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
      {activities.map((activity) => (
        <Card
          key={activity.id}
          className="
            group relative overflow-hidden border border-[#E7E2F9]
            bg-gradient-to-br from-[#ffffff] via-[#fbf9ff] to-[#f0ebff]
            shadow-sm transition-all duration-200
            hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(81,39,255,0.18)]
            cursor-pointer
          "
        >
          {/* Glow */}
          <span
            className="
              pointer-events-none absolute inset-x-0 -top-10 h-24
              bg-gradient-to-b from-[#5127FF33] to-transparent
              opacity-0 blur-2xl transition-opacity duration-200
              group-hover:opacity-100
            "
          />

          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <Badge
                variant="outline"
                className="
                  flex items-center gap-1 border-[#C2B3FF] bg-[#f4f0ff]
                  text-xs font-medium text-[#5127FF]
                "
              >
                <CalendarDays className="h-3 w-3" />
                <span>{activity.date}</span>
              </Badge>

              <span className="rounded-full bg-[#5127FF0F] px-3 py-1 text-xs font-medium text-[#5127FF]">
                Evento
              </span>
            </div>

            <CardTitle className="text-lg font-semibold text-[#1A151E] leading-snug">
              {activity.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p className="text-sm text-[#4B4452]">
              {activity.shortDescription}
            </p>

            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#5F4B8B]">
              <MapPin className="h-4 w-4" />
              <span>{activity.location}</span>
            </div>
          </CardContent>

          <CardFooter className="mt-2 flex justify-between items-center">
            <Button
              size="sm"
              className="
                rounded-full bg-[#5127FF] text-xs font-semibold text-white
                px-4 py-1.5 shadow-sm
                hover:bg-[#4120cc] hover:shadow-md
                transition-all duration-150
              "
            >
              Ver detalhes
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
