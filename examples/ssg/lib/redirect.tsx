import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from 'lib/languageDetector';

export const useRedirect = (to?: string) => {
  const router = useRouter();

  // Language detection
  useEffect(() => {
    const redirectPath = to || router.asPath;
    const detectedLng = languageDetector.detect();
    if (redirectPath.startsWith('/' + detectedLng) && router.route === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLng + router.route);
      return;
    }

    // If possible, save the language for faster future detection
    if (languageDetector.cache && detectedLng) {
      languageDetector.cache(detectedLng);
    }
    console.log(`Replacing ${detectedLng} with ${redirectPath}.`);
    router.replace('/' + detectedLng + redirectPath);
  }, [router, to]);

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};
