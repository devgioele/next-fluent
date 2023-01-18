import Link from 'next/link';
import { useRouter } from 'next/router';
import type { InferGetStaticPropsType } from 'next';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Localized, useLocalization } from 'next-fluent-next';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { l10n } = useLocalization();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === 'en' ? 'de' : 'en';

  return (
    <>
      <main>
        <Header
          heading={l10n.getString('h1')}
          title={l10n.getString('title')}
        />
        <div style={{ display: 'inline-flex', width: '90%' }}>
          <div style={{ width: '33%' }}>
            <Localized id='blog-app-dir-question'>
              <h3 style={{ minHeight: 70 }} />
            </Localized>
            <Localized
              id='blog-app-dir-answer'
              elems={{
                redirect: <Link href='https://nextjs.org' />,
              }}
            >
              <p />
            </Localized>
            <a href={l10n.getString('blog-app-dir-link')}>
              <img
                style={{ width: '50%' }}
                src='https://locize.com/blog/next-13-app-dir-i18n/next-13-app-dir-i18n.jpg'
              />
            </a>
          </div>
          <div style={{ width: '33%' }}>
            <Localized id='blog-optimized-question'>
              <h3 style={{ minHeight: 70 }} />
            </Localized>
            <Localized
              id='blog-optimized-answer'
              elems={{
                redirect: <Link href={l10n.getString('blog-optimized-link')} />,
              }}
            >
              <p />
            </Localized>
            <a href={l10n.getString('blog-optimized-link')}>
              <img
                style={{ width: '50%' }}
                src='https://locize.com/blog/next-i18next/next-i18next.jpg'
              />
            </a>
          </div>
          <div style={{ width: '33%' }}>
            <h3 style={{ minHeight: 70 }}>
              {l10n.getString('blog-ssg-question')}
            </h3>
            <Localized
              id='blog-ssg-answer'
              elems={{
                redirect: <Link href={l10n.getString('blog-ssg-link')} />,
              }}
            >
              <p />
            </Localized>
            <a href={l10n.getString('blog-ssg-link')}>
              <img
                style={{ width: '50%' }}
                src='https://locize.com/blog/next-i18n-static/title.jpg'
              />
            </a>
          </div>
        </div>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href='/' locale={changeTo}>
            <button>{l10n.getString('change-locale', { changeTo })}</button>
          </Link>
          {/* Alternative language change without using Link component
          <button onClick={() => onToggleLanguageClick(changeTo)}>
            {l10n.getString('change-locale', { changeTo })}
          </button>
          */}
          <Link href='/second-page'>
            <button type='button'>{l10n.getString('to-second-page')}</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
