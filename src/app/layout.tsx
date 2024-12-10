import type { Metadata } from 'next';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

import '@/styles/global.scss';

export const metadata: Metadata = {
  title: 'Travel Agency',
  description: 'Travel Agency by Solumzy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
