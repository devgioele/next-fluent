import Link from 'next/link';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useLocalization } from 'next-fluent-next';
import {
  getStaticPaths /*, makeStaticProps*/,
  getL10nProps,
} from 'lib/getStatic';

const SecondPage = ({
  someOtherData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { l10n } = useLocalization();

  return (
    <>
      <main>
        <Header
          heading={l10n.getString('second-page-h1')}
          title={l10n.getString('second-page-title')}
        />
        <Link href='/'>
          <button type='button'>{l10n.getString('back-to-home')}</button>
        </Link>
        <p>{someOtherData}</p>
      </main>
      <Footer />
    </>
  );
};

export default SecondPage;

// const getStaticProps = makeStaticProps(['second-page', 'common', 'footer'])
// export { getStaticPaths, getStaticProps }

// or if you want to merge the i18n props with other props...
export { getStaticPaths };
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  // some data fetched from anywhere...
  const someOtherData = 'hello world';
  return {
    props: {
      ...(await getL10nProps(ctx)),
      someOtherData,
    },
  };
};
