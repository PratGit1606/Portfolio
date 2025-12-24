import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect} from "react";
import { Shield, Search, Lock, Unlock, Terminal } from "lucide-react";
const facts = [
  "I practice more than 5 forms of martial arts",
  "I have been playing the keyboard since I was 10",
  "I breathe pwn.college challenges more than air",
  "I have played every single Pokemon game in existence and I can name all 1025 of them",
  "My life goal is to try out every style of cuisine possible",
];

const hiddenFlags = [
  {
    id: 1,
    text: "flag{hello_world}",
    hint: "The first program almost everyone writes",
    answer: "hello world",
    type: "knowledge"
  },
  {
    id: 2,
    text: "flag{king_of_the_pirates}",
    hint: "What’s my favorite anime?",
    answer: "one piece",
    type: "personal"
  },
  {
    id: 3,
    text: "flag{cool_and_refreshing}",
    hint: "My favorite ice cream flavor",
    answer: "mint chocolate chip",
    type: "personal"
  },
];

interface Drop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  chars: string[];
}

function MatrixRain() {
  const [drops] = useState<Drop[]>(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const columns = 15;

    return Array.from({ length: columns }, (_, i) => ({
      id: i,
      x: (i * 100) / columns,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      chars: Array.from({ length: 20 }, () =>
        chars[Math.floor(Math.random() * chars.length)]
      ),
    }));
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-0 text-[#F5C518] font-mono text-xs"
          style={{ left: `${drop.x}%` }}
          initial={{ y: "-100%" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {drop.chars.map((char, i) => (
            <div key={i} style={{ opacity: 1 - i * 0.05 }}>
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function VulnerabilityScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [foundFlag, setFoundFlag] = useState(false);

  const vulnerabilities = [
    { name: "Full-Stack Development", severity: "critical", color: "text-red-400" },
    { name: "Cybersecurity Expertise", severity: "critical", color: "text-red-400" },
    { name: "Problem Solving", severity: "high", color: "text-orange-400" },
    { name: "Leadership Skills", severity: "high", color: "text-orange-400" },
    { name: "Competitive Programming", severity: "medium", color: "text-yellow-400" },
    { name: "flag{never_stop_learning}", severity: "FLAG", color: "text-[#F5C518]" },
  ];

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setProgress(0);
    setFoundFlag(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          setTimeout(() => setFoundFlag(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.3 }}
      className="relative rounded-xl bg-black/60 px-6 py-5 border border-[#F5C518]/30 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#F5C518]" />
          <p className="text-xs uppercase tracking-widest text-[#F5C518]/80 font-mono">
            Profile Scanner
          </p>
        </div>
        <button
          onClick={handleScan}
          disabled={isScanning}
          className="px-3 py-1.5 text-xs font-mono bg-[#F5C518]/20 hover:bg-[#F5C518]/30 text-[#F5C518] rounded border border-[#F5C518]/50 transition-colors disabled:opacity-50"
        >
          {isScanning ? "SCANNING..." : "RUN SCAN"}
        </button>
      </div>

      {(isScanning || scanComplete) && (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/60 font-mono">
              <span>Progress: {progress}%</span>
              <span>{isScanning ? "Analyzing..." : "Complete"}</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#F5C518] to-yellow-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {scanComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2"
            >
              <p className="text-xs font-mono text-white/80 mb-3">
                → {vulnerabilities.length} critical strengths detected
              </p>
              {vulnerabilities.map((vuln, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-xs font-mono"
                >
                  <Search className="w-3 h-3 text-[#F5C518]" />
                  <span className={vuln.color}>[{vuln.severity.toUpperCase()}]</span>
                  <span className="text-white/70">{vuln.name}</span>
                </motion.div>
              ))}
              {foundFlag && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-3 bg-[#F5C518]/10 border border-[#F5C518]/30 rounded text-center"
                >
                  <p className="text-xs text-[#F5C518] font-mono">🚩 FLAG DISCOVERED!</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
}

interface HiddenFlagCardProps {
  flag: typeof hiddenFlags[0];
  index: number;
}

function HiddenFlagCard({ flag, index }: HiddenFlagCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleUnlock = () => {
    if (!showInput) {
      setShowInput(true);
      return;
    }

    if (inputValue.toLowerCase().trim() === flag.answer.toLowerCase()) {
      setIsRevealed(true);
      setError(false);
      setShowInput(false);
    } else {
      setError(true);
      setAttempts(attempts + 1);
      setTimeout(() => setError(false), 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`relative rounded-xl bg-white/[0.035] px-6 py-4 border transition-all ${error ? 'border-red-500/50 animate-shake' : 'border-white/10'
        }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {isRevealed ? (
            <Unlock className="w-4 h-4 text-[#F5C518]" />
          ) : (
            <Lock className="w-4 h-4 text-white/40" />
          )}
          <p className="text-xs uppercase tracking-widest text-white/40">
            {isRevealed ? "Decrypted" : "Encrypted Data"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {attempts > 0 && !isRevealed && (
            <span className="text-[10px] text-red-400/60 font-mono">
              {attempts} failed attempt{attempts > 1 ? 's' : ''}
            </span>
          )}
          <span className="text-[10px] text-white/30 font-mono">
            {isRevealed ? "🚩" : "???"}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isRevealed ? (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            className="space-y-2"
          >
            <p className="text-sm font-mono text-[#F5C518]">
              {flag.text}
            </p>
            <p className="text-xs text-green-400/60 font-mono">
              ✓ Access granted
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            <p className="text-sm font-mono text-white/20 select-none">
              {flag.text.replace(/./g, "█")}
            </p>

            <div className="space-y-2">
              <p className="text-xs text-white/50 font-mono flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                Challenge: {flag.type}
              </p>
              <p className="text-[10px] text-[#F5C518]/60 italic">
                {flag.hint}
              </p>
            </div>

            {showInput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter answer..."
                  className="w-full px-3 py-2 text-xs font-mono bg-black/40 border border-white/20 rounded text-white placeholder:text-white/30 focus:outline-none focus:border-[#F5C518]/50"
                  autoFocus
                />
                {error && (
                  <p className="text-xs text-red-400 font-mono">
                    ✗ Access denied
                  </p>
                )}
              </motion.div>
            )}

            <button
              onClick={handleUnlock}
              className="w-full px-3 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-white/70 rounded border border-white/20 transition-colors"
            >
              {showInput ? "SUBMIT" : "ATTEMPT DECRYPT"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FunFactCarousel() {
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
      className="relative rounded-xl bg-white/[0.035] px-10 py-8 overflow-hidden border border-white/10"
      title="flag{creativity_in_code}"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#F5C518]/10 via-transparent to-transparent opacity-40" />
      <p className="text-xs uppercase tracking-[0.4em] text-[#F5C518] mb-4">
        Fun Fact
      </p>

      <div className="relative h-auto min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem]">
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

export default function About() {
  return (
      <section id="about" className="relative w-full px-6 py-36 bg-black overflow-hidden">
        <MatrixRain />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-6xl mx-auto text-2xl md:text-3xl font-semibold tracking-widest uppercase text-[#F5C518] relative z-10"
        >
          Get to know me a bit?
        </motion.h2>

        <div className="mx-auto max-w-6xl space-y-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-white/[0.025] border border-white/10 overflow-hidden"
            >
              <div className="p-10">
                <p className="text-lg tracking-[0.35em] font-semibold uppercase text-[#F5C518] mb-6">
                  About me and profile scan
                </p>

                <p className="text-base leading-relaxed text-white/80 mb-8">
                  I&apos;m <span className="text-[#F5C518]">Pratham Hegde</span>, a Computer Science
                  student at <span className="text-[#F5C518]">Arizona State University</span>{" "}
                  focused on <span className="text-[#F5C518]">cybersecurity</span>. I enjoy
                  building software just as much as figuring out how it breaks, which means a
                  lot of my time goes into <span className="text-[#F5C518]">projects</span>,{" "}
                  <span className="text-[#F5C518]">hackathons</span>, and{" "}
                  <span className="text-[#F5C518] cursor-help" title="flag{pwn_all_the_things}">pwn.college</span> challenges where things
                  rarely work on the first try.
                </p>

                <VulnerabilityScanner />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl bg-white/[0.025] border border-white/10 p-10"
            >
              <p className="text-lg tracking-[0.35em] font-semibold uppercase text-[#F5C518] mb-6">
                Education highlights
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Background</p>
                  <p className="text-xl font-medium text-white">Software Developer & Pwner</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/90 font-medium mb-3">Barrett Honors College · Arizona State University</p>
                  <ul className="space-y-2.5 text-sm text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518]">•</span>
                      <span>4.0 GPA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518]">•</span>
                      <span>6× Dean&apos;s List</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518]">•</span>
                      <span>Completed undergrad in ~3 years with a planned 4+1 path</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518]">•</span>
                      <span>Currently pursuing a Master&apos;s alongside undergrad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518]">•</span>
                      <span>Interested in pursuing a PhD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518]">•</span>
                      <span>HackHarvard2025 Winner</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl bg-white/[0.025] border border-white/10 p-10"
          >
            <p className="text-lg tracking-[0.35em] font-semibold uppercase text-[#F5C518] mb-8">
              pwn challenges
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hiddenFlags.map((flag, index) => (
                <HiddenFlagCard key={flag.id} flag={flag} index={index} />
              ))}
            </div>

            <div className="mt-8">
              <FunFactCarousel />
            </div>
          </motion.div>
        </div>

        <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
      </section>
  );
}
