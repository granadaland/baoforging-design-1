import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

// --- KONFIGURASI GAMBAR ---
// Ganti URL di bawah ini untuk mengubah gambar "Why Choose Us" secara manual
const WHY_CHOOSE_US_IMAGE = "https://www.reliance-foundry.com/wp-content/uploads/metal-forging-machine.jpg";

const Technology: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-secondary py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 border-l border-white/5"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-[4px] bg-accent"></div>
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">
                        {t('technology.label')}
                    </span>
                </div>
                <h2 className="text-white text-4xl md:text-5xl font-black uppercase leading-tight mb-8">
                    {t('technology.title')}
                </h2>

                <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="group bg-white/5 border border-white/10 p-6 hover:bg-primary transition-colors duration-300">
                        <div className="flex gap-6 items-start">
                            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">thermostat</span>
                            <div>
                                <h4 className="text-xl font-black uppercase text-white mb-2">{t('technology.t1_title')}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                                    {t('technology.description')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="group bg-white/5 border border-white/10 p-6 hover:bg-primary transition-colors duration-300">
                        <div className="flex gap-6 items-start">
                            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">precision_manufacturing</span>
                            <div>
                                <h4 className="text-xl font-black uppercase text-white mb-2">{t('technology.t2_title')}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                                    {t('technology.t2_desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="group bg-white/5 border border-white/10 p-6 hover:bg-primary transition-colors duration-300">
                        <div className="flex gap-6 items-start">
                             <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">verified_user</span>
                            <div>
                                <h4 className="text-xl font-black uppercase text-white mb-2">{t('technology.t3_title')}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                                    {t('technology.t3_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Right Image with Industrial Frame */}
             <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                <div className="relative h-[600px] w-full border-4 border-white/10 p-2">
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-primary"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-accent"></div>
                    
                    <div className="h-full w-full overflow-hidden bg-black relative">
                        <img 
                            src={WHY_CHOOSE_US_IMAGE}
                            alt="Industrial Technology"
                            className="h-full w-full object-cover opacity-80"
                        />
                         <div className="absolute bottom-0 right-0 bg-primary p-6">
                             <span className="material-symbols-outlined text-white text-5xl">engineering</span>
                         </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;