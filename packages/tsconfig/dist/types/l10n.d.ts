import 'intl-pluralrules';
import React from 'react';
import { AppProps } from 'next/app';
import hoistNonReactStatics from 'hoist-non-react-statics';
export declare const appWithLocalization: <Props extends AppProps<any>>(WrappedComponent: React.ComponentType<Props>) => ((props: Props & {
    pageProps: Props["pageProps"];
}) => JSX.Element) & hoistNonReactStatics.NonReactStatics<React.ComponentType<Props>, {}>;
//# sourceMappingURL=l10n.d.ts.map