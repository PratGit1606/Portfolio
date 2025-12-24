"use client"
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import TechStack from "@/components/section/TechStack";
import Experience from "@/components/section/Experience";
import Projects from "@/components/section/Projects";
import Blogs from "@/components/section/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Blogs />
    </>
  );
}
