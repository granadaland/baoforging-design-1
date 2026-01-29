import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => {
    return (
        <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="mb-6 flex items-center justify-between">
                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                </div>
                <div className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-primary group-hover:text-primary transition-colors">
                     <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </div>
            </div>
            <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="w-full bg-white py-24 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-[2px] bg-primary"></div>
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">
                        {t('services.label')}
                    </span>
                </div>
                <h2 className="text-navy text-4xl md:text-5xl font-bold leading-tight">
                    {t('services.title')}
                </h2>
            </div>
            <p className="text-slate-500 max-w-md text-right md:text-left leading-relaxed">
                {t('services.description')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceItem 
                icon="hardware"
                title={t('services.s1_title')}
                description={t('services.s1_desc')}
            />
            <ServiceItem 
                icon="whatshot"
                title={t('services.s2_title')}
                description={t('services.s2_desc')}
            />
            <ServiceItem 
                icon="precision_manufacturing"
                title={t('services.s3_title')}
                description={t('services.s3_desc')}
            />
             <ServiceItem 
                icon="fact_check"
                title={t('services.s4_title')}
                description={t('services.s4_desc')}
            />
        </div>
      </div>
    </section>
  );
};

export default Services;