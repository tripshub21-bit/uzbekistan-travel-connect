import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, MapPin, Train as TrainIcon, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface Timetable {
  departure: string;
  arrival: string;
  train: string;
}

interface RouteCardProps {
  from: string;
  to: string;
  distance: number;
  duration: string;
  trainType: string;
  timetable: Timetable[];
}

const WHATSAPP_NUMBER = '998901234567';

const RouteCard: React.FC<RouteCardProps> = ({
  from,
  to,
  distance,
  duration,
  trainType,
  timetable,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const handleEnquiry = () => {
    const message = encodeURIComponent(`Hello! I'd like to enquire about train tickets from ${from} to ${to}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-card rounded-xl shadow-card overflow-hidden border border-border animate-fade-in">
      <div className="p-5">
        {/* Route Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
            <TrainIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <span className="truncate">{from}</span>
              <span className="text-muted-foreground">→</span>
              <span className="truncate">{to}</span>
            </div>
            <div className="text-sm text-muted-foreground">{trainType}</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{distance} {t('common.km')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{duration}</span>
          </div>
        </div>

        {/* Timetable Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-3 px-4 rounded-lg bg-muted text-sm font-medium text-foreground hover:bg-muted/80 transition-colors mb-4"
        >
          <span>{t('trains.timetable')}</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </button>

        {/* Timetable Content */}
        {isExpanded && (
          <div className="mb-4 rounded-lg bg-muted/50 overflow-hidden animate-fade-in">
            <div className="grid grid-cols-3 gap-2 p-3 text-xs font-semibold text-muted-foreground border-b border-border">
              <span>Departure</span>
              <span>Arrival</span>
              <span>Train</span>
            </div>
            {timetable.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-2 p-3 text-sm text-foreground border-b border-border last:border-0"
              >
                <span className="font-medium">{item.departure}</span>
                <span className="font-medium">{item.arrival}</span>
                <span className="text-muted-foreground">{item.train}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <Button
          onClick={handleEnquiry}
          variant="whatsapp"
          size="lg"
          className="w-full"
        >
          <MessageCircle className="w-5 h-5" />
          {t('trains.enquire')}
        </Button>
      </div>
    </div>
  );
};

export default RouteCard;
