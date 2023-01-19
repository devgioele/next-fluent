import pkg from 'next-fluent-next/package.json';
import { Localized } from 'next-fluent-next';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer>
      <Localized id='footer-description'>
        <p />
      </Localized>
      <p>next-fluent v{pkg.version}</p>
      <Localized
        id='footer-help-fluent'
        elems={{
          redirect: <a href='https://projectfluent.com' target='_new' />,
        }}
      >
        <p
          style={{
            fontSize: 'smaller',
            fontStyle: 'italic',
            marginTop: 20,
          }}
        />
      </Localized>
    </footer>
  );
};
