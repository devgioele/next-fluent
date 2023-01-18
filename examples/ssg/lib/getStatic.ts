import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-fluent-server';
import nextConfig from 'next.config';
import { singleElement } from './common';

export const getL10nPaths = () =>
  nextConfig.i18n?.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  })) || [];

export const getStaticPaths = () => ({
  fallback: false,
  paths: getL10nPaths(),
});

export const getL10nProps = async (ctx: GetStaticPropsContext) => {
  const locale = singleElement(ctx?.params?.locale);
  return {
    ...(await serverSideTranslations(locale)),
  };
};

export const makeStaticProps = () => async (ctx: GetStaticPropsContext) => ({
  props: await getL10nProps(ctx),
});
