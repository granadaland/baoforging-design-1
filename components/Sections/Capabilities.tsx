import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  isRed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, isRed }) => {
    const { t } = useLanguage();
    
    return (
        <div className={`group relative flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 border-b-4 ${
            isRed 
            ? 'bg-primary text-white border-primary' 
            : 'bg-white text-navy border-transparent hover:border-primary shadow-xl'
        }`}>
            <div className="mb-6">
                <span className={`material-symbols-outlined text-5xl ${isRed ? 'text-white' : 'text-primary'}`}>
                    {icon}
                </span>
            </div>
            <h4 className={`mb-3 text-xl font-bold ${isRed ? 'text-white' : 'text-navy'}`}>
                {title}
            </h4>
            <p className={`text-sm leading-relaxed mb-6 flex-grow ${isRed ? 'text-white/90' : 'text-slate-500'}`}>
                {description}
            </p>
            <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider cursor-pointer">
                <span>{t('read_more')}</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward_ios</span>
            </div>
        </div>
    );
};

const Capabilities: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="relative w-full bg-background-light z-30 pb-20">
      {/* Negative Margin Container to Overlap Hero */}
      <div className="max-w-7xl mx-auto px-6 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-2xl rounded-sm overflow-hidden">
            {/* Intro Text Block (First Card) */}
            <div className="bg-white p-10 flex flex-col justify-center border-b-4 border-transparent hover:border-primary transition-all">
                <div className="mb-4">
                    <span className="material-symbols-outlined text-5xl text-navy animate-spin-slow">settings</span>
                </div>
                <h3 className="text-2xl font-black text-navy mb-4 leading-tight">
                    {t('capabilities.intro_title')}
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                    {t('capabilities.intro_desc')}
                </p>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                    <span className="text-sm font-bold text-navy uppercase">{t('read_more')}</span>
                </div>
            </div>

            {/* Service Cards */}
            <ServiceCard 
                title={t('capabilities.item1_title')}
                description={t('capabilities.item1_desc')}
                icon="precision_manufacturing"
                isRed={true}
            />
             <ServiceCard 
                title={t('capabilities.item2_title')}
                description={t('capabilities.item2_desc')}
                icon="construction"
            />
             <ServiceCard 
                title={t('capabilities.item3_title')}
                description={t('capabilities.item3_desc')}
                icon="engineering"
            />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;