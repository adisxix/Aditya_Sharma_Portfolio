import React from 'react';
import { cn } from '../../lib/utils';

export function GlowCard({ children, className }) {
  return (
    <div className={cn("relative group rounded-xl bg-white/5 border border-white/10 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
      <div className="relative z-10 p-6 h-full">
        {children}
      </div>
    </div>
  );
}
