'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
    );

    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleClose = () => {
    gsap.to(contentRef.current, { opacity: 0, y: 20, scale: 0.97, duration: 0.25, ease: 'power2.in' });
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.3, delay: 0.1, ease: 'power2.in',
      onComplete: onClose
    });
  };

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}>
      <div
        ref={contentRef}
        className="glass"
        style={{
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 40px)',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            width: '36px', height: '36px', borderRadius: '50%',
            border: '1px solid var(--border)', background: 'transparent',
            color: 'var(--text-muted)', cursor: 'none', fontSize: '18px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '10px' }}>
            {project.isTeam ? '🤝 Team Project' : '👤 Solo Project'}
          </span>
          <h3 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, marginBottom: '12px' }}>
            <span className="text-gradient">{project.title}</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>
            {project.longDescription || project.description}
          </p>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

        {/* Features */}
        {project.features && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px', fontFamily: 'JetBrains Mono, monospace' }}>
              Key Features
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>◆</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

        {/* Tech stack */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px', fontFamily: 'JetBrains Mono, monospace' }}>
            Tech Stack
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tech.map((t, i) => (
              <span key={i} className="skill-tag" style={{ fontSize: '12px' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', fontSize: '13px', padding: '10px 24px' }}>
            Live Demo ↗
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', fontSize: '13px', padding: '9px 24px' }}>
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
