import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = '998990152110';

interface WhatsAppButtonProps {
  message?: string;
  floating?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message = '', floating = true }) => {
  const { t } = useLanguage();

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message || 'Hello! I\'m interested in your travel services.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  if (floating) {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-24 right-4 z-40 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground shadow-[0_4px_20px_-4px_hsl(142,70%,45%,0.6)] flex items-center justify-center hover:scale-110 transition-transform animate-bounce-soft"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    );
  }

  return null;
};

export default WhatsAppButton;
