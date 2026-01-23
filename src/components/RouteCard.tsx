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
      <div className="p-5 sm:p-6">
        {/* Route Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
            <TrainIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-foreground">
              <span className="truncate">{from}</span>
              <span className="text-muted-foreground flex-shrink-0">→</span>
              <span className="truncate">{to}</span>
            </div>
            <div className="text-sm sm:text-base text-muted-foreground font-medium">{trainType}</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-5">
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <span className="text-foreground font-semibold tabular-nums">{distance} {t('common.km')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <span className="text-foreground font-semibold">{duration}</span>
          </div>
        </div>

        {/* Timetable Header */}
        <div className="text-sm sm:text-base font-semibold text-foreground mb-3">{t('trains.timetable')}</div>

        {/* Timetable Content */}
        <div className="mb-4 sm:mb-5 rounded-xl bg-muted/50 overflow-hidden border border-border/50">
          <div className="grid grid-cols-3 gap-3 p-3 sm:p-4 text-xs sm:text-sm font-bold text-muted-foreground border-b border-border uppercase tracking-wide">
            <span>{t('trains.departure')}</span>
            <span>{t('trains.arrival')}</span>
            <span>{t('trains.note')}</span>
          </div>
          {timetable.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-3 p-3 sm:p-4 text-base sm:text-lg text-foreground border-b border-border/50 last:border-0"
            >
              <span className="font-bold tabular-nums">{item.departure}</span>
              <span className="font-bold tabular-nums">{item.arrival}</span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">{item.note ? t(item.note) : ''}</span>
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
            {t('trains.enquire')}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default RouteCard;
