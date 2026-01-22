import React from 'react';
import { Car } from 'lucide-react';
import TransferCard from '@/components/TransferCard';
import CustomTransferForm from '@/components/CustomTransferForm';
import { useLanguage } from '@/contexts/LanguageContext';

const TransfersPage: React.FC = () => {
  const { t } = useLanguage();

  const vehicles = [
    { type: t('transfers.sedan'), capacity: '1-3' },
    { type: t('transfers.minivan'), capacity: '4-6' },
    { type: t('transfers.minibus'), capacity: '7-12' },
  ];

  const transferRoutes = [
    {
      from: 'Tashkent',
      to: 'Samarkand',
      distance: 300,
      duration: '4h 30min',
      vehicles,
    },
    {
      from: 'Samarkand',
      to: 'Bukhara',
      distance: 275,
      duration: '3h 30min',
      vehicles,
    },
    {
      from: 'Bukhara',
      to: 'Khiva',
      distance: 450,
      duration: '6h 00min',
      vehicles,
    },
    {
      from: 'Tashkent',
      to: 'Bukhara',
      distance: 575,
      duration: '7h 00min',
      vehicles,
    },
    {
      from: 'Samarkand',
      to: 'Shakhrisabz',
      distance: 90,
      duration: '1h 30min',
      vehicles,
    },
    {
      from: 'Tashkent',
      to: 'Fergana',
      distance: 300,
      duration: '4h 00min',
      vehicles,
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-20 sm:pb-24 bg-background">
      {/* Header */}
      <div className="container px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gold-gradient flex items-center justify-center">
            <Car className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t('transfers.title')}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">{t('transfers.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Transfer Cards */}
      <div className="container px-3 sm:px-4">
        {/* Vice Versa Note */}
        <div className="mb-4 p-3 sm:p-4 rounded-lg bg-secondary/10 border border-secondary/20">
          <p className="text-sm sm:text-base text-foreground text-center">
            <span className="font-medium text-secondary">✦</span>{' '}
            {t('transfers.viceVersa')}{' '}
            <span className="font-medium text-secondary">✦</span>
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {transferRoutes.map((route, index) => (
            <TransferCard
              key={index}
              from={route.from}
              to={route.to}
              distance={route.distance}
              duration={route.duration}
              vehicles={route.vehicles}
            />
          ))}
        </div>

        {/* Custom Transfer Request Form */}
        <div className="mt-6 sm:mt-8">
          <CustomTransferForm />
        </div>
      </div>
    </div>
  );
};

export default TransfersPage;
