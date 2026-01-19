import React from 'react';
import { Link } from 'react-router-dom';
import { Train, Car, ChevronRight, MapPin, Clock, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-uzbekistan.jpg';

const Index: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Train,
      title: 'High-Speed Trains',
      description: 'Afrosiyab & Sharq trains connecting major cities',
    },
    {
      icon: Car,
      title: 'Private Transfers',
      description: 'Comfortable door-to-door service',
    },
    {
      icon: Clock,
      title: 'Quick Booking',
      description: 'Instant response via WhatsApp',
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: 'Trusted by thousands of tourists',
    },
  ];

  const popularRoutes = [
    { from: 'Tashkent', to: 'Samarkand', type: 'train' },
    { from: 'Samarkand', to: 'Bukhara', type: 'train' },
    { from: 'Bukhara', to: 'Khiva', type: 'transfer' },
  ];

  return (
    <div className="min-h-screen pt-16 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Registan Square, Samarkand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4 py-12">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gradient mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-8 max-w-md mx-auto">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/trains" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full">
                  <Train className="w-5 h-5" />
                  {t('hero.trainButton')}
                </Button>
              </Link>
              <Link to="/transfers" className="w-full sm:w-auto">
                <Button variant="heroSecondary" size="lg" className="w-full">
                  <Car className="w-5 h-5" />
                  {t('hero.transferButton')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
          <ChevronRight className="w-8 h-8 text-primary-foreground/60 rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Why Choose JamTripsGo?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 shadow-card border border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Popular Routes
          </h2>
          <div className="space-y-3">
            {popularRoutes.map((route, index) => (
              <Link
                key={index}
                to={route.type === 'train' ? '/trains' : '/transfers'}
                className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-card border border-border hover:scale-[1.02] transition-transform"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  route.type === 'train' ? 'hero-gradient' : 'gold-gradient'
                }`}>
                  {route.type === 'train' ? (
                    <Train className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <Car className="w-6 h-6 text-secondary-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-foreground">
                    {route.from} → {route.to}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {route.type === 'train' ? 'High-speed train' : 'Private transfer'}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-background">
        <div className="container px-4 text-center">
          <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
            <Headphones className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            24/7 Tourist Support
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Our team is always ready to help you with your travel plans in Uzbekistan
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
