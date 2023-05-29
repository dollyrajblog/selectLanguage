import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './english.json';
import french from './french.json';
import italian from './italian.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: english,
    it: italian,
    fr: french,
  },
  react: {
    useSuspense: false,
  },
});
export default i18next;
