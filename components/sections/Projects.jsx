'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectModal from '../ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: 'SpiraLink',
    description: 'Engineering-driven call center solution UI — a modern dashboard for managing calls, agents, and analytics in real time.',
    longDescription: 'SpiraLink is a full-featured call center management platform built with performance and real-time communication at its core. The frontend delivers a sleek dashboard experience with live call tracking, agent management, and analytics visualization. Built with Next.js and TypeScript for type safety and scalability.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Socket.io', 'Swiper', 'AOS'],
    live: 'https://spiralink-frontend.vercel.app/',
    github: 'https://github.com/Yead191/spiralink-new',
    isTeam: false,
    color: '#4A9EFF',
    features: [
      'Real-time call tracking via Socket.io with live agent status updates',
      'Responsive dashboard with analytics charts and performance metrics',
      'Agent management panel with role-based access control',
      'Animated UI components using AOS and Swiper for smooth UX',
      'TypeScript throughout for robust type safety and maintainability',
    ]
  },
  {
    id: 2,
    title: 'Kashem Optical',
    description: 'A full-featured lens selling platform with advanced filtering, cart management, and admin dashboard for optical products.',
    longDescription: 'Kashem Optical is a production-ready e-commerce solution for an optical retail business. It features advanced product filtering, user authentication via Firebase, order management, and rich data visualization using Recharts. Built with the latest React 19 and a modern component library stack.',
    tech: ['React 19', 'Tailwind CSS', 'ShadCN UI', 'DaisyUI', 'Firebase', 'Axios', 'React Query', 'Recharts'],
    live: 'https://kashem-optical.vercel.app/',
    github: 'https://github.com/Yead191/kashem-optical-client',
    isTeam: false,
    color: '#C8A96E',
    features: [
      'Advanced product filtering by lens type, brand, price range, and more',
      'Firebase authentication with Google sign-in and email/password',
      'Admin dashboard with sales analytics powered by Recharts',
      'Cart and wishlist management with persistent state via React Query',
      'Fully responsive design with dark mode support using DaisyUI',
    ]
  },
  {
    id: 3,
    title: 'MUI Kit',
    description: 'Open-source component library extending Material UI with 100+ production-ready, customizable components for Next.js.',
    longDescription: 'MUI Kit is an open-source component library built on top of Material UI, offering an extended set of production-ready components. The project features a live playground for component customization, drag-and-drop layout tools, and GSAP-powered animations. It serves as a community resource for Next.js + MUI developers.',
    tech: ['Next.js', 'TypeScript', 'Material UI', 'Zustand', 'GSAP', 'DnD Kit', 'Storybook'],
    live: 'https://www.muikit.com/',
    github: 'https://github.com/codemine24/mui-kit',
    isTeam: true,
    color: '#2979FF',
    features: [
      '100+ reusable MUI-based components with live code playground',
      'Drag-and-drop layout builder powered by DnD Kit',
      'GSAP animations integrated into component transitions',
      'Zustand for global theme customization and playground state',
      'Documented with Storybook for component discovery and testing',
    ]
  },
  {
    id: 4,
    title: 'Care Matrix',
    description: 'A comprehensive hospital management system with patient records, appointments, billing, and real-time notifications.',
    longDescription: 'Care Matrix is a hospital management system developed collaboratively, featuring complete patient lifecycle management from appointment booking to billing. It integrates Stripe for payments, Redux Toolkit for complex state management, and Firebase for real-time notifications.',
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Stripe', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    live: 'https://care-matrix.vercel.app/',
    github: 'https://github.com/ssmahim01/Care-Matrix-With-Dev-Sync',
    isTeam: true,
    color: '#4CAF50',
    features: [
      'Patient registration, appointment booking, and history tracking',
      'Stripe payment integration for billing and invoicing',
      'Doctor and staff management with schedule management',
      'Real-time notifications and alerts using Firebase',
      'Analytics dashboard for hospital KPIs and performance metrics',
    ]
  },
];

function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 30 },
      {
        opacity: 1, x: 0, y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          once: true,
        }
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="glass glass-hover"
      style={{
        borderRadius: '24px',
        padding: 'clamp(24px, 3vw, 36px)',
        cursor: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={() => onOpen(project)}
    >
      {/* Top accent bar */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px', background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`, opacity: 0.6 }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'start' }}>
        <div style={{ flex: 1 }}>
          {/* Meta */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: project.color, fontFamily: 'JetBrains Mono, monospace' }}>
              {project.isTeam ? '🤝 Team' : '👤 Solo'}
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--border)', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
              Project 0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display" style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, marginBottom: '12px', color: 'var(--text)' }}>
            {project.title}
          </h3>

          {/* Description */}
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.75, marginBottom: '20px', maxWidth: '560px' }}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
            {project.tech.slice(0, 5).map((t, i) => (
              <span key={i} style={{
                padding: '4px 10px', borderRadius: '100px',
                fontSize: '11px', fontFamily: 'JetBrains Mono, monospace',
                border: `1px solid ${project.color}30`,
                color: project.color,
                background: `${project.color}08`,
              }}>
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span style={{ padding: '4px 10px', borderRadius: '100px', fontSize: '11px', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                +{project.tech.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Number */}
        <div className="font-display" style={{ fontSize: '80px', fontWeight: 700, lineHeight: 1, opacity: 0.06, color: project.color, userSelect: 'none', flexShrink: 0 }}>
          0{index + 1}
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 18px', borderRadius: '100px',
            background: project.color, color: '#0A0807',
            fontSize: '12px', fontWeight: 600, textDecoration: 'none',
            transition: 'all 0.25s', cursor: 'none',
            letterSpacing: '0.03em',
          }}
        >
          Live ↗
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '7px 18px', borderRadius: '100px',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)', fontSize: '12px',
            textDecoration: 'none', transition: 'all 0.25s', cursor: 'none',
          }}
        >
          GitHub →
        </a>
        <button
          style={{
            marginLeft: 'auto',
            padding: '7px 18px', borderRadius: '100px',
            border: `1px solid ${project.color}40`,
            color: project.color, background: 'transparent',
            fontSize: '12px', cursor: 'none',
            transition: 'all 0.25s',
          }}
        >
          Details →
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const [modalProject, setModalProject] = useState(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelector('.projects-header'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true }
        }
      );

      // Animate timeline progress line
      if (progressRef.current) {
        gsap.fromTo(progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="projects" ref={sectionRef} style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 6vw, 80px)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Section header */}
          <div className="projects-header" style={{ marginBottom: '64px', textAlign: 'center', opacity: 0 }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>03 — Work</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600 }}>
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '16px', maxWidth: '480px', margin: '16px auto 0', fontSize: '15px', lineHeight: 1.7 }}>
              A curated showcase of my best work — click any project for the full story.
            </p>
          </div>

          {/* Timeline + Cards */}
          <div style={{ position: 'relative' }}>
            {/* Vertical timeline line */}
            <div style={{ position: 'absolute', left: '-32px', top: 0, bottom: 0, width: '1px', background: 'var(--border)', display: 'none' }} className="timeline-track" />
            <div
              ref={progressRef}
              style={{
                position: 'absolute', left: '-32px', top: 0, bottom: 0, width: '1px',
                background: 'linear-gradient(to bottom, var(--accent), transparent)',
                transformOrigin: 'top', display: 'none',
              }}
              className="timeline-progress"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {PROJECTS.map((project, i) => (
                <div key={project.id} style={{ position: 'relative' }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute', left: '-38px', top: '36px',
                    width: '12px', height: '12px', borderRadius: '50%',
                    background: project.color, border: '2px solid var(--bg)',
                    boxShadow: `0 0 10px ${project.color}60`,
                    display: 'none',
                  }} className="timeline-dot" />
                  <ProjectCard project={project} index={i} onOpen={setModalProject} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .timeline-track, .timeline-progress, .timeline-dot { display: block !important; }
        }
      `}</style>
    </>
  );
}
