"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const facts = [
  "I practice more than 5 forms of martial arts",
  "I have been playing the keyboard since I was 10",
  "I breathe pwn.college challenges more than air",
  "I have played every single Pokemon game in existence and I can name all 1025 of them",
  "My life goal is to try out every style of cuisine possible",
  "My favourite anime is One Piece",
  "I love mint chocolate chip ice cream",
];

export default function FunFactCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % facts.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative rounded-2xl bg-white/[0.035] px-10 py-8 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#F5C518]/10 via-transparent to-transparent opacity-40" />
      <p className="text-xs uppercase tracking-[0.4em] text-[#F5C518] mb-4">
        Fun Fact
      </p>

      <div className="relative h-auto min-h-[7.5rem]">
        <AnimatePresence mode="wait">
          <motion.p
            key={facts[index]}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute text-2xl font-medium text-white leading-snug"
          >
            {facts[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#F5C518]/60 to-transparent" />
    </motion.div>
  );
}
