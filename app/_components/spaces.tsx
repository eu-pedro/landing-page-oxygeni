import {
  Code2,
  Coffee,
  Cpu,
  Layers,
  Lightbulb,
  Presentation,
  Users,
} from "lucide-react";
import { SpaceCard } from "./space-card";

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

export function Spaces() {
  return (
    <section className="w-full py-10 sm:py-12 px-8 lg:px-6 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-[#1A151E] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Espaços
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mt-6 sm:mt-8">
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
  );
}