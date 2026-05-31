import { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';

const NavBrand = () => {
  return (
    <div className="font-mono font-bold tracking-[0.35em] text-sm md:text-base flex items-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.85)] animate-pulse">
      <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,1)]">AD</span>
    </div>
  );
};

export function Nav() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    setIsMobileMenuOpen(false);

    let tries = 0;
    const maxTries = 20;

    const attempt = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', `#${id}`);
      } else if (tries < maxTries) {
        tries += 1;
        setTimeout(attempt, 100);
      }
    };

    attempt();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-6 px-4 pointer-events-none">
      <motion.nav
        className={cn(
          'pointer-events-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-3 rounded-2xl md:rounded-full transition-all duration-300 backdrop-blur-md border',
          isScrolled
            ? 'w-[94%] sm:w-[90%] md:w-[600px] bg-[var(--bg-color)]/70 border-[var(--accent-color)]/30 shadow-lg shadow-[var(--accent-color)]/10'
            : 'w-[94%] sm:w-full md:w-[800px] bg-white/5 border-white/10'
        )}
      >
        <NavBrand />

        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] sm:text-xs md:text-sm font-mono text-[var(--text-muted)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="whitespace-nowrap rounded-full px-2 py-1 hover:text-[var(--accent-color)] transition-colors"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className={cn('h-0.5 w-5 rounded-full bg-current transition-transform', isMobileMenuOpen && 'translate-y-2 rotate-45')} />
            <span className={cn('h-0.5 w-5 rounded-full bg-current transition-opacity', isMobileMenuOpen && 'opacity-0')} />
            <span className={cn('h-0.5 w-5 rounded-full bg-current transition-transform', isMobileMenuOpen && '-translate-y-2 -rotate-45')} />
          </span>
        </button>
      </motion.nav>

      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0, height: 'auto' } : { opacity: 0, y: -8, height: 0 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-auto mt-3 w-[94%] overflow-hidden rounded-2xl border border-white/10 bg-[var(--bg-color)]/90 backdrop-blur-md shadow-lg md:hidden"
      >
        <div className="flex flex-col p-3 font-mono text-sm text-[var(--text-muted)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-xl px-4 py-3 transition-colors hover:bg-white/5 hover:text-[var(--accent-color)]"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent-color)] origin-left z-50"
        style={{ scaleX }}
      />
    </header>
  );
}
