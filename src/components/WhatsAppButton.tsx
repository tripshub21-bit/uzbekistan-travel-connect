import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const CONTACT_NUMBER = '998990152110';

interface FloatingButtonsProps {
  message?: string;
  floating?: boolean;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ message = '', floating = true }) => {
  const encodedMessage = encodeURIComponent(message || 'Hello! I\'m interested in your travel services.');
  const whatsappUrl = `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`;
  const phoneUrl = `tel:+${CONTACT_NUMBER}`;

  if (floating) {
    return (
      <div className="fixed bottom-20 sm:bottom-24 right-3 sm:right-4 z-40 flex flex-col gap-2.5 sm:gap-3">
        {/* Phone Call Button */}
        <a
          href={phoneUrl}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-[0_4px_20px_-4px_hsl(210,85%,45%,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground shadow-[0_4px_20px_-4px_hsl(142,70%,45%,0.6)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform animate-bounce-soft"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
    );
  }

  return null;
};

export default FloatingButtons;
