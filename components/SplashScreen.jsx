'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SplashScreen({ onComplete }) {
  const splashRef = useRef(null);
  const lettersRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(splashRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: () => {
            splashRef.current.style.display = 'none';
            onComplete();
          }
        });
      }
    });

    tl.set(splashRef.current, { display: 'flex' })
      .fromTo(lettersRef.current,
        { y: 80, opacity: 0, rotateX: -90 },
        {
          y: 0, opacity: 1, rotateX: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out'
        }
      )
      .fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: 'power2.inOut' },
        '-=0.2'
      )
      .to(lettersRef.current, {
        letterSpacing: '0.3em',
        duration: 0.4,
        ease: 'power2.out'
      }, '+=0.15')
      .to([lettersRef.current, lineRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.4,
        stagger: 0.04,
        ease: 'power2.in'
      }, '+=0.1');

    return () => tl.kill();
  }, [onComplete]);

  const letters = ['Y', 'E', 'A', 'D'];

  return (
    <div id="splash" ref={splashRef} style={{ display: 'flex' }}>
      <div style={{ textAlign: 'center', perspective: '600px' }}>
        <div style={{ display: 'flex', gap: '0.05em', justifyContent: 'center', marginBottom: '12px' }}>
          {letters.map((letter, i) => (
            <span
              key={i}
              ref={el => lettersRef.current[i] = el}
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(72px, 12vw, 120px)',
                fontWeight: '600',
                color: 'var(--accent)',
                display: 'inline-block',
                lineHeight: 1,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div
          ref={lineRef}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
            transformOrigin: 'left',
          }}
        />
      </div>
    </div>
  );
}
