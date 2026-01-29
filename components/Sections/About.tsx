import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full bg-background-light dark:bg-background-dark py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 border-l-4 border-primary pl-4">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">{t('about.label')}</h2>
          <h3 className="text-navy dark:text-white text-3xl md:text-4xl font-black tracking-tight">{t('about.title')}</h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <h4 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
              {t('about.subtitle')}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary text-4xl">factory</span>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-lg">35,351 sqm</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t('about.stat_area_label')}</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-lg">Cikarang</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t('about.stat_loc_label')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjy7_8S8kY-19-PpZzSgITNCJZdutms4-NV-OM8br-5Zw3mvCeUurECIJ92MDHXudpe9D-0nOUqaIuJjG_yxowItwh2Iv4uDp1eduj8c4ZpeGLY7P7C7c-YA9E9DIrdA1J2Ky3JUWmCmc9dVoTcAVziIsS4ShZ8zxvqrcNBnxtpOlx34lYE-RSJ5OkLhNkCoXsXHWzxt1lbgQCajLVe7VBereGCDaDsrrh7gRJNYVhMVpTtJHGYPStzEfImh2ylmTCd975ooab5mmO" 
              alt="PT Baoforging International Indonesia Headquarters Building Exterior" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-primary">
              <p className="text-white text-xs font-bold uppercase tracking-wider">{t('about.hq_label')}</p>
              <p className="text-slate-200 text-xs">{t('about.hq_sub')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;