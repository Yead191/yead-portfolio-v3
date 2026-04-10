'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Daffodil International University',
    period: '2020 — 2024',
    location: 'Dhaka, Bangladesh',
    icon: '🎓',
    color: '#C8A96E',
    details: ['CGPA: Completed with distinction', 'Published IEEE research paper', 'Active in CS club and hackathons'],
  },
  {
    degree: 'Higher Secondary Certificate (Science)',
    school: 'Ideal College, Dhanmondi',
    period: '2017 — 2019',
    location: 'Dhaka, Bangladesh',
    icon: '📚',
    color: '#8A9EA0',
    details: ['Science stream with focus on Mathematics & Physics', 'Foundation for analytical problem-solving'],
  },
];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.edu-card'),
        { opacity: 0, y: 50, x: -30 },
        {
          opacity: 1, y: 0, x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            once: true,
          }
        }
      );

      gsap.fromTo(
        sectionRef.current.querySelector('.edu-line'),
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            once: true,
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 6vw, 80px)', background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>04 — Background</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600 }}>
            Education <span className="text-gradient">&</span> Formation
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>
          {/* Left quote */}
          <div style={{ position: 'relative' }}>
            <div className="glass" style={{ borderRadius: '20px', padding: '32px', position: 'sticky', top: '120px' }}>
              <div className="font-display" style={{ fontSize: '72px', lineHeight: 0.8, color: 'var(--accent)', opacity: 0.3, marginBottom: '16px' }}>"</div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
                Education is not filling a bucket, but lighting a fire.
              </p>
              <span style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                — W.B. Yeats
              </span>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '36px' }}>
            {/* Timeline track */}
            <div style={{ position: 'absolute', left: 0, top: '12px', bottom: '12px', width: '1px', background: 'var(--border)' }} />
            <div
              className="edu-line"
              style={{
                position: 'absolute', left: 0, top: '12px', bottom: '12px', width: '1px',
                background: 'linear-gradient(to bottom, var(--accent), transparent)',
                transformOrigin: 'top',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {EDUCATION.map((edu, i) => (
                <div key={i} className="edu-card" style={{ position: 'relative' }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute', left: '-43px', top: '20px',
                    width: '14px', height: '14px', borderRadius: '50%',
                    background: edu.color,
                    border: '3px solid var(--bg2)',
                    boxShadow: `0 0 15px ${edu.color}60`,
                  }} />

                  <div className="glass glass-hover" style={{ borderRadius: '20px', padding: '28px', position: 'relative', overflow: 'hidden' }}>
                    {/* Top color bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${edu.color}, transparent)` }} />

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                      <span style={{ fontSize: '28px', flexShrink: 0 }}>{edu.icon}</span>
                      <div style={{ flex: 1 }}>
                        <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px', lineHeight: 1.2 }}>
                          {edu.degree}
                        </h3>
                        <p style={{ color: edu.color, fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>
                          {edu.school}
                        </p>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>{edu.period}</span>
                          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>📍 {edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ height: '1px', background: 'var(--border)', marginBottom: '16px' }} />

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {edu.details.map((d, di) => (
                        <li key={di} style={{ display: 'flex', gap: '10px', color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.5 }}>
                          <span style={{ color: edu.color, flexShrink: 0 }}>▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
