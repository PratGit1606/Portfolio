"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/hero1.jpeg",
  "/hero2.jpeg",
  "/hero3.jpeg",
  "/hero4.jpeg",
];

export default function HeroSwipeStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-[480px] h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Portfolio preview"
            fill
            className="object-cover"
            priority
          />

          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{
              duration: 1.8,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1.4,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
