import React, { useState } from 'react';
import { MapPin, Calendar, Users, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = '998990152110';

const CustomTransferForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppUrl = () => {
    const messageLines = [
      language === 'ru' ? '🚗 Запрос на трансфер' : '🚗 Custom Transfer Request',
      '',
      `📍 ${t('transfers.customFrom')}: ${form.from.trim() || '-'}`,
      `📍 ${t('transfers.customTo')}: ${form.to.trim() || '-'}`,
      `📅 ${t('contact.date')}: ${form.date || '-'}`,
      `👥 ${t('contact.passengers')}: ${form.passengers || '-'}`,
    ];

    if (form.message.trim()) {
      messageLines.push('', `💬 ${t('contact.message')}: ${form.message.trim()}`);
    }

    const encodedMessage = encodeURIComponent(messageLines.join('\n'));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  const isFormValid = form.from.trim() && form.to.trim();

  return (
    <div className="bg-card rounded-xl shadow-card overflow-hidden border border-border animate-fade-in">
      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
            <Send className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              {t('transfers.customTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t('transfers.customSubtitle')}
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-3 sm:space-y-4">
          {/* From/To Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <Input
                name="from"
                value={form.from}
                onChange={handleChange}
                placeholder={t('transfers.customFrom')}
                className="pl-10 h-11 sm:h-12"
                maxLength={100}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <Input
                name="to"
                value={form.to}
                onChange={handleChange}
                placeholder={t('transfers.customTo')}
                className="pl-10 h-11 sm:h-12"
                maxLength={100}
              />
            </div>
          </div>

          {/* Date/Passengers Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <Input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                placeholder={t('contact.date')}
                className="pl-10 h-11 sm:h-12"
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <Input
                name="passengers"
                type="number"
                min="1"
                max="50"
                value={form.passengers}
                onChange={handleChange}
                placeholder={t('contact.passengers')}
                className="pl-10 h-11 sm:h-12"
              />
            </div>
          </div>

          {/* Message */}
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('transfers.customNotes')}
            className="min-h-[80px] resize-none"
            maxLength={500}
          />

          {/* Submit Button */}
          <Button
            asChild
            variant="whatsapp"
            size="lg"
            className={`w-full h-12 sm:h-14 text-sm sm:text-base ${!isFormValid ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <a
              href={isFormValid ? generateWhatsAppUrl() : '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => !isFormValid && e.preventDefault()}
            >
              <MessageCircle className="w-5 h-5" />
              {t('transfers.customSubmit')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomTransferForm;
