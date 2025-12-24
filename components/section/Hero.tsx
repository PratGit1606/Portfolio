"use client";

import { motion } from "framer-motion";
import CompileName from "./CompileName";
import HeroSwipeStack from "../hero/HeroSwipeStack";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about, section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full px-6 pt-40 pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="text-sm tracking-[0.35em] text-[#F5C518] mb-8">
              CYBERSECURITY · FULLSTACK · LEADERSHIP
            </p>

            <CompileName />

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Breaking systems
              <br />
              <span className="text-gray-400 font-normal">
                to build resilient ones.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
              I love to try to break into things in order to understand them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center lg:justify-end lg:-ml-8"
          >
            <HeroSwipeStack />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown
              className="w-12 h-12 text-[#F5C518]"
              strokeWidth={2.5}
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}