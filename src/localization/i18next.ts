import i18next from 'i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import {initReactI18next} from 'react-i18next';
import {languageResources} from './languageResources';

export const defaultNS = 'ns1';

i18next.use(initReactI18next).use(intervalPlural).init({
  debug: true,
  fallbackLng: 'en',
  resources: languageResources,
  defaultNS,
  compatibilityJSON: 'v3',
});
