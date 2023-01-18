import languageDetector from 'lib/languageDetector';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';
import { singleElement } from 'lib/common';

type LanguageSwitchLinkProps = Pick<LinkProps, 'href' | 'locale'>;

const LanguageSwitchLink: FC<LanguageSwitchLinkProps> = ({ locale, href }) => {
  const router = useRouter();

  const definedLocale = locale || singleElement(router.query.locale) || '';

  let parsedHref = typeof href === 'string' ? href : href.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if(k==='locale') {
      pName = pName.replace('[locale]', definedLocale);
      return;
    }
    pName = pName.replace(`[${k}]`, singleElement(router.query[k]) || '');
  });
  if (definedLocale)
    {parsedHref = parsedHref ? `/${definedLocale}${parsedHref}` : pName;}

  return (
    <Link href={parsedHref}>
      <button
        style={{ fontSize: 'small' }}
        onClick={() =>
          languageDetector.cache && languageDetector.cache(definedLocale)
        }
      >
        {locale}
      </button>
    </Link>
  );
};

export default LanguageSwitchLink;
