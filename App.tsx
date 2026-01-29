import React, { useEffect } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import Capabilities from './components/Sections/Capabilities';
import Technology from './components/Sections/Technology';
import CTA from './components/Sections/CTA';
import Footer from './components/Layout/Footer';
import ScrollReveal from './components/UI/ScrollReveal';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  // Global smooth scroll handler
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      // Check if clicked element is an anchor link with a hash
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        
        const id = anchor.hash.substring(1);
        
        // Handle "Home" or empty hash -> scroll to top
        if (id === '' || id === 'top') {
           window.scrollTo({ top: 0, behavior: 'smooth' });
           return;
        }

        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <LanguageProvider>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-sans">
        <Header />
        <main>
          <Hero />
          <ScrollReveal direction="left">
            <About />
          </ScrollReveal>
          <ScrollReveal direction="up">
            <Services />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <Capabilities />
          </ScrollReveal>
          <ScrollReveal direction="left">
            <Technology />
          </ScrollReveal>
          <ScrollReveal direction="up">
            <CTA />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;