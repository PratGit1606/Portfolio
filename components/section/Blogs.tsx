import React, { useState } from 'react';
import { BookOpen, Terminal, Zap } from 'lucide-react';

export default function Blogs() {
  const backgroundCode = useState(() => 
    Array.from({ length: 30 }, () => '// ' + Math.random().toString(36).substring(2, 12))
  )[0];

  return (
    <section id="blog" className="bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[#F5C518] font-mono text-xs">
          {backgroundCode.map((code, i) => (
            <div key={i}>{code}</div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-8 h-8 text-[#F5C518]" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#F5C518]">
              $BLOG
            </h2>
          </div>
          <div className="h-[1px] w-32 bg-[#F5C518] mb-3"></div>
        </div>

        <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5C518]/5 via-transparent to-transparent"></div>
          
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-[#F5C518]/10 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-[#F5C518]/10 rounded-bl-lg"></div>

          <div className="relative p-12 md:p-20 text-center">
            
            <div className="inline-flex items-center justify-center p-6 rounded-full border border-[#F5C518]/30 bg-[#F5C518]/5 mb-8">
              <BookOpen className="w-12 h-12 text-[#F5C518]" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coming Soon
            </h3>

            <p className="text-lg text-gray-400 mb-3 max-w-2xl mx-auto leading-relaxed">
              I know you&apos;re excited to hear my thoughts on <span className="text-[#F5C518]">cybersecurity</span>, <span className="text-[#F5C518]">reverse engineering</span>, and <span className="text-[#F5C518]">building secure systems</span>.
            </p>

            <p className="text-base text-gray-500 mb-8 font-mono">
              Stay tuned for deep dives into pwn challenges, security research, and tech adventures.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-4 py-2 bg-black/40 border border-[#F5C518]/30 rounded text-sm text-gray-400 font-mono flex items-center gap-2">
                <Zap className="w-3 h-3 text-[#F5C518]" />
                <span>Security Research</span>
              </div>
              <div className="px-4 py-2 bg-black/40 border border-[#F5C518]/30 rounded text-sm text-gray-400 font-mono flex items-center gap-2">
                <Zap className="w-3 h-3 text-[#F5C518]" />
                <span>CTF Writeups</span>
              </div>
              <div className="px-4 py-2 bg-black/40 border border-[#F5C518]/30 rounded text-sm text-gray-400 font-mono flex items-center gap-2">
                <Zap className="w-3 h-3 text-[#F5C518]" />
                <span>Dev Tutorials</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5C518]/10 border border-[#F5C518]/30 rounded text-sm font-mono text-[#F5C518]">
              <span className="animate-pulse">●</span>
              <span>In Development</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5C518]/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}