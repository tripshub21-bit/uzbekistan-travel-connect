import React from 'react';
import { Link } from 'react-router-dom';
import { Train, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const Footer: React.FC = () => {
  const {
    t
  } = useLanguage();
  return <footer className="bg-foreground text-primary-foreground pb-24">
      <div className="container px-4 py-10">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Train className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">JamTripsGo</span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-semibold mb-3 text-secondary">{t('footer.services')}</h3>
            <div className="space-y-2">
              <Link to="/trains" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t('nav.trains')}
              </Link>
              <Link to="/transfers" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t('nav.transfers')}
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-secondary">{t('footer.company')}</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-6 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Tashkent, Uzbekistan</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+998 990152110</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-primary-foreground/20 text-sm opacity-60 text-center">
          © {new Date().getFullYear()} JamTripsGo. {t('footer.rights')}
        </div>
      </div>
    </footer>;
};
export default Footer;