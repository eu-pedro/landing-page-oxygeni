"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ScrollArea } from "./ui/scroll-area";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-100">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-1 md:grid-cols-4 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="pt-6 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-left md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Um laboratório da Apple é um ambiente, moderno e tecnológico.",
    title: "Apple LAB",
    src: "https://placehold.co/1920x1080/71006E/FFFFFF?text=background",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description:
      "A sala CASULO foi pensada como um ambiente reservado, inpirador.",
    title: "CASULO",
    src: "https://placehold.co/1920x1080/71006E/FFFFFF?text=background",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <ScrollArea className="h-72 w-full rounded-md">
          <div>
            <p>
              A sala CASULO é um ambiente reservado, intimista e confortável,
              ideal para reuniões estratégicas, mentorias e trocas de ideias.
              Ela também apoia diferentes atividades colaborativas e formativas,
              como:
            </p>

            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                Reuniões de cocriação com empresas e startups para
                desenvolvimento de projetos e soluções reais.
              </li>
              <li>
                Mentorias especializadas com profissionais de mercado
                (tecnologia, negócios, saúde, direito etc.).
              </li>
              <li>
                Rodadas de pitch com apresentações de ideias e negócios de
                alunos, empresas juniores e startups incubadas.
              </li>
              <li>
                Articulações institucionais com governos, investidores e
                parceiros estratégicos do Oxygêni HUB.
              </li>
              <li>
                Oficinas de soft skills com foco em negociação, liderança,
                comunicação assertiva e inteligência emocional.
              </li>
              <li>Grupos de estudo e pesquisa aplicada voltados ao mercado.</li>
              <li>
                Reuniões de planejamento de squads interdisciplinares e projetos
                de extensão tecnológica.
              </li>
            </ul>
          </div>
        </ScrollArea>
      );
    },
  },

  {
    description: "As salas ALFA & BETA formam um espaço flexível e adaptável.",
    title: "SALA ALFA-BETA",
    src: "https://placehold.co/1920x1080/71006E/FFFFFF?text=background",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <ScrollArea className="h-72 w-full rounded-md">
          <div>
            <p>
              As salas ALFA & BETA funcionam como ambientes independentes para
              aulas, oficinas e encontros teóricos, ou como uma única sala
              integrada para eventos maiores, formações, apresentações e
              hackathons. A divisória de vidro permite essa transformação com
              facilidade, tornando o espaço um recurso estratégico para
              atividades multidisciplinares.
            </p>

            <ul className="mt-4 space-y-2 pl-5">
              <li>
                ✔ Salas de aula tecnológicas com recursos multimídia, ideais
                para metodologias ativas.
              </li>
              <li>
                ✔ Ambientes para formação continuada e programas de extensão
                universitária.
              </li>
              <li>
                ✔ Workshops, treinamentos, maratonas de inovação e bootcamps.
              </li>
              <li>
                ✔ Apresentações de TCCs aplicados e pitches de startups
                universitárias.
              </li>
              <li>
                ✔ Eventos internos com empresas parceiras (talks, rodas de
                conversa e mini palestras).
              </li>
              <li>
                ✔ Espaço com potencial para receber bootcamps, maratonas,
                formações da INCODE e oficinas com empresas.
              </li>
              <li>
                ✔ Cursos de todas as áreas podem realizar aulas teóricas com
                foco em metodologias ativas.
              </li>
            </ul>
          </div>
        </ScrollArea>
      );
    },
  },
  {
    description: "Ambiente disruptivo dinâmico e inspirador.",
    title: "SALA PITCH",
    src: "https://placehold.co/1920x1080/71006E/FFFFFF?text=background",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <ScrollArea className="h-72 w-full rounded-md">
            <p>
              Equipada com poltronas móveis, painéis de vidro, recursos
              multimídia e elementos de design flexível, ela promove uma
              experiência diferenciada de aprendizado, ideal para atividades
              práticas, imersões e sessões colaborativas. Além disso, conta com
              uma divisória de vidro que a conecta diretamente ao Espaço COLAB,
              permitindo a expansão para eventos maiores e criando um
              ecossistema fluido entre ideação (Sala Pitch) e execução (Espaço
              Colab).
              <strong> A Sala PITCH </strong> é um espaço onde ideias ganham
              forma, se transformam em soluções e são apresentadas com
              propósito. Ela simboliza o espírito do Oxygeni HUB: um lugar onde
              pensar diferente é o ponto de partida para inovar juntos.
            </p>

            <ul className="mt-6 space-y-3">
              <li>
                ✔ Sessões de Design Thinking, Design Sprint, brainstorming e
                prototipagem rápida.
              </li>
              <li>
                ✔ Apresentações de pitch de projetos, startups e TCCs com banca
                avaliadora ou parceiros externos.
              </li>
              <li>
                ✔ Oficinas de criatividade aplicada, resolução de problemas e
                mapeamento de oportunidades.
              </li>
              <li>
                ✔ Simulações de Shark Tank, bancas de desafios e painéis de
                feedback.
              </li>
              <li>
                ✔ Preparação de alunos para desafios como hackathons, Olimpíadas
                de Inovação e maratonas INCODE.
              </li>
              <li>
                ✔ Eventos como o OxygeniUp, Talks, cursos de curta duração e
                rodas de ideias.
              </li>
            </ul>
          </ScrollArea>
        </>
      );
    },
  },
  {
    description: "O coração pulsante da colaboração no Oxygeni HUB.",
    title: "ESPAÇO COLAB",
    src: "https://placehold.co/1920x1080/71006E/FFFFFF?text=background",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <ScrollArea className="h-72 w-full rounded-md">
          <div className="space-y-6">
            <p>
              Neste espaço, convivem os núcleos estratégicos da CEUMA, empresas
              juniores, startups em estágio inicial, professores orientadores,
              estudantes criadores e parceiros externos. Mais do que um local
              para sentar e produzir, o COLAB é um ecossistema de ação e
              inovação.
            </p>

            <div>
              <strong>Quem ocupa o COLAB?</strong>

              <p className="mt-3">
                <strong>Núcleos institucionais:</strong> O NUTED (Tecnologias
                Educacionais), o NUSTI (Soluções Tecnológicas Inovadoras), o
                NITE (Inovação e Transferência de Tecnologia) e o Núcleo de
                Patentes e Propriedade Intelectual.
              </p>

              <p className="mt-3">
                <strong>Empresas Juniores da CEUMA:</strong> Espaço para
                atuação, reuniões, atendimento de projetos e captação de
                clientes.
              </p>

              <p className="mt-3">
                <strong>Desenvolvedores e squads interdisciplinares:</strong>{" "}
                Projetos com foco em soluções digitais, produtos e desafios do
                mercado.
              </p>
            </div>

            <div>
              <strong>Atividades previstas</strong>

              <ul className="mt-4 space-y-3">
                <li>
                  ✔ Desenvolvimento de projetos multidisciplinares com
                  orientação de professores ou mentores externos.
                </li>
                <li>✔ Reuniões de planejamento e sprint reviews de squads.</li>
                <li>
                  ✔ Ações de consultoria júnior, projetos de extensão, análise
                  de dados e desenvolvimento de MVPs.
                </li>
                <li>
                  ✔ Acompanhamento de TCCs aplicados e pesquisas com foco em
                  inovação.
                </li>
                <li>
                  ✔ Recepção de desafios corporativos, programas de estágio e
                  pré-incubação de startups.
                </li>
                <li>
                  ✔ Redação de projetos de inovação, captação de editais e
                  patentes acadêmicas.
                </li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      );
    },
  },
  {
    description: "Ambiente de respiro dentro do ecossistema de inovação.",
    title: "ESPAÇO RESET",
    src: "https://placehold.co/1920x1080/71006E/FFFFFF?text=background",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <ScrollArea className="h-72 w-full rounded-md">
          <div className="space-y-6">
            {/* Texto principal */}
            <p>
              O Espaço RESET foi idealizado como um ambiente de respiro dentro
              do ecossistema de inovação. Em meio à intensidade de ideias,
              desenvolvimento e produção, ele cumpre um papel essencial:
              proporcionar momentos de pausa consciente, equilíbrio emocional e
              reconexão com o coletivo.
            </p>

            <p>
              Mais do que uma sala de descanso, o RESET é um espaço
              multifuncional, que pode ser usado para reuniões informais, rodas
              de conversa, eventos leves, experiências culturais e dinâmicas de
              integração.
            </p>

            <p>
              O Espaço RESET reforça a visão do Oxygeni HUB como um ecossistema
              humano, criativo e sustentável, que valoriza tanto a produtividade
              quanto o bem-estar. Aqui, descansar também é inovar — porque boas
              ideias precisam de pausas para florescer.
            </p>

            {/* Propósito do RESET */}
            <div>
              <strong>Propósito do RESET</strong>
              <ul className="mt-3 space-y-3">
                <li>
                  ✔ Cuidar do bem-estar emocional e social da comunidade
                  acadêmica.
                </li>
                <li>
                  ✔ Estimular a criatividade fluida e descontraída, onde grandes
                  ideias costumam surgir.
                </li>
                <li>
                  ✔ Ser um ambiente seguro para trocas sinceras, mentorias
                  espontâneas e encontros entre alunos, professores e parceiros.
                </li>
              </ul>
            </div>

            {/* Atividades previstas */}
            <div>
              <strong>Atividades previstas</strong>
              <ul className="mt-3 space-y-3">
                <li>
                  ✔ Rodas de conversa entre alunos, professores e mentores.
                </li>
                <li>
                  ✔ Clubes temáticos: leitura, cinema, inovação,
                  empreendedorismo, diversidade.
                </li>
                <li>
                  ✔ Mini palestras inspiradoras, TED universitário e “talks de
                  bolso”.
                </li>
                <li>
                  ✔ Dinâmicas de soft skills: empatia, escuta ativa, colaboração
                  e storytelling.
                </li>
                <li>
                  ✔ Sessões de meditação, mindfulness, yoga ou alongamento (com
                  apoio de cursos da saúde).
                </li>
                <li>
                  ✔ Sessões criativas livres: ideação descontraída e cocriação
                  de projetos em clima informal.
                </li>
                <li>
                  ✔ Exposições artísticas de alunos: músicas, podcasts, momentos
                  culturais.
                </li>
              </ul>
            </div>

            {/* Estrutura física */}
            <div>
              <strong>Estrutura física</strong>
              <ul className="mt-3 space-y-3">
                <li>
                  ✔ Poltronas e pufes confortáveis, iluminação suave e decoração
                  acolhedora.
                </li>
                <li>
                  ✔ Espaço com isolamento acústico parcial para conversas
                  tranquilas.
                </li>
                <li>
                  ✔ Recursos multimídia para exibição de vídeos, podcasts e
                  apresentações curtas.
                </li>
                <li>
                  ✔ Possibilidade de café colaborativo ou espaço de lanche entre
                  equipes.
                </li>
              </ul>
            </div>

            {/* Benefício Intercurso */}
            <div>
              <strong>Benefício Intercurso</strong>
              <p className="mt-3">
                Promove equilíbrio, escuta, criatividade e saúde mental,
                beneficiando todos os cursos da universidade. É um ambiente onde
                conexões humanas se fortalecem, e as ideias podem emergir de
                forma mais natural e colaborativa.
              </p>
            </div>
          </div>
        </ScrollArea>
      );
    },
  },
  {
    title: "INCODE TECH SCHOOL",
    description: "A escola de tecnologia da vida real dentro do Oxygeni HUB.",
    src: "https://placehold.co/1920x1080/71006E/FFFFFF?text=background",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <ScrollArea className="h-72 w-full rounded-md">
          <div className="space-y-6">
            <p>
              A INCODE Tech School, sediada dentro do Oxygeni HUB no CEUMA
              Campus Renascença, representa a escola de tecnologia da vida real,
              conectando o ensino à prática com metodologias ágeis, aprendizagem
              baseada em desafios e parceria direta com empresas, startups e o
              ecossistema de inovação.
            </p>

            <p>
              Este espaço abriga as turmas dos cursos livres de tecnologia, além
              de ser usado como laboratório prático dos cursos de graduação como
              Análise e Desenvolvimento de Sistemas (ADS) e Engenharia de
              Software. Também funciona como ponto de partida para experiências
              como bootcamps, hackathons, mentorias e desafios corporativos.
            </p>

            <div>
              <strong>O que acontece na INCODE?</strong>

              <ul className="mt-3 space-y-3">
                <li>✔ Aulas presenciais formação INCODE.</li>

                <li>
                  ✔ Atividades práticas para cursos da CEUMA, especialmente:
                  Projetos integradores de ADS e Engenharia de Software, ou
                  oficinas para outras áreas (Saúde, Direito, Administração
                  etc.) que desejam desenvolver soluções tecnológicas.
                </li>

                <li>
                  ✔ Programas de extensão e iniciação tecnológica: voltados a
                  estudantes de outras graduações que desejam aprender a
                  programar ou entender melhor o universo digital.
                </li>

                <li>
                  ✔ Startup Experience: alunos atuam como desenvolvedores em
                  projetos reais com startups do Oxygeni ou empresas parceiras.
                </li>

                <li>
                  ✔ Maratonas de programação e eventos como a INCODE Challenge.
                </li>
              </ul>
            </div>

            <div>
              <strong>Metodologias Ativas Aplicadas</strong>

              <ul className="mt-3 space-y-3">
                <li>✔ Microlearning e trilhas curtas de conhecimento.</li>

                <li>
                  ✔ Challenge Based Learning: aprendizado com base em desafios.
                </li>

                <li>✔ Peer-to-peer: colaboração entre pares.</li>

                <li>
                  ✔ Gamificação com sistema de ranking, PINs, certificados por
                  etapa e vitrine de talentos.
                </li>
              </ul>
            </div>

            <div>
              <strong>Benefício Intercurso</strong>

              <p className="mt-3">
                A INCODE serve como hub formativo transversal, acessível a
                qualquer aluno da CEUMA interessado em tecnologia, programação e
                inovação. É um espaço que democratiza o conhecimento digital,
                oferece alta empregabilidade e amplia a visão de mundo dos
                estudantes.
              </p>
            </div>
          </div>
        </ScrollArea>
      );
    },
  },
];
