import React from 'react';
import { Train } from 'lucide-react';
import RouteCard from '@/components/RouteCard';
import { useLanguage } from '@/contexts/LanguageContext';

const TrainsPage: React.FC = () => {
  const { t } = useLanguage();

  // Afrosiyab high-speed train routes
  const afrosiyabRoutes = [
    {
      from: 'Tashkent',
      to: 'Samarkand',
      distance: 344,
      duration: '2h 10min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '06:10', arrival: '08:23', train: 'Afrosiyab', note: 'trains.weekendOnly' },
        { departure: '06:33', arrival: '08:46', train: 'Afrosiyab' },
        { departure: '07:30', arrival: '09:43', train: 'Afrosiyab' },
        { departure: '08:00', arrival: '10:25', train: 'Afrosiyab' },
        { departure: '08:30', arrival: '10:49', train: 'Afrosiyab' },
        { departure: '19:48', arrival: '22:13', train: 'Afrosiyab' },
      ],
    },
    {
      from: 'Samarkand',
      to: 'Tashkent',
      distance: 344,
      duration: '2h 15min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '05:21', arrival: '07:42', train: 'Afrosiyab' },
        { departure: '16:56', arrival: '19:17', train: 'Afrosiyab' },
        { departure: '17:40', arrival: '20:07', train: 'Afrosiyab' },
        { departure: '18:15', arrival: '20:30', train: 'Afrosiyab' },
        { departure: '18:49', arrival: '21:04', train: 'Afrosiyab' },
        { departure: '20:01', arrival: '22:16', train: 'Afrosiyab', note: 'trains.weekendOnly' },
      ],
    },
    {
      from: 'Tashkent',
      to: 'Bukhara',
      distance: 600,
      duration: '4h 10min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '06:10', arrival: '10:16', train: 'Afrosiyab', note: 'trains.weekendOnly' },
        { departure: '07:30', arrival: '11:42', train: 'Afrosiyab' },
        { departure: '08:30', arrival: '12:42', train: 'Afrosiyab' },
        { departure: '19:48', arrival: '00:06', train: 'Afrosiyab' },
      ],
    },
    {
      from: 'Bukhara',
      to: 'Tashkent',
      distance: 600,
      duration: '4h 15min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '03:27', arrival: '07:42', train: 'Afrosiyab' },
        { departure: '15:03', arrival: '19:17', train: 'Afrosiyab' },
        { departure: '16:16', arrival: '20:30', train: 'Afrosiyab' },
        { departure: '18:08', arrival: '22:16', train: 'Afrosiyab', note: 'trains.weekendOnly' },
      ],
    },
    {
      from: 'Samarkand',
      to: 'Bukhara',
      distance: 270,
      duration: '1h 45min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '08:33', arrival: '10:16', train: 'Afrosiyab', note: 'trains.weekendOnly' },
        { departure: '09:53', arrival: '11:42', train: 'Afrosiyab' },
        { departure: '10:59', arrival: '12:42', train: 'Afrosiyab' },
        { departure: '22:23', arrival: '00:06', train: 'Afrosiyab' },
      ],
    },
    {
      from: 'Bukhara',
      to: 'Samarkand',
      distance: 270,
      duration: '1h 45min',
      trainType: 'Afrosiyab',
      timetable: [
        { departure: '03:27', arrival: '05:11', train: 'Afrosiyab' },
        { departure: '15:03', arrival: '16:46', train: 'Afrosiyab' },
        { departure: '16:16', arrival: '18:05', train: 'Afrosiyab' },
        { departure: '18:08', arrival: '19:51', train: 'Afrosiyab', note: 'trains.weekendOnly' },
      ],
    },
  ];

  // Sharq train routes
  const sharqRoutes = [
    {
      from: 'Tashkent',
      to: 'Samarkand',
      distance: 344,
      duration: '3h 05min',
      trainType: 'Sharq',
      timetable: [
        { departure: '08:37', arrival: '11:42', train: 'Sharq' },
        { departure: '20:32', arrival: '23:41', train: 'Sharq' },
      ],
    },
    {
      from: 'Samarkand',
      to: 'Tashkent',
      distance: 344,
      duration: '3h 45min',
      trainType: 'Sharq',
      timetable: [
        { departure: '08:06', arrival: '12:01', train: 'Sharq' },
        { departure: '19:23', arrival: '23:06', train: 'Sharq' },
      ],
    },
    {
      from: 'Tashkent',
      to: 'Bukhara',
      distance: 600,
      duration: '5h 40min',
      trainType: 'Sharq',
      timetable: [
        { departure: '08:37', arrival: '14:18', train: 'Sharq' },
        { departure: '20:32', arrival: '02:29', train: 'Sharq' },
      ],
    },
    {
      from: 'Bukhara',
      to: 'Tashkent',
      distance: 600,
      duration: '6h 15min',
      trainType: 'Sharq',
      timetable: [
        { departure: '05:17', arrival: '12:01', train: 'Sharq' },
        { departure: '16:51', arrival: '23:06', train: 'Sharq' },
      ],
    },
    {
      from: 'Samarkand',
      to: 'Bukhara',
      distance: 270,
      duration: '2h 15min',
      trainType: 'Sharq',
      timetable: [
        { departure: '00:01', arrival: '02:29', train: 'Sharq' },
        { departure: '11:56', arrival: '14:12', train: 'Sharq' },
      ],
    },
    {
      from: 'Bukhara',
      to: 'Samarkand',
      distance: 270,
      duration: '2h 20min',
      trainType: 'Sharq',
      timetable: [
        { departure: '05:17', arrival: '07:38', train: 'Sharq' },
        { departure: '16:51', arrival: '19:13', train: 'Sharq' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 bg-background">
      {/* Afrosiyab Section */}
      <div className="container px-4 py-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
            <Train className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Afrosiyab</h1>
            <p className="text-sm text-muted-foreground">{t('trains.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="container px-4">
        <div className="space-y-4">
          {afrosiyabRoutes.map((route, index) => (
            <RouteCard
              key={`afrosiyab-${index}`}
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

      {/* Sharq Section */}
      <div className="container px-4 py-6 mt-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
            <Train className="w-6 h-6 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Sharq</h1>
            <p className="text-sm text-muted-foreground">{t('trains.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="container px-4">
        <div className="space-y-4">
          {sharqRoutes.map((route, index) => (
            <RouteCard
              key={`sharq-${index}`}
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
