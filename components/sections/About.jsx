'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '4+', label: 'Years Learning' },
  { value: '10+', label: 'Projects Built' },
  { value: '1', label: 'IEEE Publication' },
  { value: '∞', label: 'Cups of Coffee' },
];

export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.reveal-about'),
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 6vw, 80px)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div className="reveal-about" style={{ marginBottom: '64px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span className="section-label">01</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, whiteSpace: 'nowrap' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          {/* Text content */}
          <div ref={contentRef}>
            <p className="reveal-about" style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: '20px' }}>
              I'm a frontend developer with a deep-rooted passion for building digital experiences that are both beautiful and functional. My journey started with a curiosity for how things work on a screen — and turned into an obsession with crafting them flawlessly.
            </p>
            <p className="reveal-about" style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: '20px' }}>
              I care about the details — micro-interactions, accessible design, responsive layouts, and code that future-me won't curse at. Every project I touch, I try to leave better than I found it.
            </p>
            <p className="reveal-about" style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: '36px' }}>
              Outside of writing code, I've contributed to academic research on deep learning and disease classification — proof that my curiosity doesn't stop at the browser. I believe in continuous learning, adapting fast, and shipping things that matter.
            </p>

            {/* Highlight pills */}
            <div className="reveal-about" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Clean UI/UX', 'React Ecosystem', 'Performance First', 'Pixel Perfectionist'].map(tag => (
                <span key={tag} style={{
                  padding: '6px 16px', borderRadius: '100px',
                  border: '1px solid var(--border)',
                  color: 'var(--accent)', fontSize: '13px',
                  background: 'var(--card)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats + visual */}
          <div>
            {/* Visual card */}
            <div className="reveal-about glass" style={{ borderRadius: '24px', padding: '40px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', background: 'radial-gradient(circle, var(--accent-glow), transparent)', borderRadius: '50%' }} />
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '80px', fontWeight: 700, lineHeight: 1, marginBottom: '12px' }}>
                <span className="text-gradient">4+</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Years of learning, building, and shipping modern web experiences with React and Next.js ecosystems.
              </p>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {STATS.slice(1).map((stat, i) => (
                <div key={i} className="reveal-about glass" style={{ borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                  <div className="font-display text-gradient" style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px', letterSpacing: '0.05em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
