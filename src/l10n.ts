import { promises as fs } from 'fs';

async function fetchMessages(locale: string): Promise<[string, string]> {
  const response = await fs.readFile(`public/locales/${locale}.ftl`);
  const messages = response.toString();
  return [locale, messages];
}

export const serverSideTranslations = async (locale: string) => {
  // We only have one locale at a time, but we leave the code below
  // for the future possibility of having multiple locales at once
  const locales = [locale];
  const fetchedMessages = await Promise.all(locales.map(fetchMessages));
  return { l10nMessages: fetchedMessages };
};
