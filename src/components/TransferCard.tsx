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
      <div className="p-5">
        {/* Route Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
            <Car className="w-6 h-6 text-secondary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <span className="truncate">{from}</span>
              <span className="text-muted-foreground">→</span>
              <span className="truncate">{to}</span>
            </div>
            <div className="text-sm text-muted-foreground">Private Transfer</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-muted-foreground">{distance} {t('common.km')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="text-muted-foreground">{duration}</span>
          </div>
        </div>

        {/* Vehicle Options */}
        <div className="space-y-2 mb-4">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 px-4 rounded-lg bg-muted"
            >
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium text-foreground">{vehicle.type}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{vehicle.capacity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="w-full"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            {t('transfers.book')}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TransferCard;
