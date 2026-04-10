'use client';
import { useEffect, useRef } from 'react';

const FLAKE_COUNT = 40;

export default function Snowfall() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const flakes = Array.from({ length: FLAKE_COUNT }, (_, i) => {
      const el = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 20;
      const left = Math.random() * 100;
      const drift = (Math.random() - 0.5) * 80;

      el.className = 'snowflake';
      el.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
        --drift: ${drift}px;
        opacity: ${Math.random() * 0.4 + 0.1};
      `;
      return el;
    });

    flakes.forEach(f => container.appendChild(f));
    return () => flakes.forEach(f => f.remove());
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}
      aria-hidden="true"
    />
  );
}
