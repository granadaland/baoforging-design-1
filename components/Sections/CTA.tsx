import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
       
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-white text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
          {t('cta.title')}
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="#contact"
            className="flex h-14 items-center justify-center rounded bg-white px-10 text-primary text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-secondary hover:text-white transition-colors"
          >
            {t('cta.btn_quote')}
          </a>
          <button 
            onClick={() => alert("Brochure download simulation started.")}
            className="flex h-14 items-center justify-center rounded border-2 border-white px-10 text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors"
          >
            {t('cta.btn_brochure')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;