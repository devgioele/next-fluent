import { promises as fs } from 'fs';

async function fetchMessages(locale: string): Promise<[string, string]> {
  const response = await fs.readFile(`public/locales/${locale}.ftl`);
  const messages = response.toString();
  return [locale, messages];
}

export const serverSideTranslations = async (
  locale: string | string[] | undefined
) => {
  const locales = locale?.constructor === Array ? locale : [locale];
  const definedLocales: string[] = locales.filter((o): o is string => !!o);
  const fetchedMessages = await Promise.all(definedLocales.map(fetchMessages));
  return { l10nMessages: fetchedMessages };
};
