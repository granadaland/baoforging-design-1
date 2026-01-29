import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex w-full flex-col justify-end min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent z-10"></div>
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
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl flex flex-col gap-6 animate-in slide-in-from-bottom-10 fade-in duration-700">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#capabilities"
              className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-white text-base font-bold shadow-lg hover:bg-red-700 transition-all transform hover:scale-105"
            >
              {t('hero.cta_capabilities')}
            </a>
            <a 
              href="#about"
              className="flex h-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/30 px-8 text-white text-base font-bold hover:bg-white/20 transition-all"
            >
              {t('hero.cta_about')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;