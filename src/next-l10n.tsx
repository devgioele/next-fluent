import 'intl-polyfill';
import React from 'react';
import {
  LocalizationProvider,
  ReactLocalization,
  MarkupParser,
} from '@fluent/react';
import { AppProps } from 'next/app';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { FluentBundle, FluentResource } from '@fluent/bundle';
import * as cheerio from 'cheerio';
import type { AnyNode } from 'cheerio';

// A generator function responsible for building the sequence
// of FluentBundle instances in the order of user's language
// preferences.
function* lazilyParsedBundles(fetchedMessages: Array<[string, string]>) {
  for (const [locale, messages] of fetchedMessages) {
    const resource = new FluentResource(messages);
    const bundle = new FluentBundle(locale);
    bundle.addResource(resource);
    yield bundle;
  }
}

/** @see https://dom.spec.whatwg.org/#dom-node-nodetype */
const toNodeName = (element: AnyNode): { name: string; data?: string } => {
  switch (element.nodeType) {
    case 1:
      return {
        name: element.name.toUpperCase(),
        data:
          element.type === 'directive'
            ? undefined
            : element.children.reduce(
                (prev, curr) => (curr.nodeType === 3 ? prev + curr.data : prev),
                ''
              ),
      };
    case 4:
      return { name: '#cdata-section' };
    case 8:
      return { name: '#comment' };
    case 9:
      return { name: '#document' };
    case 3:
    default:
      return { name: '#text', data: element.data };
  }
};

/** Parse the HTML markup.
Note: Nested elements are not supported.
*/
const parseMarkup: MarkupParser = (str) => {
  const $ = cheerio.load(str);
  const nodes = $('body')
    .contents()
    .toArray()
    .map((element) => {
      const { name, data } = toNodeName(element);
      return {
        nodeName: name,
        textContent: data,
      } as Node;
    });
  return nodes;
};

export const appWithLocalization = <Props extends AppProps>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const AppWithTranslation = (
    props: Props & { pageProps: Props['pageProps'] }
  ) => {
    const { l10nMessages } = props.pageProps;
    const bundles = lazilyParsedBundles(l10nMessages);
    const l10n = new ReactLocalization(bundles, parseMarkup);
    return l10n ? (
      <LocalizationProvider l10n={l10n}>
        <WrappedComponent {...props} />
      </LocalizationProvider>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  // Copy any static methods WrappedComponent had to the new AppWithTranslation
  // to not break compatibility with other wrappers that might be used in conjunction
  // https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
  return hoistNonReactStatics(AppWithTranslation, WrappedComponent);
};
