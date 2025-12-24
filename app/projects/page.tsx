'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Award, Zap, Shield, Cloud, Terminal, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const backgroundCode = useState(() => 
    Array.from({ length: 40 }, () => '< ' + Math.random().toString(16).substring(2, 12) + ' />')
  )[0];

  const allProjects = [
    {
      title: 'CarbonCompass',
      subtitle: 'Climate Impact Analytics',
      description: 'A climate-impact analytics application using Cloudflare Workers and D1, integrating LLM-powered data extraction through Gemini and Amazon Q to deliver real-time carbon-footprint estimates for consumer products.',
      tech: ['Cloudflare Workers', 'D1', 'Gemini', 'Amazon Q', 'Python'],
      metrics: '< 150ms response time',
      gradient: 'from-green-500/20 to-emerald-500/20',
      icon: Cloud,
      category: 'ai',
      featured: true
    },
    {
      title: 'SecureChat',
      subtitle: 'Encrypted Messaging & Exploit Simulation',
      description: 'Built and reverse-engineered a full-stack messaging platform using Flask, SQLite, and AES-ECB, simulating encrypted DHE-AES conversations. Launched XSS, ECB replay, and Diffie-Hellman key manipulation attacks using Selenium automation.',
      tech: ['Flask', 'SQLite', 'AES-ECB', 'Selenium', 'Python'],
      metrics: 'Full security simulation',
      gradient: 'from-red-500/20 to-orange-500/20',
      icon: Shield,
      category: 'security',
      featured: true
    },
    {
      title: 'MenuMaven',
      subtitle: 'AI Restaurant Discovery Platform',
      description: 'An AI-powered restaurant discovery platform integrating Claude API, Google Maps API, and Yelp API to provide personalized dining recommendations based on user preferences and real-time data.',
      tech: ['Claude API', 'Google Maps', 'Yelp API', 'React', 'Node.js'],
      metrics: 'Smart recommendations',
      gradient: 'from-purple-500/20 to-pink-500/20',
      icon: Zap,
      category: 'ai',
      featured: true
    },
    {
      title: 'Sherpa',
      subtitle: 'Autonomous Vehicle Collaboration Platform',
      description: 'A data-sharing platform for autonomous vehicles enhancing traffic flow and reducing congestion using real-time communication and traffic APIs.',
      tech: ['Next.js', 'TomTom API', 'YOLO', 'Vector Search - IRIS', 'Flask'],
      metrics: '83.4% accuracy, 15% congestion reduction',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      icon: Award,
      category: 'ai',
      featured: false
    },
    {
      title: 'Pronewer',
      subtitle: 'Business Social Platform',
      description: 'LinkedIn-Fiverr hybrid platform for business networking and freelancer collaboration.',
      tech: ['Next.js', 'AWS', 'Clerk', 'TailwindCSS'],
      metrics: '30% user engagement increase',
      gradient: 'from-indigo-500/20 to-blue-500/20',
      icon: Award,
      category: 'web',
      featured: false
    },
    {
      title: 'TaskerPro',
      subtitle: 'Task Management System',
      description: 'A comprehensive task management system designed to streamline productivity for teams and individuals.',
      tech: ['React', 'Material-UI', 'SQL'],
      metrics: 'Enhanced team efficiency by 20%',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      icon: Award,
      category: 'web',
      featured: false
    },
    {
      title: 'WhatTheBleep',
      subtitle: 'Automatic Audio Censorship Tool',
      description: 'An AI-powered tool that automatically detects and censors inappropriate language in audio streams.',
      tech: ['Python', 'Reflex', 'OpenAI Whisper'],
      metrics: '98% detection accuracy',
      gradient: 'from-pink-500/20 to-rose-500/20',
      icon: Award,
      category: 'ai',
      featured: false
    },
    {
      title: 'Rocket Rescue',
      subtitle: 'Space Mission Simulation Game',
      description: 'An engaging game simulating space rescue missions, challenging players\' strategic thinking designed to improve mobility for stroke patients.',
      tech: ['p5JS', 'HTML', 'CSS'],
      metrics: 'Achieved 500+ users',
      gradient: 'from-purple-500/20 to-violet-500/20',
      icon: Award,
      category: 'game',
      featured: false
    },
    {
      title: 'Reddit Upvote System',
      subtitle: 'Reddit Post Ranking Simulator',
      description: 'A system simulating Reddit\'s upvote mechanism for post ranking and popularity prediction.',
      tech: ['React', 'UI Bootstrap'],
      metrics: 'First project into the React world',
      gradient: 'from-orange-500/20 to-red-500/20',
      icon: Award,
      category: 'web',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'security', label: 'Security' },
    { id: 'web', label: 'Web Apps' },
    { id: 'game', label: 'Games' }
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 text-[#F5C518] font-mono text-xs">
          {backgroundCode.map((code, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {code}
            </div>
          ))}
        </div>
      </div>

      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <Link href="/#projects">
            <button className="group mb-8 flex items-center gap-2 text-gray-400 hover:text-[#F5C518] transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to Home</span>
            </button>
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <Terminal className="w-8 h-8 text-[#F5C518]" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#F5C518]">
                ALL PROJECTS
              </h1>
            </div>
            <div className="h-[1px] w-32 bg-[#F5C518] mb-6"></div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2 text-xs font-mono border transition-all duration-300 ${
                    filter === cat.id
                      ? 'bg-[#F5C518] text-black border-[#F5C518]'
                      : 'bg-transparent text-gray-400 border-gray-700 hover:border-[#F5C518]/50 hover:text-white'
                  }`}
                >
                  <span className="mr-2">&gt;</span>{cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
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
                        
                        {project.featured && (
                          <span className="text-[9px] font-mono px-2 py-1 bg-[#F5C518]/20 text-[#F5C518] border border-[#F5C518]/30 rounded">
                            FEATURED
                          </span>
                        )}
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
                            <button className="p-1.5 rounded border border-white/10 hover:border-[#F5C518]/50 hover:bg-[#F5C518]/10 transition-all group/btn">
                              <Github className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#F5C518] transition-colors" />
                            </button>
                            <button className="p-1.5 rounded border border-white/10 hover:border-[#F5C518]/50 hover:bg-[#F5C518]/10 transition-all group/btn">
                              <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#F5C518] transition-colors" />
                            </button>
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
        </div>
      </section>
    </div>
  );
}