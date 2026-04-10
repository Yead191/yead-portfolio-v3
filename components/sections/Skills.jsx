'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILL_GROUPS = [
  {
    title: 'Expertise',
    icon: '⚡',
    color: '#C8A96E',
    skills: [
      { name: 'HTML5', icon: '🟧' },
      { name: 'CSS3', icon: '🟦' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Tailwind CSS', icon: '🩵' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Shadcn/UI', icon: '⬛' },
      { name: 'Material UI', icon: '🔷' },
      { name: 'Ant Design', icon: '🐜' },
      { name: 'Socket.io', icon: '🔌' },
    ]
  },
  {
    title: 'Comfortable',
    icon: '🛠',
    color: '#8A9EA0',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Node.js', icon: '💚' },
      { name: 'Express.js', icon: '🖥' },
      { name: 'JWT', icon: '🔐' },
      { name: 'TanStack Query', icon: '🔄' },
      { name: 'Fetch API', icon: '📡' },
      { name: 'Redux', icon: '🟣' },
      { name: 'Dotenv', icon: '⚙️' },
    ]
  },
  {
    title: 'Tools',
    icon: '🔧',
    color: '#A09870',
    skills: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Netlify', icon: '🌐' },
      { name: 'Vercel', icon: '▲' },
      { name: 'VS Code', icon: '💙' },
      { name: 'Figma', icon: '🎨' },
    ]
  },
  {
    title: 'Soft Skills',
    icon: '🧠',
    color: '#C890A0',
    skills: [
      { name: 'Deep Learning', icon: '🤖' },
      { name: 'Problem Solving', icon: '🧩' },
      { name: 'Debugging', icon: '🐛' },
      { name: 'Team Collaboration', icon: '🤝' },
      { name: 'Adaptability', icon: '🌊' },
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.skill-group'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.15,
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

  return (
    <section id="skills" ref={sectionRef} style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 6vw, 80px)', background: 'var(--bg2)', position: 'relative', zIndex: 1 }}>
      {/* Background pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'repeating-linear-gradient(0deg, var(--accent) 0, var(--accent) 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, var(--accent) 0, var(--accent) 1px, transparent 0, transparent 60px)', zIndex: 0 }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>02 — Skills</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600 }}>
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', fontSize: '15px', lineHeight: 1.7 }}>
            Technologies I've mastered, tools I rely on daily, and the soft skills that make collaboration seamless.
          </p>
        </div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={gi}
              className="skill-group glass"
              style={{
                borderRadius: '20px',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '20px' }}>{group.icon}</span>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: group.color,
                }}>
                  {group.title}
                </h3>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              {/* Skill tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill, si) => (
                  <span key={si} className="skill-tag">
                    <span style={{ fontSize: '14px' }}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '60px',
                height: '60px',
                background: `radial-gradient(circle at bottom right, ${group.color}15, transparent)`,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
