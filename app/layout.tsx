'use client';

import './globals.css';

import Navbar from './src/components/Navbar';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import { ThemeProvider } from 'next-themes';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ThirdwebProvider desired chain id
  const desiredChainId = ChainId.Polygon;
  // Create a new query client
  const queryClient = new QueryClient();

  // font init

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={poppins.className}>
        <ThirdwebProvider desiredChainId={desiredChainId}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <Navbar />
              {children}
            </ThemeProvider>
          </QueryClientProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
