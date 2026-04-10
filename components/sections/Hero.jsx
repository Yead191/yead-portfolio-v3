'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const sectionRef = useRef(null);
  const greetRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const decorRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) gsap.to(window, { scrollTo: { y: el, offsetY: 80 }, duration: 1, ease: 'power3.inOut' });
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(greetRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo(nameRef.current,
      { opacity: 0, y: 50, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.2'
    )
    .fromTo(roleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(ctaRef.current.children,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo(decorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '-=0.5'
    );

    return () => tl.kill();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 24px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Background orb */}
      <div
        ref={decorRef}
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: '120px', right: '10%', opacity: 0.15, zIndex: 0 }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="99" stroke="var(--accent)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" stroke="var(--accent)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="var(--accent)" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="var(--accent)" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="var(--accent)" strokeWidth="0.5" />
        </svg>
      </div>

      <div style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Greeting */}
        <div ref={greetRef} style={{ opacity: 0, marginBottom: '20px' }}>
          <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '30px', height: '1px', background: 'var(--accent)', display: 'inline-block' }} />
            Hello, I'm
            <span style={{ width: '30px', height: '1px', background: 'var(--accent)', display: 'inline-block' }} />
          </span>
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display"
          style={{
            opacity: 0,
            fontSize: 'clamp(52px, 8vw, 100px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          <span className="text-gradient">Asadur Rahaman</span>
          <br />
          <span style={{ color: 'var(--text)' }}>Yead</span>
        </h1>

        {/* Role */}
        <div ref={roleRef} style={{ opacity: 0, marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ width: '40px', height: '1px', background: 'var(--border)' }} />
          <span style={{ fontSize: '18px', fontWeight: 400, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '13px' }}>
            Frontend Developer
          </span>
          <span style={{ width: '40px', height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          style={{
            opacity: 0,
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'var(--text-muted)',
            maxWidth: '560px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Crafting pixel-perfect interfaces that feel as good as they look —
          <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}> where code meets artistry.</em>
        </p>

        {/* CTA */}
        <div ref={ctaRef} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            <span>View Projects</span>
            <span>→</span>
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            <span>Contact Me</span>
          </button>
          <a
            href="https://drive.google.com/file/d/1etPrwQe0BDP2SIVR6mZ6mvebZOX3v4W6/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ textDecoration: 'none' }}
          >
            <span>Resume</span>
            <span>↗</span>
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: '80px', opacity: 0.4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll</span>
          <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'pulse 2s ease-in-out infinite' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  );
}
