import React from 'react';
import { MapPin, Users, Car, Headphones, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: t('about.local'),
      description: t('about.localDesc'),
    },
    {
      icon: Users,
      title: t('about.drivers'),
      description: t('about.driversDesc'),
    },
    {
      icon: Car,
      title: t('about.comfort'),
      description: t('about.comfortDesc'),
    },
    {
      icon: Headphones,
      title: t('about.support'),
      description: t('about.supportDesc'),
    },
  ];

  const stats = [
    { value: '5000+', label: 'Happy Tourists' },
    { value: '50+', label: 'Vehicles' },
    { value: '10+', label: 'Cities' },
    { value: '24/7', label: 'Support' },
  ];

  const benefits = [
    'Licensed and insured drivers',
    'Modern, air-conditioned vehicles',
    'Flexible booking options',
    'Competitive pricing',
    'English and Russian speaking guides',
    'Child seats available on request',
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 bg-background">
      {/* Header */}
      <div className="container px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('about.title')}</h1>
          <p className="text-muted-foreground">{t('about.subtitle')}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 shadow-card border border-border text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-muted py-10">
        <div className="container px-4">
          <h2 className="text-xl font-bold text-center text-foreground mb-6">
            Why Travel With Us
          </h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card border border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits List */}
      <div className="container px-4 py-10">
        <h2 className="text-xl font-bold text-center text-foreground mb-6">
          What We Offer
        </h2>
        <div className="bg-card rounded-xl p-6 shadow-card border border-border">
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="container px-4 pb-8">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 text-center text-primary-foreground">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-lg font-semibold mb-1">Trusted by Travelers</p>
          <p className="text-sm opacity-90">
            Rated 4.9/5 by our customers on TripAdvisor
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
