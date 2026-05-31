import React, { useEffect } from 'react';
import { useScrollSection } from '../hooks/useScrollSection';

export function WorldWrapper({ children }) {
  // Use scroll section to trigger body class updates
  useScrollSection(['hero', 'about', 'skills', 'projects', 'certifications', 'contact']);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onPointerOver = (e) => {
      const el = e.target;
      if (el.closest && el.closest('a,button,input,textarea,select,summary,[role="button"]')) {
        cursor.classList.add('cursor-active');
      }
    };

    const onPointerOut = (e) => {
      const el = e.target;
      if (el.closest && el.closest('a,button,input,textarea,select,summary,[role="button"]')) {
        cursor.classList.remove('cursor-active');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('pointerover', onPointerOver);
    window.addEventListener('pointerout', onPointerOut);

    const onPointerDown = () => document.body.classList.add('hide-native-cursor');
    const onPointerUp = () => document.body.classList.remove('hide-native-cursor');

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('pointerover', onPointerOver);
      window.removeEventListener('pointerout', onPointerOut);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Global custom cursor container if needed */}
      <div className="custom-cursor hidden md:flex" id="custom-cursor"></div>
      {children}
    </div>
  );
}
