import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import Link from 'components/Link';
import { useLocalization } from 'next-fluent-next';
import { InferGetStaticPropsType } from 'next';

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { l10n } = useLocalization();

  return (
    <>
      <main>
        <Header
          heading={l10n.getString('h1')}
          title={l10n.getString('title')}
        />
        <div>
          <Link href='/'>
            <button type='button'>{l10n.getString('back-to-home')}</button>
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
