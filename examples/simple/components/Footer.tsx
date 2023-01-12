import pkg from 'next-fluent-next/package.json';
import { Localized, useLocalization } from 'next-fluent-next';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer>
      <Localized id='footer-description'>
        <p />
      </Localized>
      <p>next-fluent v{pkg.version}</p>
      <p
        style={{
          fontSize: 'smaller',
          fontStyle: 'italic',
          marginTop: 20,
        }}
      >
        <Localized
          id='footer-help-fluent'
          elems={{
            link: <a href='https://projectfluent.com' target='_new' />,
          }}
        ></Localized>
      </p>
    </footer>
  );
};
