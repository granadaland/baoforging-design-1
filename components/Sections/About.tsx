import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full bg-background-light py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block border-b-2 border-primary w-fit pb-1">
                    {t('about.label')}
                </span>
                <h2 className="text-navy text-4xl md:text-5xl font-black leading-tight mt-4 uppercase">
                    {t('hero.title')}
                </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-slate-200 pl-6 italic">
              {t('about.subtitle')}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="flex items-center gap-4">
                     <span className="material-symbols-outlined text-4xl text-navy">verified</span>
                     <div>
                         <h5 className="font-bold text-navy">ISO 9001</h5>
                         <p className="text-xs text-slate-500">Certified Quality</p>
                     </div>
                </div>
                <div className="flex items-center gap-4">
                     <span className="material-symbols-outlined text-4xl text-navy">timer</span>
                     <div>
                         <h5 className="font-bold text-navy">On Time</h5>
                         <p className="text-xs text-slate-500">Delivery Guaranteed</p>
                     </div>
                </div>
            </div>

            <a 
              href="#contact"
              className="w-fit mt-6 px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider rounded shadow-lg hover:bg-red-800 transition-colors"
            >
              {t('header.cta')}
            </a>
          </div>

          {/* Right Image/Video */}
          <div className="lg:w-1/2 relative">
             <div className="relative rounded-sm overflow-hidden shadow-2xl border-8 border-white">
                <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmin5JWcDWw1JyxRFtRuRsPzuXGlMePbSl50cH6bQ9LGvtGwmbcP25pOod3UFZKtck5usCuTnqjK7dbrHs53zGD1Zc0kvKhtooOC9IkfBp9t0GR6hqootTt-3Otdelgw7rbgu97RUUfP5-4qoDmDz7dPpKIwGx1zMJkzA-tU6odsqjtHKJwilUtwVtowiUULjCYTCb6lac1f4V_9gord2c9c6R0OglnG7nov6Y2d61naVPEY0KzZniaurX6i6TqXb2hwoQlkCGm_EC" 
                alt="Welder working on metal fabrication" 
                className="w-full object-cover h-[500px]"
                />
                <div className="absolute inset-0 bg-navy/20"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 bg-primary/90 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-xl animate-pulse">
                        <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                    </div>
                </div>
             </div>
             
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-navy z-[-1] pattern-dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;