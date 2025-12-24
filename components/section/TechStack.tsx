import React, { useState } from 'react';

const TechStack = () => {
const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const techCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C/C++', 'MATLAB', 'SQL'],
      featured: ['Python', 'JavaScript', 'C/C++'],
      color: '#F5C518'
    },
    {
      title: 'Frontend',
      skills: ['React/Next.js', 'TailwindCSS', 'Bootstrap'],
      featured: ['React/Next.js'],
      color: '#F5C518'
    },
    {
      title: 'Backend',
      skills: ['Django', 'Flask', 'REST API Development', 'PostgreSQL', 'MySQL', 'Firebase'],
      featured: ['Django', 'REST API Development'],
      color: '#F5C518'
    },
    {
      title: 'Security & Reverse Engineering',
      skills: ['Debugging', 'Reverse Engineering', 'GDB', 'pwntools', 'Shell Scripting', 'Automated Testing', 'Playwright MCP', 'Linux', 'Git'],
      featured: ['Reverse Engineering', 'pwntools'],
      color: '#F5C518'
    },
    {
      title: 'AI & ML',
      skills: ['LLM Integration (OpenAI, Gemini, Amazon Q)', 'Prompt Engineering', 'TensorFlow', 'PyTorch', 'scikit-learn'],
      featured: ['LLM Integration (OpenAI, Gemini, Amazon Q)'],
      color: '#F5C518'
    },
    {
      title: 'Core CS',
      skills: ['DSA', 'Automated Testing', 'Debugging'],
      featured: ['DSA'],
      color: '#F5C518'
    }
  ];

  return (
    <section id="stack" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#F5C518] mb-2">
            $TECH STACK
          </h2>
          <div className="h-[1px] w-32 bg-[#F5C518] mb-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                relative bg-[#0a0a0a] border border-gray-800 p-6 
                transition-all duration-300 overflow-hidden
                ${hoveredCard === idx ? 'border-[#F5C518] shadow-lg shadow-[#F5C518]/20 -translate-y-2' : ''}
              `}>
                
                <div className={`
                  absolute top-0 left-0 w-full h-1 bg-[#F5C518] 
                  transition-all duration-300 origin-left
                  ${hoveredCard === idx ? 'scale-x-100' : 'scale-x-0'}
                `}></div>

                <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-[#F5C518]/20"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-[#F5C518]/20"></div>

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#F5C518] font-mono text-xs bg-[#F5C518]/10 px-2 py-1 border border-[#F5C518]/30">
                    [{String(idx + 1).padStart(2, '0')}]
                  </span>
                  <h3 className="text-[#F5C518] text-sm uppercase tracking-[0.15em] font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className={`
                        flex items-center gap-2 px-3 py-2 text-xs
                        border transition-all duration-200
                        ${category.featured.includes(skill)
                          ? 'bg-[#F5C518]/10 border-[#F5C518]/50 text-[#F5C518]'
                          : 'bg-black/50 border-gray-800 text-gray-400 hover:border-[#F5C518]/30 hover:text-white'
                        }
                      `}
                    >
                      <span className="text-[#F5C518]">&gt;</span>
                      <span className="flex-1">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-[10px] font-mono text-gray-600">
                    {category.skills.length} TOOLS
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[#F5C518]/20 text-center" />
      </div>
    </section>
  );
};

export default TechStack;