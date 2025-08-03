import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationVI from './locales/vn/translation.json';

const resources = {
  en: { translation: translationEN },
  vn: { translation: translationVI },
};

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'vn',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;