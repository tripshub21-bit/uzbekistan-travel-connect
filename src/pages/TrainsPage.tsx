import React from 'react';
import { Train } from 'lucide-react';
import RouteCard from '@/components/RouteCard';
import { useLanguage } from '@/contexts/LanguageContext';

const TrainsPage: React.FC = () => {
  const { t } = useLanguage();

  const trainRoutes = [
    {
      from: 'Tashkent',
      to: 'Samarkand',
      distance: 344,
      duration: '2h 10min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '06:10', arrival: '08:23', train: 'Afrosiyab' },
        { departure: '06:33', arrival: '08:46', train: 'Afrosiyab' },
        { departure: '07:28', arrival: '09:38', train: 'Afrosiyab 761' },
        { departure: '08:00', arrival: '10:25', train: 'Afrosiyab 765' },
        { departure: '08:30', arrival: '10:49', train: 'Afrosiyab' },
        { departure: '19:48', arrival: '22:13', train: 'Afrosiyab 763' },
      ],
    },
    {
      from: 'Tashkent',
      to: 'Bukhara',
      distance: 600,
      duration: '4h 00min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '07:28', arrival: '11:28', train: 'Afrosiyab 761' },
        { departure: '08:00', arrival: '12:00', train: 'Afrosiyab 765' },
        { departure: '14:00', arrival: '18:00', train: 'Afrosiyab 763' },
        { departure: '18:30', arrival: '22:55', train: 'Sharq 9' },
      ],
    },
    {
      from: 'Samarkand',
      to: 'Bukhara',
      distance: 270,
      duration: '1h 30min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '09:50', arrival: '11:28', train: 'Afrosiyab 761' },
        { departure: '10:22', arrival: '12:00', train: 'Afrosiyab 765' },
        { departure: '16:22', arrival: '18:00', train: 'Afrosiyab 763' },
        { departure: '21:02', arrival: '22:55', train: 'Sharq 9' },
      ],
    },
    {
      from: 'Bukhara',
      to: 'Khiva',
      distance: 450,
      duration: '5h 30min',
      trainType: 'Sharq',
      timetable: [
        { departure: '14:52', arrival: '20:27', train: 'Sharq 57' },
        { departure: '06:10', arrival: '11:45', train: 'Sharq 57' },
      ],
    },
    {
      from: 'Tashkent',
      to: 'Khiva',
      distance: 1050,
      duration: '8h 30min',
      trainType: 'Sharq',
      timetable: [
        { departure: '14:52', arrival: '23:22', train: 'Sharq 57' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 bg-background">
      {/* Header */}
      <div className="container px-4 py-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
            <Train className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{t('trains.title')}</h1>
            <p className="text-sm text-muted-foreground">{t('trains.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Route Cards */}
      <div className="container px-4">
        <div className="space-y-4">
          {trainRoutes.map((route, index) => (
            <RouteCard
              key={index}
              from={route.from}
              to={route.to}
              distance={route.distance}
              duration={route.duration}
              trainType={route.trainType}
              timetable={route.timetable}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainsPage;
