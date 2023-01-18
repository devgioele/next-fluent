import type { AppProps } from 'next/app';
import { appWithLocalization } from 'next-fluent-next';
import { ReactElement } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithLocalization(MyApp);
