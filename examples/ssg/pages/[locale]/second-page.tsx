import Link from 'next/link';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useLocalization } from 'next-fluent-next';
import { serverSideTranslations } from 'next-fluent-server';
import {
  getStaticPaths /*, makeStaticProps*/,
  getI18nProps,
} from 'lib/getStatic';

type Props = {
  // Add custom props here
};

const SecondPage = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { l10n } = useLocalization();

  return (
    <>
      <main>
        <Header
          heading={l10n.getString('second-page-h1')}
          title={l10n.getString('second-page-title')}
        />
        <Link href='/'>
          <button type='button'>
            {l10n.getString('second-page-back-to-home')}
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default SecondPage;

// const getStaticProps = makeStaticProps(['second-page', 'common', 'footer'])
// export { getStaticPaths, getStaticProps }

// or if you want to merge the i18n props with other props...
export { getStaticPaths };
export const getStaticProps = async (ctx) => {
  // some data fetched from anywhere...
  const someOtherData = 'hello world';
  return {
    props: {
      ...(await getI18nProps(ctx, ['second-page', 'common', 'footer'])),
      someOtherData,
    },
  };
};
