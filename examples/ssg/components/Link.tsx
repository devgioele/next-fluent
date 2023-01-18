import React, { FC, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { singleElement } from 'lib/common';

type L10nLinkProps = LinkProps & {
  children?: ReactElement;
  skipLocaleHandling?: boolean;
};

const L10nLink: FC<L10nLinkProps> = ({
  children,
  skipLocaleHandling = false,
  locale,
  href,
  ...rest
}) => {
  const router = useRouter();

  const definedLocale = locale || singleElement(router.query.locale) || '';

  let parsedHref = typeof href === 'string' ? href : href.href || router.asPath;
  // Do not localize external links
  if (parsedHref.indexOf('http') === 0) skipLocaleHandling = true;
  if (definedLocale && !skipLocaleHandling) {
    parsedHref = parsedHref
      ? `/${definedLocale}${parsedHref}`
      : router.pathname.replace('[locale]', definedLocale);
  }

  return (
    <>
      <Link href={href} legacyBehavior>
        <a {...rest}>{children}</a>
      </Link>
      {/* TODO: Use the new Link behavior if it works:
      <Link href={href} {...rest}>
        {children}
      </Link>*/}
    </>
  );
};

export default L10nLink;
