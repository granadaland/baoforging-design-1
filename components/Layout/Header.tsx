import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const navLinks = [
    { name: t('header.home'), href: '#' },
    { name: t('header.about'), href: '#about' },
    { name: t('header.capabilities'), href: '#capabilities' },
    { name: t('header.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800' 
          : 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-8 w-8 bg-primary rounded text-white font-black text-xl leading-none">
            B
          </div>
          <h2 className="text-navy dark:text-white text-xl font-black tracking-tight uppercase brand-logo-custom">
            Baoforging
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-bold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-bold text-slate-700 dark:text-slate-300"
          >
            <span className={language === 'en' ? 'text-primary' : 'text-slate-400'}>EN</span>
            <span className="text-slate-300">|</span>
            <span className={language === 'id' ? 'text-primary' : 'text-slate-400'}>ID</span>
          </button>

          <a
            href="#contact"
            className="flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-white text-sm font-bold shadow-md hover:bg-red-700 transition-colors"
          >
            {t('header.cta')}
          </a>
        </div>

        {/* Mobile Menu Button & Lang Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold text-slate-700 dark:text-slate-300"
            >
                <span className={language === 'en' ? 'text-primary' : 'text-slate-400'}>EN</span>
                <span className="text-slate-300">|</span>
                <span className={language === 'id' ? 'text-primary' : 'text-slate-400'}>ID</span>
            </button>
            <button
                onClick={toggleMenu}
                className="text-slate-700 dark:text-slate-200 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                aria-label="Toggle menu"
            >
                <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-xl py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-base font-bold transition-colors py-2 border-b border-slate-100 dark:border-slate-800/50 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full h-12 items-center justify-center rounded-lg bg-primary text-white text-base font-bold shadow-md hover:bg-red-700 transition-colors mt-2"
          >
            {t('header.cta')}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;