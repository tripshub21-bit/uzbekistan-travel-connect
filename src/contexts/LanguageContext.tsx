import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface Translations {
  [key: string]: {
    en: string;
    ru: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ru: 'Главная' },
  'nav.trains': { en: 'Train Tickets', ru: 'Билеты на поезд' },
  'nav.transfers': { en: 'Private Transfers', ru: 'Частные трансферы' },
  'nav.about': { en: 'About Us', ru: 'О нас' },
  'nav.contact': { en: 'Contact', ru: 'Контакты' },

  // Hero
  'hero.title': { en: 'Fast Trains & Private Transfers', ru: 'Скоростные поезда и частные трансферы' },
  'hero.subtitle': { en: 'in Uzbekistan', ru: 'в Узбекистане' },
  'hero.description': { en: 'Book high-speed trains and comfortable private transfers across Uzbekistan', ru: 'Бронируйте скоростные поезда и комфортные частные трансферы по Узбекистану' },
  'hero.trainButton': { en: 'Train Tickets', ru: 'Билеты на поезд' },
  'hero.transferButton': { en: 'Private Transfers', ru: 'Частные трансферы' },

  // Train Page
  'trains.title': { en: 'Train Tickets', ru: 'Билеты на поезд' },
  'trains.subtitle': { en: 'High-speed trains across Uzbekistan', ru: 'Скоростные поезда по Узбекистану' },
  'trains.distance': { en: 'Distance', ru: 'Расстояние' },
  'trains.duration': { en: 'Duration', ru: 'Время в пути' },
  'trains.trainType': { en: 'Train Type', ru: 'Тип поезда' },
  'trains.timetable': { en: 'View Timetable', ru: 'Расписание' },
  'trains.enquire': { en: 'Enquire via WhatsApp', ru: 'Запрос через WhatsApp' },
  'trains.departure': { en: 'Departure', ru: 'Отправление' },
  'trains.arrival': { en: 'Arrival', ru: 'Прибытие' },
  'trains.note': { en: 'Note', ru: 'Прим.' },
  'trains.weekendOnly': { en: 'Fri-Sat-Sun', ru: 'Пт-Сб-Вс' },

  // Transfers Page
  'transfers.title': { en: 'Private Transfers', ru: 'Частные трансферы' },
  'transfers.subtitle': { en: 'Comfortable door-to-door service', ru: 'Комфортный сервис от двери до двери' },
  'transfers.sedan': { en: 'Sedan', ru: 'Седан' },
  'transfers.minivan': { en: 'Minivan', ru: 'Минивэн' },
  'transfers.minibus': { en: 'Minibus', ru: 'Микроавтобус' },
  'transfers.passengers': { en: 'passengers', ru: 'пассажиров' },
  'transfers.book': { en: 'Book Private Transfer via WhatsApp', ru: 'Забронировать через WhatsApp' },
  'transfers.viceVersa': { en: 'All transfers available in reverse direction on request', ru: 'Все трансферы доступны в обратном направлении по запросу' },
  'transfers.customTitle': { en: 'Custom Route Request', ru: 'Запрос на другой маршрут' },
  'transfers.customSubtitle': { en: 'Request a transfer for any destination', ru: 'Закажите трансфер в любое место' },
  'transfers.customFrom': { en: 'Pickup Location', ru: 'Место отправления' },
  'transfers.customTo': { en: 'Destination', ru: 'Место назначения' },
  'transfers.customNotes': { en: 'Additional notes (optional)', ru: 'Дополнительные пожелания (необязательно)' },
  'transfers.customSubmit': { en: 'Request via WhatsApp', ru: 'Отправить запрос через WhatsApp' },

  // About Page
  'about.title': { en: 'About JamTripsGo', ru: 'О компании JamTripsGo' },
  'about.subtitle': { en: 'Your trusted travel partner in Uzbekistan', ru: 'Ваш надёжный партнёр по путешествиям в Узбекистане' },
  'about.local': { en: 'Local Expertise', ru: 'Местный опыт' },
  'about.localDesc': { en: 'Deep knowledge of Uzbekistan\'s routes and attractions', ru: 'Глубокое знание маршрутов и достопримечательностей Узбекистана' },
  'about.drivers': { en: 'Reliable Drivers', ru: 'Надёжные водители' },
  'about.driversDesc': { en: 'Professional, licensed drivers with excellent service', ru: 'Профессиональные лицензированные водители с отличным сервисом' },
  'about.comfort': { en: 'Comfortable Vehicles', ru: 'Комфортные автомобили' },
  'about.comfortDesc': { en: 'Modern, air-conditioned vehicles for your journey', ru: 'Современные автомобили с кондиционером для вашего путешествия' },
  'about.support': { en: 'Tourist Support', ru: 'Поддержка туристов' },
  'about.supportDesc': { en: '24/7 assistance for all your travel needs', ru: 'Круглосуточная помощь для всех ваших потребностей' },

  // Contact Page
  'contact.title': { en: 'Contact Us', ru: 'Свяжитесь с нами' },
  'contact.subtitle': { en: 'We\'re here to help with your travel plans', ru: 'Мы готовы помочь с вашими планами путешествия' },
  'contact.name': { en: 'Your Name', ru: 'Ваше имя' },
  'contact.date': { en: 'Travel Date', ru: 'Дата поездки' },
  'contact.route': { en: 'Route', ru: 'Маршрут' },
  'contact.passengers': { en: 'Number of Passengers', ru: 'Количество пассажиров' },
  'contact.message': { en: 'Message', ru: 'Сообщение' },
  'contact.send': { en: 'Send via WhatsApp', ru: 'Отправить через WhatsApp' },
  'contact.call': { en: 'Call Us', ru: 'Позвонить' },
  'contact.whatsapp': { en: 'WhatsApp', ru: 'WhatsApp' },

  // Common
  'common.km': { en: 'km', ru: 'км' },
  'common.hours': { en: 'hours', ru: 'часов' },
  'common.chat': { en: 'Chat on WhatsApp', ru: 'Чат в WhatsApp' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
