// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Certifications from './components/Certifications'; // <-- Impor
import Skills from './components/Skills';
import ProjectSection from './components/ProjectSection';
import WorkingOn from './components/WorkingOn';  
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  // Buat satu hook 'useInView' untuk setiap seksi
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  // Gunakan useEffect untuk memantau 'inView' dan update state
  useEffect(() => {
    if (aboutInView) setActiveSection('#about');
    if (skillsInView) setActiveSection('#skills');
    if (projectsInView) setActiveSection('#projects');
    if (contactInView) setActiveSection('#contact');
  }, [aboutInView, skillsInView, projectsInView, contactInView]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Berikan state ke Header */}
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        
        {/* Lampirkan ref ke setiap komponen seksi */}
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Certifications />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <ProjectSection />
        </div>
        <div>
          <WorkingOn />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>

      </main>
      <Footer />
    </div>
  );
}