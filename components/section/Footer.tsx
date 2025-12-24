import {useState} from 'react';
import { Github, Linkedin, Mail, Terminal, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const backgroundCode = useState(() => 
      Array.from({ length: 40 }, () => '< ' + Math.random().toString(16).substring(2, 12) + ' />')
    )[0];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/PratGit1606',
      handle: '@PratGit1606'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/pratham-hegde',
      handle: '/in/pratham-hegde'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:phegde9@asu.edu',
      handle: 'phegde9@asu.edu'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' }
  ];

  return (
    <footer className="relative bg-black text-white border-t border-[#F5C518]/20 overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 left-10 text-[#F5C518] font-mono text-xs">
          {backgroundCode.map((code, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {code}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-[#F5C518]" />
              <h3 className="text-xl font-bold text-[#F5C518] font-mono">Pratham Hegde</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Building secure systems, breaking to understand, and creating resilient solutions. 
              Computer Science student focused on cybersecurity at Arizona State University.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <span className="text-[#F5C518]">&gt;</span>
              <span>Tempe, Arizona, US</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#F5C518] mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#F5C518] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#F5C518] mb-4 font-mono">
              Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-gray-400 hover:text-[#F5C518] transition-colors"
                  >
                    <div className="p-2 border border-gray-800 rounded group-hover:border-[#F5C518] group-hover:bg-[#F5C518]/10 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">{social.name}</p>
                      <p className="text-sm font-mono">{social.handle}</p>
                    </div>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-mono">
              © {currentYear} Pratham Hegde. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5C518]/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;