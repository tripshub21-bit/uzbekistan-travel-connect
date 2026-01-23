import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = '998990152110';

const BottomCTA: React.FC = () => {
  const { t } = useLanguage();

  const message = encodeURIComponent('Hello! I\'m interested in your travel services.');
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border safe-bottom">
      <div className="container py-3 sm:py-4 px-4">
        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="w-full h-14 sm:h-16 text-base sm:text-lg font-semibold"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            {t('common.chat')}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default BottomCTA;
