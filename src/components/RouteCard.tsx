import React from 'react';
import { Clock, MapPin, Train as TrainIcon, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface Timetable {
  departure: string;
  arrival: string;
  train: string;
  note?: string;
}

interface RouteCardProps {
  from: string;
  to: string;
  distance: number;
  duration: string;
  trainType: string;
  timetable: Timetable[];
}

const WHATSAPP_NUMBER = '998990152110';

const RouteCard: React.FC<RouteCardProps> = ({
  from,
  to,
  distance,
  duration,
  trainType,
  timetable,
}) => {
  const { t } = useLanguage();

  const message = encodeURIComponent(`Hello! I'd like to enquire about train tickets from ${from} to ${to}.`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="bg-card rounded-xl shadow-card overflow-hidden border border-border animate-fade-in">
      <div className="p-4 sm:p-5">
        {/* Route Header */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
            <TrainIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 text-base sm:text-lg font-bold text-foreground">
              <span className="truncate">{from}</span>
              <span className="text-muted-foreground flex-shrink-0">→</span>
              <span className="truncate">{to}</span>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">{trainType}</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">{distance} {t('common.km')}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">{duration}</span>
          </div>
        </div>

        {/* Timetable Header */}
        <div className="text-xs sm:text-sm font-medium text-foreground mb-2">{t('trains.timetable')}</div>

        {/* Timetable Content */}
        <div className="mb-3 sm:mb-4 rounded-lg bg-muted/50 overflow-hidden">
          <div className="grid grid-cols-3 gap-2 p-2.5 sm:p-3 text-[10px] sm:text-xs font-semibold text-muted-foreground border-b border-border">
            <span>{t('trains.departure')}</span>
            <span>{t('trains.arrival')}</span>
            <span>{t('trains.note')}</span>
          </div>
          {timetable.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-2 p-2.5 sm:p-3 text-xs sm:text-sm text-foreground border-b border-border last:border-0"
            >
              <span className="font-medium">{item.departure}</span>
              <span className="font-medium">{item.arrival}</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">{item.note ? t(item.note) : ''}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="w-full h-12 sm:h-14 text-sm sm:text-base"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            {t('trains.enquire')}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default RouteCard;
