import React from 'react';
import { cn } from '../../lib/utils';

export function ShimmerButton({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "relative inline-flex overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 focus:ring-offset-[var(--bg-color)]",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[shimmer_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--bg-color)_0%,var(--accent-color)_50%,var(--bg-color)_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-[var(--bg-color)] px-6 py-3 text-sm font-medium text-[var(--text-color)] backdrop-blur-3xl transition-colors hover:bg-[var(--bg-color)]/80">
        {children}
      </span>
    </button>
  );
}
