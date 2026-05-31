import { useState, useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';

const TYPEWRITER_TEXTS = ['Full Stack Developer', 'Software Engineer'];
const HERO_PARTICLES = Array.from({ length: 50 }, (_, index) => ({
  width: 1 + (index % 3),
  height: 1 + ((index * 5) % 3),
  top: (index * 13) % 100,
  left: (index * 17) % 100,
  duration: 10 + ((index * 7) % 10),
  opacity: 0.2 + ((index * 11) % 60) / 100,
}));

const Typewriter = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let timer;
    const fullText = TYPEWRITER_TEXTS[textIndex];

    if (index < fullText.length) {
      timer = setTimeout(() => setIndex(index + 1), 90);
    } else if (index === fullText.length) {
      timer = setTimeout(() => {
        setIndex(0);
        setTextIndex((currentIndex) => (currentIndex + 1) % TYPEWRITER_TEXTS.length);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [index, textIndex]);

  return (
    <span className="font-mono text-base sm:text-xl md:text-2xl text-[var(--text-muted)] min-h-[32px] inline-block">
      {TYPEWRITER_TEXTS[textIndex].substring(0, index)}<span className="animate-pulse text-[var(--accent-color)]">_</span>
    </span>
  );
};

const Greeting = () => {
  const fullText = 'Hey there, nice to meet you! I am';
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let timer;
    if (index < fullText.length) {
      timer = setTimeout(() => setIndex(index + 1), 60);
    } else if (index === fullText.length) {
      timer = setTimeout(() => setIndex(0), 2000);
    }
    return () => clearTimeout(timer);
  }, [index, fullText.length]);

  return (
    <div className="font-mono text-sm text-[var(--accent-color)] mb-6 opacity-80 min-h-[20px]">
      {fullText.substring(0, index)}<span className="animate-pulse text-[var(--accent-color)]">_</span>
    </div>
  );
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle Background - basic implementation via css keyframes or absolute divs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        {HERO_PARTICLES.map((particle, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `slideDown ${particle.duration}s linear infinite`,
              opacity: particle.opacity
            }}
          />
        ))}
      </div>

      <div className="z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mt-12 md:mt-16">
        <Greeting />

        <h1 className="text-7xl sm:text-8xl md:text-8xl lg:text-[110px] font-bold leading-none tracking-tighter transition-all duration-300">
          ADITYA
        </h1>
        <h1 className="text-7xl sm:text-8xl md:text-8xl lg:text-[110px] font-bold leading-none tracking-tighter text-stroke-accent mt-2">
          SHARMA
        </h1>

        <div className="mt-8 mb-12">
          <Typewriter />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            type="button"
            className="shrink-0 inline-flex items-center justify-center rounded-md px-6 py-3 bg-white/5 text-white font-mono uppercase tracking-wider border border-transparent transition-all duration-300 hover:border-white"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>

          <button
            type="button"
            className="shrink-0 px-6 py-3 rounded-md border border-white text-white font-mono uppercase tracking-wider text-sm inline-flex items-center justify-center transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.75)] hover:bg-white/5"
            onClick={() => {
              window.location.href = 'https://drive.google.com/file/d/1RKeuA1nc7M9w2P0fhQA29Q0U2_lwK3j2/view?usp=sharing';
            }}
          >
            <Download className="mr-2 w-4 h-4" />
            Download Resume
          </button>
        </div>
      </div>

      {/* Scroll indicator removed per request */}
    </section>
  );
}
