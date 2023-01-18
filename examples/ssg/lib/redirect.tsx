import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from 'lib/languageDetector';

export const useRedirect = (to?: string) => {
  const router = useRouter();

  // language detection
  useEffect(() => {
    to = to || router.asPath;
    const detectedLng = languageDetector.detect();
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLng + router.route);
      return;
    }

    // If possible, save the language for faster future access
    if (languageDetector.cache && detectedLng)
      languageDetector.cache(detectedLng);
    router.replace('/' + detectedLng + to);
  }, []);

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};
