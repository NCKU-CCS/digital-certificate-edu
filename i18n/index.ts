import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import resourceEn from './en.json';
import resourceCh from './ch.json';

const resources = {
  ch: {
    translation: resourceCh,
  },
  en: {
    translation: resourceEn,
  },
};

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources,
    lng: 'ch',
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
  });

export default i18n;
