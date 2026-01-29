import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// --- KONFIGURASI GAMBAR SLIDER HERO ---
const HERO_SLIDER_IMAGES = [
  {
    src: "https://www.walkson.com/uploads/image/20241217/13/Forged-Shaft_1734414430.webp",
    alt: "Factory Floor"
  },
  {
    src: "https://specialpipingmaterials.com/wp-content/uploads/2022/07/SPM-content-4.png",
    alt: "Welding Sparks"
  },
  {
    src: "https://www.wasatchsteel.com/wp-content/uploads/2023/05/steel-metal-forging-process-1000x480.jpg",
    alt: "Heavy Machinery"
  },
];

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[800px] bg-secondary overflow-hidden flex flex-col">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
            {HERO_SLIDER_IMAGES.map((img, index) => (
                <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Dark Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                </div>
            ))}
        </div>

        {/* Main Content Area - Added pb-20 to push content up slightly relative to the bottom bar */}
        <div className="relative z-10 flex-grow flex items-center pb-20 md:pb-32">
            <div className="max-w-[1400px] mx-auto px-6 w-full">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-1 w-20 bg-primary"></div>
                        <h3 className="text-primary font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                            Industrial Forging Excellence
                        </h3>
                    </div>

                    <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8 tracking-tighter">
                        <span className="block text-primary">Advanced</span>
                        <span className="block">Forging</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Solutions</span>
                    </h1>
                    
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light mb-10 border-l-2 border-primary pl-6 leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                         <a 
                            href="#capabilities"
                            className="h-14 px-10 flex items-center bg-transparent border-2 border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            {t('hero.cta_capabilities')}
                        </a>
                        <a 
                            href="#about"
                            className="h-14 px-10 flex items-center bg-primary border-2 border-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all"
                        >
                            {t('hero.cta_about')}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Diagonal Bar CTA - Increased bottom padding significantly (pb-16 md:pb-24) to extend background downwards */}
        <div className="relative z-20 w-full bg-primary transform -skew-y-2 md:-skew-y-1 origin-bottom-right mt-auto translate-y-12 md:translate-y-8 border-t-4 border-white/20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-24 transform skew-y-2 md:skew-y-1 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                     <div className="h-14 w-14 rounded-full bg-black/20 flex items-center justify-center border border-white/10">
                        <span className="material-symbols-outlined text-3xl text-white">support_agent</span>
                     </div>
                     <div>
                        <p className="text-white/80 font-bold text-xs uppercase tracking-widest mb-1">Need an estimate?</p>
                        <p className="text-white font-black text-2xl md:text-3xl tracking-tight leading-none">CONTACT FOR A FREE QUOTE</p>
                     </div>
                </div>
                
                <div className="flex items-center gap-2 md:gap-6 mt-2 md:mt-0">
                    <span className="hidden md:block h-12 w-[1px] bg-white/30"></span>
                    <a href="tel:+62218990XXXX" className="text-white font-black text-2xl md:text-4xl hover:text-secondary transition-colors tracking-tight">
                        +62 21 8990 XXXX
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;