"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AnimateOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-10% 0px", // dispara um pouco antes
    amount: 0.3, // percentual visível
  });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "visible" : "hidden"} // anima indo e voltando
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}