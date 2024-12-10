import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/styles/global.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
