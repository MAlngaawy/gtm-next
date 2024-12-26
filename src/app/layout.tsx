import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { GoogleTagManager } from '@next/third-parties/google';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'PickAppo',
  description: 'PickAppo Official Website',
  openGraph: {
    title: 'Opengraph Title',
    description: 'Opengraph Desc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = {};
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          <main className="container mx-auto">{children}</main>
          <GoogleTagManager gtmId="GTM-5G8KTZVJ" />
        </MantineProvider>
      </body>
    </html>
  );
}
