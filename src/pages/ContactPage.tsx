import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = '998901234567';
const PHONE_NUMBER = '+998901234567';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    route: '',
    passengers: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello JamTripsGo!

Name: ${formData.name}
Travel Date: ${formData.date}
Route: ${formData.route}
Passengers: ${formData.passengers}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: PHONE_NUMBER,
      action: () => window.open(`tel:${PHONE_NUMBER}`, '_self'),
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with us',
      action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'),
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tashkent, Uzbekistan',
      action: null,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: '24/7 Available',
      action: null,
    },
  ];

  const routes = [
    'Tashkent - Samarkand',
    'Samarkand - Bukhara',
    'Bukhara - Khiva',
    'Tashkent - Bukhara',
    'Samarkand - Shakhrisabz',
    'Other',
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 bg-background">
      {/* Header */}
      <div className="container px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">{t('contact.title')}</h1>
          <p className="text-muted-foreground">{t('contact.subtitle')}</p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <Button
            variant="whatsapp"
            size="lg"
            className="w-full"
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
            {t('contact.whatsapp')}
          </Button>
          <Button
            variant="default"
            size="lg"
            className="w-full"
            onClick={() => window.open(`tel:${PHONE_NUMBER}`, '_self')}
          >
            <Phone className="w-5 h-5" />
            {t('contact.call')}
          </Button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container px-4 mb-8">
        <div className="bg-card rounded-xl p-6 shadow-card border border-border">
          <h2 className="text-lg font-bold text-foreground mb-4">Send Enquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('contact.date')}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('contact.route')}
              </label>
              <select
                name="route"
                value={formData.route}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select route</option>
                {routes.map((route, index) => (
                  <option key={index} value={route}>
                    {route}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('contact.passengers')}
              </label>
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Additional details..."
              />
            </div>

            <Button type="submit" variant="whatsapp" size="lg" className="w-full">
              <MessageCircle className="w-5 h-5" />
              {t('contact.send')}
            </Button>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container px-4">
        <div className="space-y-3">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              onClick={info.action || undefined}
              className={`flex items-center gap-4 bg-card rounded-xl p-4 shadow-card border border-border ${
                info.action ? 'cursor-pointer hover:bg-muted transition-colors' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{info.label}</div>
                <div className="font-semibold text-foreground">{info.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
