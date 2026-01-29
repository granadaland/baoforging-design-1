import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative rounded-[50px] overflow-hidden bg-navy px-8 py-16 md:px-20 md:py-24 text-center shadow-2xl">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img 
                    src="https://images.unsplash.com/photo-1535974663539-74d6f4460f89?auto=format&fit=crop&q=80&w=2070" 
                    alt="Industrial texture" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/80 z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {t('cta.title')}
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('cta.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="#contact"
                    className="flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-white text-sm font-bold shadow-lg shadow-primary/30 hover:bg-white hover:text-primary transition-all"
                >
                    {t('cta.btn_quote')}
                </a>
                <button 
                    onClick={() => alert("Brochure download simulation started.")}
                    className="flex h-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-10 text-white text-sm font-bold hover:bg-white hover:text-navy transition-all"
                >
                    {t('cta.btn_brochure')}
                </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;