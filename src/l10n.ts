import { promises as fs } from 'fs';

async function fetchMessages(locale: string): Promise<[string, string]> {
  const response = await fs.readFile(`public/locales/${locale}.ftl`);
  const messages = response.toString();
  return [locale, messages];
}

export const serverSideTranslations = async (locale: string | undefined) => {
  // We only have one locale at a time, but we leave the code below
  // for the future possibility of having multiple locales at once
  const locales = [locale];
  const definedLocales: string[] = locales.filter((o): o is string => !!o);
  const fetchedMessages = await Promise.all(definedLocales.map(fetchMessages));
  return { l10nMessages: fetchedMessages };
};
