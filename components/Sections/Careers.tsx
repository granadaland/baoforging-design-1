import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Careers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="careers" className="w-full bg-white dark:bg-slate-900 py-20 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="mb-6 border-l-4 border-primary pl-4">
              <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">{t('careers.label')}</h2>
              <h3 className="text-navy dark:text-white text-3xl md:text-4xl font-black tracking-tight">
                {t('careers.title')}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              {t('careers.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); alert("This would link to a job board or HR email."); }}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-navy dark:bg-slate-700 px-8 text-white text-sm font-bold shadow-md hover:bg-primary transition-colors gap-2"
              >
                {t('careers.cta')}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(#d12e3e_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                <div className="text-center p-8 relative z-10">
                    <span className="material-symbols-outlined text-6xl text-primary mb-4 block group-hover:scale-110 transition-transform">engineering</span>
                    <h4 className="text-xl font-bold text-navy dark:text-white mb-2">{t('careers.card_title')}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto">
                        {t('careers.card_desc')}
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;