import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full relative bg-white pt-24 pb-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left Side - Image/Visual (Diagonal Cut) */}
        <div className="relative w-full lg:w-1/2 bg-gray-100 min-h-[400px] lg:min-h-auto flex items-center justify-center p-12 overflow-hidden group">
             {/* Background Image with diagonal clip */}
             <div className="absolute inset-0 lg:right-[-100px] bg-secondary transform lg:-skew-x-12 origin-top overflow-hidden border-r-8 border-accent z-0">
                <img 
                    src="https://images.unsplash.com/photo-1565439396602-23c2a6327341?auto=format&fit=crop&q=80&w=2070" 
                    alt="Factory Interior" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 transform lg:skew-x-12 scale-110 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-secondary/50"></div>
             </div>

             {/* Content on top of visual */}
             <div className="relative z-10 text-center">
                 <div className="inline-block border-4 border-white p-6">
                    <h3 className="text-white text-5xl font-black uppercase tracking-tighter mb-1">
                        BAO<span className="text-primary">FORGING</span>
                    </h3>
                    <p className="text-white font-bold tracking-[0.3em] text-xs uppercase border-t border-white/50 pt-2 mt-2">
                        Authorized Joint Venture
                    </p>
                 </div>
             </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-6">
                 <span className="text-accent font-black text-lg border-b-2 border-accent pb-1">01</span>
                 <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                    {t('about.label')}
                </span>
             </div>
             
             <h2 className="text-secondary text-4xl lg:text-5xl font-black uppercase leading-tight mb-8">
                {t('about.title')} <br/>
                <span className="text-primary">{t('about.subtitle')}</span>
             </h2>

             <p className="text-gray-600 font-medium leading-relaxed mb-8 text-lg border-l-4 border-gray-200 pl-6">
                {t('about.description')}
             </p>

             {/* Stats Grid */}
             <div className="grid grid-cols-2 gap-8 mb-10">
                 <div>
                     <h4 className="text-4xl font-black text-secondary mb-1">20+</h4>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Years Experience</p>
                 </div>
                 <div>
                     <h4 className="text-4xl font-black text-secondary mb-1">1.2M</h4>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Parts Forged</p>
                 </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center h-12 px-8 bg-secondary text-white font-bold uppercase tracking-wider text-sm hover:bg-primary transition-colors">
                    {t('header.cta')}
                </a>
                 <div className="flex items-center gap-2 px-6 h-12 border border-gray-200">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span className="text-sm font-bold text-secondary uppercase">Cikarang, Indonesia</span>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default About;