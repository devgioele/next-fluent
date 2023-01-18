import languageDetector from 'next-language-detector';
import nextConfig from 'next.config';

if (!nextConfig.i18n) {
  throw new Error('i18n option not defined inside next config');
}

export default languageDetector({
  fallbackLng: nextConfig.i18n.defaultLocale,
  supportedLngs: nextConfig.i18n.locales,
});
