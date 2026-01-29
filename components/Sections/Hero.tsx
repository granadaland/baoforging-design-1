import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex w-full min-h-[85vh] flex-col justify-center overflow-hidden bg-secondary">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCHpVl8IOZxnoANNlNLvvERSDPC019fYVp2EKnZlec9XT0xWj_VBkp1idV53tcC5tZibr8uOIFhs-av7_nBpr8d1H-AkWEruoeCWrLO6ZFZLku8o7lvCOO0vb-CmfrkGkjOz_o36EvU1zadLhGouGcemFaCJSNejR4C_KOnJkhzCiLKVT-QBHd9u60lB8mSCLfheUsOhMRWDLT7i_EWMfNgtGudx79tn7WG4Nil0RY9aGPHvKk2qDf3do6YF1Z6JPD7PdbA01alxyJy"
          className="h-full w-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-sparks-flying-in-factory-5386/1080p.mp4" type="video/mp4" />
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHpVl8IOZxnoANNlNLvvERSDPC019fYVp2EKnZlec9XT0xWj_VBkp1idV53tcC5tZibr8uOIFhs-av7_nBpr8d1H-AkWEruoeCWrLO6ZFZLku8o7lvCOO0vb-CmfrkGkjOz_o36EvU1zadLhGouGcemFaCJSNejR4C_KOnJkhzCiLKVT-QBHd9u60lB8mSCLfheUsOhMRWDLT7i_EWMfNgtGudx79tn7WG4Nil0RY9aGPHvKk2qDf3do6YF1Z6JPD7PdbA01alxyJy" 
            alt="Industrial forging factory floor with sparks flying" 
            className="h-full w-full object-cover"
          />
        </video>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20 pb-40">
        <div className="max-w-3xl flex flex-col gap-8 animate-in slide-in-from-left-10 fade-in duration-700">
            <div className="flex items-center gap-2 mb-2">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Industrial Excellence</span>
            </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-normal max-w-xl leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contact"
              className="flex h-14 items-center justify-center rounded bg-primary px-10 text-white text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-red-700 transition-all"
            >
              {t('header.cta')}
            </a>
          </div>
          
          {/* Slider Indicators (Visual Only) */}
          <div className="flex gap-2 mt-8">
            <div className="w-8 h-1 bg-primary"></div>
            <div className="w-8 h-1 bg-white/20"></div>
            <div className="w-8 h-1 bg-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;