import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-navy dark:text-white text-3xl md:text-4xl font-black mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact"
            className="flex h-14 items-center justify-center rounded-lg bg-primary px-10 text-white text-lg font-bold shadow-lg hover:bg-red-700 transition-colors"
          >
            {t('cta.btn_quote')}
          </a>
          <button 
            onClick={() => alert("Brochure download simulation started.")}
            className="flex h-14 items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-10 text-navy dark:text-white text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {t('cta.btn_brochure')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;