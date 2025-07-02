import React, { useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Hero from './components/Hero';

import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    let targetRef;
    switch (section.toLowerCase()) {
      case 'about':
        targetRef = aboutRef;
        break;
      case 'resume':
        targetRef = resumeRef;
        break;
      case 'projects':
        targetRef = projectsRef;
        break;
      case 'certifications':
        targetRef = certificationsRef;
        break;
      case 'contact':
        targetRef = contactRef;
        break;
      default:
        return;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-inter">
      <Header onMenuClick={scrollToSection} />

      <main>
        <Hero />

        <div ref={aboutRef}>
          <About />
        </div>

        {/* <div ref={resumeRef}>
          <Resume />
        </div> */}

        <div ref={projectsRef}>
          <Projects />
        </div>

        <div ref={certificationsRef}>
          <Certifications />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
