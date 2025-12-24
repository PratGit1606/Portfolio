"use client";

import { useEffect, useState } from "react";

export default function CompileName() {
  const final = "Hi, I'm Pratham Hegde";
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      setText(
        final
          .split("")
          .map((char, i) =>
            i < frame
              ? char
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );
      frame++;
      if (frame > final.length) {
        clearInterval(interval);
        setText(final);
        setDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-6xl md:text-7xl font-mono text-white mb-12">
      {text}
      {done && <span className="animate-pulse text-[#F5C518]">▍</span>}
    </p>
  );
}
