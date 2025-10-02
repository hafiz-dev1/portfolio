// src/app/page.tsx
"use client";

import { useState, useEffect, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components below the fold for better initial load performance
const AboutMe = dynamic(() => import('./components/AboutMe'));
const Experience = dynamic(() => import('./components/Experience'));
const Certifications = dynamic(() => import('./components/Certifications'));
const Skills = dynamic(() => import('./components/Skills'));
const ProjectSection = dynamic(() => import('./components/ProjectSection'));
const WorkingOn = dynamic(() => import('./components/WorkingOn'));
const Contact = dynamic(() => import('./components/Contact'));
const Footer = dynamic(() => import('./components/Footer'));

function Home() {
  const [activeSection, setActiveSection] = useState('#');

  // Optimize threshold and rootMargin for better performance
  const observerOptions = { threshold: 0.3, triggerOnce: false };
  
  const { ref: heroRef, inView: heroInView } = useInView(observerOptions);
  const { ref: aboutRef, inView: aboutInView } = useInView(observerOptions);
  const { ref: skillsRef, inView: skillsInView } = useInView(observerOptions);
  const { ref: projectsRef, inView: projectsInView } = useInView(observerOptions);
  const { ref: contactRef, inView: contactInView } = useInView(observerOptions);

  // Memoize the effect to prevent unnecessary re-calculations
  useEffect(() => {
    if (heroInView) setActiveSection('#');
    else if (aboutInView) setActiveSection('#about');
    else if (skillsInView) setActiveSection('#skills');
    else if (projectsInView) setActiveSection('#projects');
    else if (contactInView) setActiveSection('#contact');
  }, [heroInView, aboutInView, skillsInView, projectsInView, contactInView]);

  return (
    <>
      <Header activeSection={activeSection} />
      
      <main className="max-w-7xl mx-auto">
        <div ref={heroRef}>
          <Hero />
        </div>
        
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        
        <Experience />
        
        <Certifications />
        
        <div ref={skillsRef}>
          <Skills />
        </div>
        
        <div ref={projectsRef}>
          <ProjectSection />
        </div>
        
        <WorkingOn />
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      
      <Footer />
    </>
  );
}

export default memo(Home);