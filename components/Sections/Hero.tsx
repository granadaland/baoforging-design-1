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
    <section className="relative w-full min-h-screen bg-secondary overflow-hidden flex flex-col">
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

        {/* Main Content Area - Adjusted padding for visual centering and header clearance */}
        {/* pt-28 on mobile ensures it clears header but isn't too low. pt-32 on desktop centers it better. */}
        <div className="relative z-10 flex-grow flex items-center pt-28 pb-32 md:pt-32 md:pb-48">
            <div className="max-w-[1400px] mx-auto px-6 w-full">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-4 md:mb-8">
                        <div className="h-1 w-12 md:w-20 bg-primary"></div>
                        <h3 className="text-primary font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                            Industrial Forging Excellence
                        </h3>
                    </div>

                    {/* H1: Responsive sizes and line-heights to prevent cropping */}
                    {/* text-4xl on mobile (prevent horizontal overflow), scaling up to 8xl */}
                    {/* leading-tight on mobile (prevents vertical clipping), leading-[0.9] on desktop (tight aesthetic) */}
                    <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight md:leading-[0.9] mb-6 md:mb-8 tracking-tighter drop-shadow-lg">
                        <span className="block text-primary">Advanced</span>
                        <span className="block text-white">Forging</span>
                        <span className="block text-white">Solutions</span>
                    </h1>
                    
                    <p className="text-gray-300 text-sm md:text-xl max-w-lg md:max-w-2xl font-light mb-8 md:mb-10 border-l-2 border-primary pl-6 leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                         {/* Button 1: Transparent with Border */}
                         <a 
                            href="#capabilities"
                            className="h-12 md:h-14 px-6 md:px-10 flex items-center justify-center bg-transparent border-2 border-white text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            {t('hero.cta_capabilities')}
                        </a>
                        {/* Button 2: Solid Red */}
                        <a 
                            href="#about"
                            className="h-12 md:h-14 px-6 md:px-10 flex items-center justify-center bg-primary border-2 border-primary text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all"
                        >
                            {t('hero.cta_about')}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Diagonal Bar CTA - Extended padding (pb-32) to make red background longer */}
        <div className="relative z-20 w-full bg-primary transform -skew-y-2 md:-skew-y-1 origin-bottom-right mt-auto translate-y-12 md:translate-y-8 border-t-4 border-white/20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <div className="max-w-[1400px] mx-auto px-6 pt-12 pb-24 md:pt-16 md:pb-32 transform skew-y-2 md:skew-y-1 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                <div className="flex items-center gap-4">
                     <div className="h-12 w-12 md:h-14 md:w-14 min-w-[3rem] md:min-w-[3.5rem] rounded-full bg-black/20 flex items-center justify-center border border-white/10">
                        <span className="material-symbols-outlined text-2xl md:text-3xl text-white">support_agent</span>
                     </div>
                     <div>
                        <p className="text-white/80 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">Need an estimate?</p>
                        <p className="text-white font-black text-lg sm:text-2xl md:text-3xl tracking-tight leading-none">CONTACT FOR A FREE QUOTE</p>
                     </div>
                </div>
                
                <div className="flex items-center gap-2 md:gap-6 mt-2 md:mt-0">
                    <span className="hidden md:block h-12 w-[1px] bg-white/30"></span>
                    <a href="tel:+62218990XXXX" className="text-white font-black text-xl md:text-4xl hover:text-secondary transition-colors tracking-tight whitespace-nowrap">
                        +62 21 8990 XXXX
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;