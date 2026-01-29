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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-10 w-10 bg-primary rounded-sm text-white font-black text-2xl shadow-md">
            B
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-xl font-black tracking-tight uppercase leading-none">
              Baoforging
            </h2>
            <span className="text-slate-400 text-[10px] tracking-widest uppercase font-bold">Industrial Indonesia</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-primary text-sm font-medium transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-6 border-l border-white/10 pl-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs font-bold text-white/90 hover:text-white transition-colors"
            >
              <span className={language === 'en' ? 'text-primary' : ''}>EN</span>
              <span className="text-white/30">|</span>
              <span className={language === 'id' ? 'text-primary' : ''}>ID</span>
            </button>

            <a
              href="#contact"
              className="flex h-10 items-center justify-center rounded bg-primary px-6 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-red-700 transition-colors"
            >
              {t('header.cta')}
            </a>
          </div>
        </div>

        {/* Mobile Menu Button & Lang Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-xs font-bold text-white"
            >
                <span className={language === 'en' ? 'text-primary' : 'text-slate-400'}>EN</span>
                <span className="text-slate-500">|</span>
                <span className={language === 'id' ? 'text-primary' : 'text-slate-400'}>ID</span>
            </button>
            <button
                onClick={toggleMenu}
                className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-t border-slate-800 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-primary text-sm font-bold uppercase tracking-wide py-2 border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full h-12 items-center justify-center rounded bg-primary text-white text-sm font-bold uppercase tracking-widest shadow-md hover:bg-red-700 transition-colors mt-2"
          >
            {t('header.cta')}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;