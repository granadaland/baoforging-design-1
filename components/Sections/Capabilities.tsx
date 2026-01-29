import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface EquipmentCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ title, description, image, icon }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="h-48 w-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
      <div 
        className="h-full w-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500" 
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h4 className="mb-2 text-xl font-bold text-navy dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Capabilities: React.FC = () => {
  const { t } = useLanguage();

  const equipment = [
    {
      title: t('capabilities.item1_title'),
      description: t('capabilities.item1_desc'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALIbzJ6Ihz1JMcA4UYZzujRwwyfzSoeU8ORK6P8yB39YePAIvC5NyjUgbNoA7gmLDFuAEm-MEEmXjROI8HZJROL19qy9gqUFvgUTNeRY1LIOiXFu_61rb_J0qmjAJ4T7vI94Ts7cl9H7rLi5O59RBPR5Nbo3sugQL01dZSwQcYnmTSPMcFPKk06wVt01VDI6_9YGucdDPZT41Uy0YHGjNShw9BeKjb6CtwsR4uj6r_yWNEn5dAnYBFdd5l0WGNtE2MzWen0Q1LOwdF",
      icon: "precision_manufacturing"
    },
    {
      title: t('capabilities.item2_title'),
      description: t('capabilities.item2_desc'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-x28yNpuHfFVOUUqbOFvR-FO6NeVC5lDRa88RHTDXJdNF3ThOvCDjEdYFs0r6idqum78dxwxetSG_PXAVyPXw0SIO_DpkL1aoinUdr9DuXkSLPP-JWTOn3kgt_pMImLs_57LNg_bgwPhq2HExm-rUx_7DWzgL_UADd0LKWJJTAcg_22vian2z21JH-tF4WrN_yIS_sNTos1KPARw9ez5RpbztbgA6Alcem6Uxj_fasKZXedwYvMcFaLGVLPdFgg_cZ5BawaJ_41G0",
      icon: "construction"
    },
    {
      title: t('capabilities.item3_title'),
      description: t('capabilities.item3_desc'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANP6RV5s3A4oNvKQC4454qx0LEw3zkaWe3mgaq1JmQFpamZIEjulY-8ftQFhGzZGSAcRojkUhzASg1IJzRJKnMIefn2n1EM8QdGw98ix8Xm0ld3nxWO_afy4FsoEDdkSYLi3tDvLsuFN_rfFcsymVzIZGl6VAIpfvUhkNkoJ4OrStKQsnQ80ACo7yYhq1CIQlw0Gk5yqCk9TiRWAqMf6oniMWJd5wf3FEwJaiLOEL5UYUSIRT1ZivmLdKHbaHXcHny85lwv2TdA26F",
      icon: "engineering"
    }
  ];

  return (
    <section id="capabilities" className="w-full bg-white dark:bg-slate-900 py-20 border-y border-slate-200 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">{t('capabilities.label')}</h2>
          <h3 className="text-navy dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-4">{t('capabilities.title')}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t('capabilities.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <EquipmentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;