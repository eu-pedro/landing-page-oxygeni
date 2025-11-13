"use client";

import { Vortex } from "@/components/ui/shadcn-io/vortex";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

export function CosmicHero() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        baseHue={256}
        className="flex items-center flex-col px-2 md:px-10  py-4 w-full h-full"
      >
        <header className="w-full px-16 py-6 flex items-center justify-center">
          <Image
            src="/oxygeni-logo.png"
            alt="Logo da Oxygeni"
            width={206}
            height={54}
          />
        </header>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-[40px] md:text-6xl text-center font-extrabold mt-[10%] leading-tight text-nowrap"
        >
          Agência de{" "}
        </motion.h2>
        <span className="text-[#681CE3] text-[40px] md:text-6xl text-center font-bold">
          <FlipWords words={["Inovação", "Tecnologia", "Empreendedorismo"]} />
        </span>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="block text-white text-[32px] md:text-[40px] font-extrabold mt-1"
        >
          da Universidade CEUMA
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-white/70 md:text-2xl mt-6 text-center font-normal text-xl max-w-[643px]"
        >
          A Oxygeni DIT tem como missão principal oxigenar pessoas e empresas
          através do desenvolvimento de soluções inovadoras e tecnológicas.
        </motion.p>
      </Vortex>
    </div>
  );
}
