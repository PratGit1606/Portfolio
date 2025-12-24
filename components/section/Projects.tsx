import React, { useState } from 'react';
import { ExternalLink, Github, Zap, Shield, Cloud, ArrowRight, LucideProps } from 'lucide-react';
import Link from 'next/link';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: string;
  gradient: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  github: string | null;
  demo: string | null;
}

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const backgroundCode = useState(() => 
    Array.from({ length: 40 }, () => '< ' + Math.random().toString(16).substring(2, 12) + ' />')
  )[0];

  const featuredProjects: Project[] = [
    {
      title: 'CarbonCompass',
      subtitle: 'Climate Impact Analytics',
      description: 'A climate-impact analytics application using Cloudflare Workers and D1, integrating LLM-powered data extraction through Gemini and Amazon Q to deliver real-time carbon-footprint estimates for consumer products.',
      tech: ['Cloudflare Workers', 'D1', 'Gemini', 'Amazon Q', 'Python'],
      metrics: '< 150ms response time',
      gradient: 'from-green-500/20 to-emerald-500/20',
      icon: Cloud,
      github: 'https://github.com/PratGit1606/cf_ai_CarbonCompass',
      demo: 'https://cf-ai-carbon-compass.vercel.app/'
    },
    {
      title: 'SecureChat',
      subtitle: 'Encrypted Messaging & Exploit Simulation',
      description: 'Built and reverse-engineered a full-stack messaging platform using Flask, SQLite, and AES-ECB, simulating encrypted DHE-AES conversations. Launched XSS, ECB replay, and Diffie-Hellman key manipulation attacks using Selenium automation.',
      tech: ['Flask', 'SQLite', 'AES-ECB', 'Selenium', 'Python'],
      metrics: 'Full security simulation',
      gradient: 'from-red-500/20 to-orange-500/20',
      icon: Shield,
      github: null,
      demo: 'https://pwn.college/'
    },
    {
      title: 'MenuMaven',
      subtitle: 'AI Restaurant Discovery Platform',
      description: 'An AI-powered restaurant discovery platform integrating Claude API, Google Maps API, and Yelp API to provide personalized dining recommendations based on user preferences and real-time data.',
      tech: ['Claude API', 'Google Maps', 'Yelp API', 'React', 'Node.js'],
      metrics: 'Smart recommendations',
      gradient: 'from-yellow-500/20 to-white-500/20',
      icon: Zap,
      github: null,
      demo: null
    }
  ];

  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-[#F5C518] font-mono text-xs">
          {backgroundCode.map((code, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {code}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#F5C518] mb-2">
            $PROJECTS
          </h2>
          <div className="h-[1px] w-32 bg-[#F5C518] mb-3"></div>
          <p className="text-gray-500 tracking-wider text-lg">
            Check out the projects that display me best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, idx) => {
            const Icon = project.icon;
            const isHovered = hoveredCard === idx;
            
            return (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  relative h-full backdrop-blur-xl bg-white/[0.02] border border-white/10 
                  rounded-lg overflow-hidden transition-all duration-500
                  ${isHovered ? 'border-[#F5C518]/50 shadow-2xl shadow-[#F5C518]/20 -translate-y-2' : ''}
                `}>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-[#F5C518]/10 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-[#F5C518]/10 rounded-bl-lg"></div>

                  <div className="relative p-6 h-full flex flex-col">
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-2 rounded border transition-all duration-300 ${
                        isHovered ? 'border-[#F5C518] bg-[#F5C518]/10' : 'border-white/10 bg-white/5'
                      }`}>
                        <Icon className="w-5 h-5 text-[#F5C518]" />
                      </div>
                      
                      <span className="text-[9px] font-mono px-2 py-1 bg-[#F5C518]/20 text-[#F5C518] border border-[#F5C518]/30 rounded">
                        FEATURED
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                        isHovered ? 'text-[#F5C518]' : 'text-white'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className="text-xs text-[#F5C518]/70 uppercase tracking-wider mb-3 font-mono">
                        {project.subtitle}
                      </p>

                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-[10px] px-2 py-1 bg-black/40 border border-white/10 text-gray-400 font-mono rounded hover:border-[#F5C518]/30 hover:text-[#F5C518] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-mono text-[#F5C518]/80">
                          <span className="text-white/40">&gt;</span> {project.metrics}
                        </p>
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded border border-white/10 hover:border-[#F5C518]/50 hover:bg-[#F5C518]/10 transition-all group/btn"
                            >
                              <Github className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#F5C518] transition-colors" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded border border-white/10 hover:border-[#F5C518]/50 hover:bg-[#F5C518]/10 transition-all group/btn"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#F5C518] transition-colors" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`
                    absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#F5C518] to-transparent
                    transition-all duration-500 origin-left
                    ${isHovered ? 'w-full' : 'w-0'}
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/projects">
            <button className="group px-8 py-4 bg-transparent border-2 border-[#F5C518] text-[#F5C518] font-mono text-sm uppercase tracking-wider hover:bg-[#F5C518] hover:text-black transition-all duration-300 flex items-center gap-3">
              <span>See All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;