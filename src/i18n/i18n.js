import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '../utils/storage/asyncStorage';
import { en, vi } from './locales';
import { LANGUAGE } from '../constants';

export const initI18n = async () => {
  try {
    const language = (await AsyncStorage.getLanguage()) || LANGUAGE.EN;

    await i18n.use(initReactI18next).init({
      fallbackLng: LANGUAGE.EN,
      lng: language,
      load: 'languageOnly',
      resources: {
        vi,
        en,
      },

      ns: [
        'notification',
        'authentication',
        'tab_navigator',
        'home',
        'browse',
        'course',
        'download',
        'search',
        'settings'
      ],
      defaultNS: 'common',

      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
        wait: false,
      },
    });
  } catch (e) {
    console.log('Error i18n', e);
    throw e;
  }
};

export default i18n;
