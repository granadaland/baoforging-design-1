import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-navy border-t border-slate-800 pt-16 pb-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white">
              <div className="flex items-center justify-center h-8 w-8 bg-primary rounded text-white font-black text-xl leading-none">
                B
              </div>
              <span className="text-xl font-black uppercase brand-logo-custom">Baoforging</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t('footer.col_company')}</h4>
            <ul className="space-y-2">
              {[
                { label: t('header.home'), href: "#" },
                { label: t('header.about'), href: "#about" },
                { label: t('header.capabilities'), href: "#capabilities" },
                { label: t('careers.title'), href: "#careers" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t('footer.col_contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>KITIC, Cikarang,<br/>West Java 17337, ID</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <a href="mailto:info@baoforging.co.id" className="hover:text-white transition-colors">info@baoforging.co.id</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span>+62 21 8990 XXXX</span>
              </li>
            </ul>
          </div>

          {/* Map Col */}
          <div className="h-48 w-full rounded-lg overflow-hidden bg-slate-800 relative border border-slate-700">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXDCEJS0aHofWIrPyktGW-oxGY5BDRQ1SoRIQ1N238m38mrNk8IP4pdyOjHX6KOxYTQ9RTg9iD3PwbKXR1OmPa0sfT-nvbqulGB2kKfDghYIGhR4YZ16uC1xpFZ11fHFKnVXLN1olSBcSnHs2SRbezgtc-wFLdxCuRn9qR3pg5N_C2uzv3YXFLkbYm9mx-921VMq8HvuFvx-BXz_PHaVzWmdzVMBbPvxDULVrctkFdPk69FK3ci0ZoPvuzE5gnvEysCURWM0sRap0l" 
              alt="Map showing location of Cikarang industrial estate" 
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs text-white backdrop-blur-sm">
              KITIC, Cikarang
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;