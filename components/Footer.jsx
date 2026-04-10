'use client';

export default function Footer() {
  return (
    <footer style={{
      padding: '40px clamp(20px, 6vw, 80px)',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="font-display" style={{ fontSize: '28px', fontWeight: 700, color: 'var(--accent)' }}>Y.</span>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
            Asadur Rahaman Yead — Frontend Developer
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', url: 'https://github.com/Yead191' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/md-asadur-rahaman-yead/' },
            { label: 'Email', url: 'mailto:yead191@gmail.com' },
          ].map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'none' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} — Crafted with ♥ & Next.js
        </p>
      </div>
    </footer>
  );
}
