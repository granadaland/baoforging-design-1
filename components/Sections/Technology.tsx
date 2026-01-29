import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Technology: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-secondary py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(45deg, #d12e3e 25%, transparent 25%, transparent 50%, #d12e3e 50%, #d12e3e 75%, transparent 75%, transparent)", 
          backgroundSize: "20px 20px" 
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase mb-4">
              WHY CHOOSE US?
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy/50 p-8 border border-slate-700 hover:border-primary transition-colors group">
                <div className="mb-6 inline-block p-4 rounded bg-slate-800 text-white group-hover:bg-primary transition-colors">
                     <span className="material-symbols-outlined text-4xl">thermostat</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">{t('technology.title')}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {t('technology.description')}
                </p>
                <div className="w-full h-[1px] bg-slate-700 group-hover:bg-primary/50 transition-colors"></div>
            </div>

            <div className="bg-navy/50 p-8 border border-slate-700 hover:border-primary transition-colors group">
                 <div className="mb-6 inline-block p-4 rounded bg-slate-800 text-white group-hover:bg-primary transition-colors">
                     <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">Advanced Machinery</h3>
                <ul className="text-slate-400 text-sm leading-relaxed space-y-2">
                    {[t('technology.point1'), t('technology.point2'), t('technology.point3')].map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                             <span className="text-primary">•</span> {point}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-navy/50 p-8 border border-slate-700 hover:border-primary transition-colors group">
                 <div className="mb-6 inline-block p-4 rounded bg-slate-800 text-white group-hover:bg-primary transition-colors">
                     <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">Quality Assurance</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                   Strict adherence to ISO standards and rigorous testing protocols ensures every component meets global specifications.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;