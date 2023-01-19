import { appWithLocalization } from 'next-fluent-next';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithLocalization(MyApp);
