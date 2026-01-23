import React from 'react';
import { Car, Clock, MapPin, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface VehicleOption {
  type: string;
  capacity: string;
}

interface TransferCardProps {
  from: string;
  to: string;
  distance: number;
  duration: string;
  vehicles: VehicleOption[];
}

const WHATSAPP_NUMBER = '998990152110';

const TransferCard: React.FC<TransferCardProps> = ({
  from,
  to,
  distance,
  duration,
  vehicles,
}) => {
  const { t } = useLanguage();

  const message = encodeURIComponent(`Hello! I'd like to book a private transfer from ${from} to ${to}.`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="bg-card rounded-xl shadow-card overflow-hidden border border-border animate-fade-in">
      <div className="p-5 sm:p-6">
        {/* Route Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
            <Car className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-foreground">
              <span className="truncate">{from}</span>
              <span className="text-muted-foreground flex-shrink-0">→</span>
              <span className="truncate">{to}</span>
            </div>
            <div className="text-sm sm:text-base text-muted-foreground font-medium">Private Transfer</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-5">
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
            <span className="text-foreground font-semibold tabular-nums">{distance} {t('common.km')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
            <span className="text-foreground font-semibold">{duration}</span>
          </div>
        </div>

        {/* Vehicle Options */}
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-5 rounded-xl bg-muted border border-border/50"
            >
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground flex-shrink-0" />
                <span className="font-semibold text-base sm:text-lg text-foreground">{vehicle.type}</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground font-medium">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="tabular-nums">{vehicle.capacity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="w-full h-14 sm:h-16 text-base sm:text-lg font-semibold"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            {t('transfers.book')}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TransferCard;
