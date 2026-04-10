'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  {
    name: 'GitHub',
    handle: '@Yead191',
    url: 'https://github.com/Yead191',
    icon: '⬡',
    color: '#6E7681',
    description: 'View my open source work'
  },
  {
    name: 'LinkedIn',
    handle: 'md-asadur-rahaman-yead',
    url: 'https://www.linkedin.com/in/md-asadur-rahaman-yead/',
    icon: '◈',
    color: '#0A66C2',
    description: 'Connect professionally'
  },
  {
    name: 'Email',
    handle: 'yead191@gmail.com',
    url: 'mailto:yead191@gmail.com',
    icon: '◉',
    color: '#C8A96E',
    description: 'Send me a message'
  },
  {
    name: 'Resume',
    handle: 'Download CV',
    url: 'https://drive.google.com/file/d/1etPrwQe0BDP2SIVR6mZ6mvebZOX3v4W6/view',
    icon: '◫',
    color: '#4CAF50',
    description: 'View my full resume'
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.contact-reveal'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to('.contact-form', { scale: 0.99, duration: 0.1, yoyo: true, repeat: 1 });
    setTimeout(() => setSubmitted(true), 200);
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: `1px solid ${focused === field ? 'var(--accent)' : 'var(--border)'}`,
    background: 'var(--card)',
    color: 'var(--text)',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxShadow: focused === field ? '0 0 20px var(--accent-glow)' : 'none',
    cursor: 'none',
    resize: field === 'message' ? 'vertical' : 'none',
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 6vw, 80px)',
        background: 'var(--bg2)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background orb */}
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse at bottom, rgba(200,169,110,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div className="contact-reveal" style={{ marginBottom: '64px', textAlign: 'center' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>06 — Connect</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, marginBottom: '16px' }}>
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Contact Form */}
          <div className="contact-reveal contact-form">
            <div className="glass" style={{ borderRadius: '24px', padding: 'clamp(24px, 3vw, 36px)' }}>
              <h3 className="font-display" style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', color: 'var(--text)' }}>
                Send a Message
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✦</div>
                  <h4 className="font-display" style={{ fontSize: '24px', color: 'var(--accent)', marginBottom: '12px' }}>
                    Message Sent!
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="btn-outline"
                    style={{ marginTop: '20px' }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'JetBrains Mono, monospace' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('name')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'JetBrains Mono, monospace' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('email')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', fontFamily: 'JetBrains Mono, monospace' }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('message')}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                    Send Message ✦
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Social links */}
          <div className="contact-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.05em' }}>
              Or find me across the web ↓
            </p>

            {SOCIALS.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover"
                style={{
                  borderRadius: '16px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  cursor: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: `${social.color}15`,
                  border: `1px solid ${social.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', color: social.color, flexShrink: 0,
                }}>
                  {social.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>
                    {social.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {social.description}
                  </div>
                </div>
                <span style={{ color: social.color, fontSize: '18px' }}>↗</span>
              </a>
            ))}

            {/* Availability status */}
            <div className="glass" style={{ borderRadius: '16px', padding: '20px 24px', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ position: 'relative', width: '10px', height: '10px', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#4CAF50', animation: 'ping 2s ease-in-out infinite' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4CAF50', position: 'relative' }} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#4CAF50' }}>Available for work</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Open to full-time, freelance, and collaborations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
