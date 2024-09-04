import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TidioWidget from '@/components/TidioWidget';
import { fetchPrices } from '@/contentful/fetchPrices';
import { ContentfulContextProvider } from '@/contexts/contentful-context';
import { getHustleClientSettings } from '@/hustleClientSettings';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'HustleAuto',
  description: 'Hustle for Superior Detailing',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hustleSettings = getHustleClientSettings();
  const prices = await fetchPrices({ preview: false });

  return (
    <html lang="en">
      <GoogleTagManager
        gtmId={hustleSettings.GOOGLE_TAG_MANAGER.CONTAINER_ID}
      />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ContentfulContextProvider prices={prices}>
          <Navbar />
          {children}
          <Footer />
        </ContentfulContextProvider>

        <TidioWidget />
        <VercelAnalytics />
      </body>
    </html>
  );
}
