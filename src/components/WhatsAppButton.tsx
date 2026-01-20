import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = '998990152110';

interface WhatsAppButtonProps {
  message?: string;
  floating?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message = '', floating = true }) => {
  const encodedMessage = encodeURIComponent(message || 'Hello! I\'m interested in your travel services.');
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 sm:bottom-24 right-3 sm:right-4 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground shadow-[0_4px_20px_-4px_hsl(142,70%,45%,0.6)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform animate-bounce-soft"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    );
  }

  return null;
};

export default WhatsAppButton;
