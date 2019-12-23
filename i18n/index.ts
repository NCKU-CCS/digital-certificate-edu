import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourceEn from './en.json';
import resourceZh from './zh.json';

const resources = {
  zh: {
    translation: resourceZh,
  },
  en: {
    translation: resourceEn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
  });

export default i18n;
