import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Technology: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-navy py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: "radial-gradient(#d12e3e 1px, transparent 1px)", 
          backgroundSize: "32px 32px" 
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              {t('technology.label')}
            </div>
            <h3 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">
              {t('technology.title')}
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {t('technology.description')}
            </p>
            <ul className="space-y-4 mb-8">
              {[
                t('technology.point1'),
                t('technology.point2'),
                t('technology.point3')
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-200">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmin5JWcDWw1JyxRFtRuRsPzuXGlMePbSl50cH6bQ9LGvtGwmbcP25pOod3UFZKtck5usCuTnqjK7dbrHs53zGD1Zc0kvKhtooOC9IkfBp9t0GR6hqootTt-3Otdelgw7rbgu97RUUfP5-4qoDmDz7dPpKIwGx1zMJkzA-tU6odsqjtHKJwilUtwVtowiUULjCYTCb6lac1f4V_9gord2c9c6R0OglnG7nov6Y2d61naVPEY0KzZniaurX6i6TqXb2hwoQlkCGm_EC" 
                alt="Close up of glowing red hot metal in heat treatment process" 
                className="w-full h-full object-cover min-h-[400px] transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-widest mb-2">
                  <span className="material-symbols-outlined text-lg">thermostat</span>
                  {t('technology.process_label')}
                </div>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;