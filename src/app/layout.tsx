import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { ApolloWrapper } from '@/services/apollo-client/apollo-wrapper';

import '@/styles/global.scss';
import '@/styles/datepicker-custom.scss';
import '@solumzy/ui-lib-travel-agency/dist/index.css';

export const metadata: Metadata = {
  title: 'Travel Agency',
  description: 'Travel Agency by Solumzy',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <ApolloWrapper>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
