import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = '998901234567'; // Replace with actual number

const BottomCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    const message = encodeURIComponent('Hello! I\'m interested in your travel services.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border safe-bottom">
      <div className="container py-3">
        <Button
          onClick={handleClick}
          variant="whatsapp"
          size="lg"
          className="w-full"
        >
          <MessageCircle className="w-5 h-5" />
          {t('common.chat')}
        </Button>
      </div>
    </div>
  );
};

export default BottomCTA;
