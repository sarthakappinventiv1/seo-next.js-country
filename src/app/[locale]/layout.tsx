// import {NextIntlClientProvider, hasLocale} from 'next-intl';
// import {notFound} from 'next/navigation';
// import {routing} from '@/i18n/routing';
 
// export default async function LocaleLayout({
//   children,
//   params
// }: {
//   children: React.ReactNode;
//   params: Promise<{locale: string}>;
// }) {
//   // Ensure that the incoming `locale` is valid
//   const {locale} = await params;
//   if (!hasLocale(routing.locales, locale)) {
//     notFound();
//   }
 
//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider>{children}</NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }










import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Set direction based on locale
  const dir = locale === 'ar'  ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
