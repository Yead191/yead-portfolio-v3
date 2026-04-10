'use client';
import { useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, onThemeToggle }) {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = NAV_ITEMS.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
      })).filter(s => s.el);

      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, el } = sections[i];
        if (el.offsetTop <= scrollPos) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      gsap.to(window, {
        scrollTo: { y: el, offsetY: 80 },
        duration: 1,
        ease: 'power3.inOut'
      });
    }
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: scrolled ? '16px' : '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          transition: 'top 0.4s ease',
          width: '90%',
          maxWidth: '680px',
        }}
      >
        <div className="nav-pill" style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 700, color: 'var(--accent)', cursor: 'none', background: 'none', border: 'none' }}
          >
            Y.
          </button>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="hidden-mobile">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 500,
                  background: active === item.id ? 'var(--accent)' : 'transparent',
                  color: active === item.id ? 'var(--bg)' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'none',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={onThemeToggle}
              style={{
                width: '34px', height: '34px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'transparent',
                color: 'var(--text-muted)',
                cursor: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '15px',
                transition: 'all 0.25s ease',
              }}
              title="Toggle theme"
            >
              {theme === 'dark' ? '☀' : '◑'}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: '34px', height: '34px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'transparent',
                color: 'var(--text-muted)',
                cursor: 'none',
                display: 'none',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '16px',
              }}
              className="mobile-menu-btn"
            >
              {menuOpen ? '✕' : '≡'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="nav-pill"
            style={{
              marginTop: '8px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 500,
                  background: active === item.id ? 'var(--card-hover)' : 'transparent',
                  color: active === item.id ? 'var(--accent)' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'none',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
