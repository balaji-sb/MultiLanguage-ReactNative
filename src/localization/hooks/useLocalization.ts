import {useTranslation} from 'react-i18next';

export const useLocalization = () => {
  const {t, i18n, ready} = useTranslation();
  return {locale: t, i18n, isReady: ready};
};
