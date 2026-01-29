import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col (2 cols wide) */}
          <div className="lg:col-span-2 flex flex-col gap-6 pr-8">
            <div className="flex items-center gap-2">
               {/* Logo Icon */}
               <div className="relative h-10 w-10">
                   <div className="absolute inset-0 bg-primary rounded-tr-xl rounded-bl-xl opacity-20"></div>
                   <div className="absolute inset-0 flex items-center justify-center text-primary font-black text-2xl">B</div>
               </div>
              <div className="flex flex-col">
                <h2 className="text-navy text-xl font-black tracking-tight uppercase leading-none">
                  Baoforging
                </h2>
                <span className="text-slate-400 text-[10px] tracking-widest uppercase font-bold">Industrial Indonesia</span>
              </div>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>

            <div className="flex gap-4 mt-2">
                <a href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all border border-slate-100 shadow-sm">
                    <span className="material-symbols-outlined text-lg">public</span>
                </a>
                 <a href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all border border-slate-100 shadow-sm">
                    <span className="material-symbols-outlined text-lg">mail</span>
                </a>
                 <a href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all border border-slate-100 shadow-sm">
                    <span className="material-symbols-outlined text-lg">call</span>
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-navy font-bold mb-6 text-lg">{t('footer.col_company')}</h4>
            <ul className="space-y-4">
              {[
                { label: t('header.home'), href: "#" },
                { label: t('header.about'), href: "#about" },
                { label: t('header.services'), href: "#services" },
                { label: t('header.capabilities'), href: "#capabilities" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-navy font-bold mb-6 text-lg">{t('footer.col_contact')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                     <span className="material-symbols-outlined text-primary text-3xl mb-3">location_on</span>
                     <p className="text-navy font-bold mb-1">Headquarters</p>
                     <p className="text-slate-500 text-sm leading-relaxed">
                        KITIC, Cikarang, West Java 17337, Indonesia
                     </p>
                </div>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                     <span className="material-symbols-outlined text-primary text-3xl mb-3">support_agent</span>
                     <p className="text-navy font-bold mb-1">Get in Touch</p>
                     <p className="text-slate-500 text-sm mb-1">
                        <a href="mailto:info@baoforging.co.id" className="hover:text-primary">info@baoforging.co.id</a>
                     </p>
                     <p className="text-slate-500 text-sm">
                        +62 21 8990 XXXX
                     </p>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left font-medium">
            {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;