import React, { useState } from 'react';
import { ChevronDown, Terminal, Lock, Code, Cpu, Users, Award } from 'lucide-react';

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('professional');

  const professionalExperiences = [
    {
      date: 'Jan 2026 - Present',
      title: 'Software Development Intern',
      company: 'Allergy Voyage',
      location: 'Tempe, AZ',
      type: 'Development',
      icon: Code,
      highlights: [
        'New incoming internship where I will be working on developing features for the company\'s web applications using React, C#, Git and Node.js',
      ]
    },
    {
      date: 'May 2025 - Present',
      title: 'Undergraduate Researcher',
      company: 'SEFCOM Lab, Arizona State University',
      location: 'Tempe, AZ',
      type: 'Research',
      icon: Lock,
      highlights: [
        'Developed and automated exploits for ASLR/PIE bypass, shellcode injection, and ROP chains on real-world binaries using pwntools, GDB, and framebuffer manipulation techniques',
        'Reverse engineered x86/MIPS binaries using Ghidra and IDA Pro to analyze custom file formats, decrypt framebuffer directives, and reconstruct ANSI-rendered flags'
      ]
    },
    {
      date: 'Apr 2025 - Present',
      title: 'Web Experience Designer',
      company: 'University College, Arizona State University',
      location: 'Tempe, AZ',
      type: 'Design & Development',
      icon: Code,
      highlights: [
        'Conceptualized and developed 10+ responsive web pages using ASU\'s branded design system, enhancing mobile usability and increasing user engagement',
        'Conducted 20+ user research interviews and usability tests, leading to improved navigation flow and reduced bounce rates across redesigned pages',
        'Oversaw front-end, back-end, and design efforts across UC\'s entire web portfolio, streamlining content workflows and accelerating site update processes'
      ]
    },
    {
      date: 'Aug 2024 - Dec 2024',
      title: 'Software Development Intern',
      company: 'UNIUS',
      location: 'Remote',
      type: 'Development',
      icon: Terminal,
      highlights: [
        'Designed and optimized user-facing features using Next.js and React, resulting in a 30% reduction in page load times and improved user engagement across platforms',
        'Collaborated with cross-functional teams to integrate front-end components with back-end APIs, ensuring seamless data flow and consistent feature delivery across deployments'
      ]
    },
    {
      date: 'Aug 2024 - Dec 2024',
      title: 'Undergraduate Teaching Assistant',
      company: 'Arizona State University',
      location: 'Tempe, AZ',
      type: 'Teaching',
      icon: Cpu,
      highlights: [
        'Assisted in teaching computer science courses and providing guidance to students',
        'Conducted office hours and graded assignments to support course delivery'
      ]
    },
    {
      date: 'Jul 2024 - Oct 2024',
      title: 'Barrett Research Fellow',
      company: 'Barrett, The Honors College',
      location: 'Tempe, AZ',
      type: 'Research',
      icon: Lock,
      highlights: [
        'Conducted research as part of the Barrett Honors College fellowship program',
        'Collaborated with faculty on research initiatives and scholarly work'
      ]
    },
    {
      date: 'Mar 2023 - Oct 2023',
      title: 'Software Development Intern',
      company: 'Calibre Technologies',
      location: 'Maharashtra, India',
      type: 'Development',
      icon: Terminal,
      highlights: [
        'Developed a Task Management System using JavaScript, SQL, HTML and CSS to take user input of tasks, storing them, and enabling users to edit tasks upon completion',
        'Used SQL and JavaScript to store user login info in SQL Database'
      ]
    }
  ];

  const leadershipExperiences = [
    {
      date: 'Jul 2025 - Present',
      title: 'President',
      company: 'Indian Students\' Association at Arizona State University',
      location: 'Tempe, AZ',
      type: 'Leadership',
      icon: Users,
      highlights: [
        'Leading the largest cultural student organization at ASU with 500+ active members',
        'Overseeing all organizational operations, events, and strategic initiatives',
        'Managing executive board and coordinating cross-functional teams'
      ]
    },
    {
      date: 'Jan 2024 - Present',
      title: 'Fulton Ambassador',
      company: 'Fulton Schools of Engineering, Arizona State University',
      location: 'Tempe, AZ',
      type: 'Outreach',
      icon: Award,
      highlights: [
        'Representing Fulton Schools of Engineering at university events and prospective student tours',
        'Providing mentorship and guidance to incoming engineering students',
        'Participating in recruitment and retention initiatives for the engineering school'
      ]
    },
    {
      date: 'Oct 2024 - May 2025',
      title: 'Treasurer',
      company: 'Indian Students\' Association at Arizona State University',
      location: 'Tempe, AZ',
      type: 'Leadership',
      icon: Users,
      highlights: [
        'Managed organizational budget of $50,000+ for events and operations',
        'Oversaw financial planning and expense tracking for 15+ major events',
        'Ensured fiscal responsibility and compliance with university policies'
      ]
    },
    {
      date: 'Aug 2024 - Apr 2025',
      title: 'Director of Finance',
      company: 'CSSG at ASU',
      location: 'Tempe, AZ',
      type: 'Leadership',
      icon: Users,
      highlights: [
        'Directed financial operations for Computer Science Student Government',
        'Coordinated budget allocation for student programs and initiatives',
        'Collaborated with leadership team on strategic financial planning'
      ]
    },
    {
      date: 'Sep 2024 - Feb 2025',
      title: 'Officer of Tech',
      company: 'VentureVerse',
      location: 'Tempe, AZ',
      type: 'Leadership',
      icon: Code,
      highlights: [
        'Managed technical infrastructure and digital platforms for entrepreneurship organization',
        'Developed and maintained organization website and digital assets',
        'Provided technical support for events and member initiatives'
      ]
    },
    {
      date: 'Apr 2024 - Oct 2024',
      title: 'Director of Admin',
      company: 'Indian Students\' Association at Arizona State University',
      location: 'Tempe, AZ',
      type: 'Leadership',
      icon: Users,
      highlights: [
        'Coordinated administrative operations and documentation for the organization',
        'Managed event logistics and member communication systems',
        'Streamlined organizational processes and improved efficiency'
      ]
    },
    {
      date: 'Dec 2023 - Mar 2024',
      title: 'Officer in Finance',
      company: 'Indian Students\' Association at Arizona State University',
      location: 'Tempe, AZ',
      type: 'Leadership',
      icon: Users,
      highlights: [
        'Assisted with financial record-keeping and budget management',
        'Supported treasurer in organizing financial documentation',
        'Gained foundational experience in organizational finance'
      ]
    }
  ];

  const experiences = activeTab === 'professional' ? professionalExperiences : leadershipExperiences;

  const toggleExpand = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[#F5C518] font-mono text-xs">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i}>{'> ' + Math.random().toString(36).substring(2, 15)}</div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-8 h-8 text-[#F5C518]" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#F5C518]">
              EXPERIENCE
            </h2>
          </div>
          <div className="h-[1px] w-32 bg-[#F5C518] mb-3"></div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                setActiveTab('professional');
                setActiveIndex(null);
              }}
              className={`px-6 py-3 text-sm font-mono border transition-all duration-300 ${
                activeTab === 'professional'
                  ? 'bg-[#F5C518] text-black border-[#F5C518]'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-[#F5C518]/50 hover:text-white'
              }`}
            >
              <span className="mr-2">&gt;</span>PROFESSIONAL
            </button>
            <button
              onClick={() => {
                setActiveTab('leadership');
                setActiveIndex(null);
              }}
              className={`px-6 py-3 text-sm font-mono border transition-all duration-300 ${
                activeTab === 'leadership'
                  ? 'bg-[#F5C518] text-black border-[#F5C518]'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-[#F5C518]/50 hover:text-white'
              }`}
            >
              <span className="mr-2">&gt;</span>LEADERSHIP
            </button>
          </div>
        </div>

        <div className="relative">
          
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F5C518] via-[#F5C518]/50 to-[#F5C518]/20"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isActive = activeIndex === index;
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={index}
                  className="relative pl-8 md:pl-20"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  
                  <div className={`absolute left-[-8px] md:left-[24px] top-2 transition-all duration-300 ${
                    isHovered || isActive ? 'scale-125' : 'scale-100'
                  }`}>
                    <div className="relative">
                      <div className={`w-4 h-4 bg-[#F5C518] rotate-45`}></div>
                    </div>
                  </div>

                  <div 
                    className={`border border-gray-800 bg-[#0a0a0a] p-6 cursor-pointer transition-all duration-300 ${
                      isHovered ? 'border-[#F5C518]/50 shadow-lg shadow-[#F5C518]/10 transform -translate-y-1' : ''
                    }`}
                    onClick={() => toggleExpand(index)}
                  >
                    
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`p-2 border transition-colors duration-300 ${
                        isHovered ? 'border-[#F5C518] bg-[#F5C518]/10' : 'border-gray-800 bg-black'
                      }`}>
                        <Icon className="w-5 h-5 text-[#F5C518]" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h3 className={`text-lg md:text-xl font-semibold transition-colors ${
                            isHovered ? 'text-[#F5C518]' : 'text-white'
                          }`}>
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-[#F5C518] text-sm font-medium mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 text-xs font-mono">
                          {exp.location}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs font-mono text-gray-400 bg-black px-3 py-1 border border-gray-800">
                          {exp.date}
                        </span>
                        <span className="text-xs text-[#F5C518] border border-[#F5C518]/30 px-3 py-1">
                          {exp.type}
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 text-[#F5C518] transition-transform duration-300 ${
                            isActive ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>

                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border-l-2 border-[#F5C518]/30 pl-4 pt-2 space-y-3 bg-black/50 p-4 font-mono text-xs">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex gap-3 group">
                            <span className="text-[#F5C518] mt-1">&gt;</span>
                            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index !== experiences.length - 1 && (
                    <div className="absolute left-0 md:left-8 bottom-[-16px] w-16 h-[1px] bg-gradient-to-r from-[#F5C518]/50 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;