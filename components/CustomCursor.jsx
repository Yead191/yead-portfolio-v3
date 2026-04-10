'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      gsap.set(cursor, { x: pos.current.x, y: pos.current.y });
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);
      gsap.set(ring, { x: ringPos.current.x, y: ringPos.current.y });
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove);

    const addHover = () => {
      cursor.classList.add('cursor-hover');
      ring.classList.add('cursor-hover');
    };
    const removeHover = () => {
      cursor.classList.remove('cursor-hover');
      ring.classList.remove('cursor-hover');
    };

    const handleOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const hasCursor = e.target.closest('a, button, [data-cursor]');
      if (hasCursor) addHover();
    };
    const handleOut = (e) => {
      const hasCursor = e.target.closest('a, button, [data-cursor]');
      if (hasCursor) removeHover();
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
