import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    { name: t('header.services'), href: '#services' },
    { name: t('header.capabilities'), href: '#capabilities' },
    { name: t('header.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-secondary py-3 shadow-xl' : 'bg-secondary/95 backdrop-blur-sm py-5 border-b border-white/10'
      }`}
    >
      <div className="flex items-center justify-between px-6 max-w-[1400px] mx-auto w-full">
        {/* Logo Section - Updated to Solid Red Box */}
        <div className="flex items-center gap-4">
           {/* Industrial Logo Mark */}
           <div className="h-12 w-12 bg-primary flex items-center justify-center shadow-lg">
               <span className="text-white font-black text-2xl tracking-tighter">BF</span>
           </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-white text-2xl font-black tracking-tighter uppercase leading-none">
              Baoforging
            </h2>
            <div className="flex items-center gap-2 mt-1">
                 <div className="h-[2px] w-6 bg-primary"></div>
                 <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold">Industrial Indonesia</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center ml-auto mr-12">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-bold uppercase tracking-wider transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
        
        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4 pl-6 border-l border-white/10">
            {/* Language Switch - Boxed Style */}
             <button 
                onClick={toggleLanguage} 
                className="text-xs font-bold text-white hover:text-primary uppercase tracking-wider border border-white/20 px-3 py-2 hover:border-primary transition-colors"
             >
                {language}
             </button>

            {/* CTA - Solid Red */}
            <a
              href="#contact"
              className="flex h-10 items-center justify-center bg-primary px-6 text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-primary/20"
            >
              {t('header.cta')}
            </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
            <button
                onClick={toggleMenu}
                className="text-white p-2 hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
            >
                <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-secondary border-t border-white/10 shadow-xl py-0 flex flex-col animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:bg-primary/20 hover:text-primary text-sm font-bold uppercase tracking-wide py-4 px-6 border-b border-white/5 last:border-0 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
           <div className="flex items-center justify-between p-6 bg-black/20">
                 <button onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }} className="text-xs font-bold text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors">
                    LANG: {language === 'en' ? 'EN' : 'ID'}
                 </button>
                 <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
                >
                    {t('header.cta')}
                </a>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;