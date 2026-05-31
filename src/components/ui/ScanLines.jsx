import React from 'react';
import { cn } from '../../lib/utils';

export function ScanLines({ className }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none scanlines z-50 mix-blend-overlay opacity-50", className)} />
  );
}
