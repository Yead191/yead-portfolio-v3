'use client';
import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SplashScreen = dynamic(() => import('../components/SplashScreen'), { ssr: false });
const CustomCursor = dynamic(() => import('../components/CustomCursor'), { ssr: false });
const Snowfall = dynamic(() => import('../components/Snowfall'), { ssr: false });
const ScrollProgress = dynamic(() => import('../components/ScrollProgress'), { ssr: false });
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import Publication from '../components/sections/Publication';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('light', saved === 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  };

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />
      <CustomCursor />
      <Snowfall />
      <ScrollProgress />
      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <main style={{ opacity: splashDone ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Publication />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
