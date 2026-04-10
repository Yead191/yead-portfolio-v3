'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Publication() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 68%',
            once: true,
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="publication"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 6vw, 80px)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>05 — Research</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600 }}>
            Published <span className="text-gradient">Research</span>
          </h2>
        </div>

        {/* Publication card */}
        <div
          ref={cardRef}
          className="glass glass-hover"
          style={{
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '860px',
          }}
        >
          {/* IEEE badge glow */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '300px', height: '300px',
            background: 'radial-gradient(circle at top right, rgba(0, 115, 207, 0.08), transparent)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'absolute', top: 0, left: '5%', right: '5%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,115,207,0.4), transparent)' }} />

          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* IEEE Logo placeholder */}
            <div style={{
              width: '60px', height: '60px', borderRadius: '14px',
              background: 'rgba(0, 115, 207, 0.12)',
              border: '1px solid rgba(0,115,207,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              fontSize: '24px',
            }}>
              📄
            </div>

            <div style={{ flex: 1 }}>
              {/* Publisher badge */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px', borderRadius: '100px',
                  background: 'rgba(0,115,207,0.12)',
                  border: '1px solid rgba(0,115,207,0.25)',
                  color: '#4A9EFF',
                  fontSize: '11px', fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>
                  IEEE Xplore
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>2024</span>
                <span style={{
                  padding: '4px 12px', borderRadius: '100px',
                  background: 'rgba(200,169,110,0.1)',
                  border: '1px solid var(--border)',
                  color: 'var(--accent)',
                  fontSize: '11px', fontFamily: 'JetBrains Mono, monospace',
                }}>
                  Deep Learning
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display" style={{
                fontSize: 'clamp(20px, 2.8vw, 28px)',
                fontWeight: 700,
                lineHeight: 1.3,
                color: 'var(--text)',
                marginBottom: '16px',
              }}>
                Deep Learning-Based Classification of Sugarcane Leaf Disease
              </h3>

              {/* Summary */}
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.75, marginBottom: '24px', maxWidth: '600px' }}>
                Developed a CNN-based classification model for detecting and categorizing sugarcane leaf diseases from visual imagery. The study demonstrates high accuracy in disease identification, potentially aiding agricultural management and early intervention in crop health monitoring.
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                {['CNN', 'Image Classification', 'Agricultural AI', 'TensorFlow', 'Computer Vision'].map(tag => (
                  <span key={tag} className="skill-tag" style={{ fontSize: '11px', padding: '4px 10px' }}>{tag}</span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://ieeexplore.ieee.org/document/10534551"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 24px', borderRadius: '100px',
                  background: 'rgba(0,115,207,0.12)',
                  border: '1px solid rgba(0,115,207,0.3)',
                  color: '#4A9EFF', textDecoration: 'none',
                  fontSize: '13px', fontWeight: 500,
                  transition: 'all 0.25s ease', cursor: 'none',
                }}
              >
                Read on IEEE Xplore ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
