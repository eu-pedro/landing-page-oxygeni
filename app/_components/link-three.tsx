import { ArrowUpRight, Globe2, Instagram, Linkedin, Mail } from "lucide-react";

const links = [
  {
    title: "Oyxgeni HUB",
    description: "Conheça nosso HUB de inovação",
    href: "https://oxygeni.com.br",
    icon: Globe2,
  },
  {
    title: "Oxygeni DIT",
    description: "Conheça nosso setor de inovação",
    href: "https://instagram.com/oxygenihub",
    icon: Globe2,
  },
  {
    title: "Incode Tech School",
    description: "Conheça a Incode Tech School",
    href: "https://linkedin.com",
    icon: Globe2,
  },
  {
    title: "AcademIA",
    description: "Conheça a AcademIA",
    href: "mailto:contato@oxygeni.com.br",
    icon: Globe2,
  },
];

export function LinkTreeGrid() {
  return (
    <section className="w-full px-10 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 hover:shadow-lg hover:shadow-gray-200/60 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#681CE3]/10 border border-[#681CE3]/30">
                <link.icon className="h-6 w-6 text-[#681CE3]" />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">
                  {link.title}
                </span>
                <span className="text-xs text-gray-500">
                  {link.description}
                </span>
              </div>
            </div>

            <button className="flex items-center gap-1 text-xs font-medium text-[#681CE3] group-hover:text-[#4f11b8]">
              Acessar
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </a>
        ))}
      </div>
    </section>
  );
}

