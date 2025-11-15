import { ArrowUpRight, Globe2 } from "lucide-react";

const links = [
  {
    title: "Oyxgeni HUB",
    description: "Conheça nosso HUB de inovação",
    href: "#oxygeni-hub",
    icon: Globe2,
  },
  // {
  //   title: "Oxygeni DIT",
  //   description: "Conheça nosso setor de inovação",
  //   href: "https://instagram.com/oxygenihub",
  //   icon: Globe2,
  // },
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
    <section className="w-full mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link) => {
          const isAnchor = link.href.startsWith("#");

          return (
            <a
              key={link.title}
              href={link.href}
              {...(!isAnchor && {
                target: "_blank",
                rel: "noreferrer",
              })}
              className="
                group relative flex flex-col justify-between 
                rounded-2xl border border-gray-200/60 bg-white/70 
                px-6 py-6 h-40 shadow-sm 
                hover:shadow-xl hover:border-[#681CE3]/40 hover:bg-white/90 
                transition-all duration-300 backdrop-blur-sm
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-14 w-14 items-center justify-center 
                    rounded-2xl bg-[#681CE3]/10 border border-[#681CE3]/30 
                    group-hover:bg-[#681CE3]/20 transition-all
                  "
                >
                  <link.icon className="h-7 w-7 text-[#681CE3]" />
                </div>

                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-gray-900">
                    {link.title}
                  </span>
                  <span className="text-sm text-gray-600">
                    {link.description}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end mt-4">
                <span
                  className="
                    flex items-center gap-1 text-sm font-medium text-[#681CE3] 
                    group-hover:text-[#4f11b8] transition-all
                  "
                >
                  Acessar
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div
                className="
                  absolute inset-0 rounded-2xl opacity-0 
                  group-hover:opacity-100 
                  pointer-events-none transition-all
                  bg-gradient-to-br from-[#681CE3]/5 to-transparent
                "
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
