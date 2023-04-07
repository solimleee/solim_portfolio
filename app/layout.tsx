/* eslint-disable @next/next/no-script-component-in-head */
'use client';

import styled, { ThemeProvider } from 'styled-components';
import './globals.css';
import StyledComponentsRegistry from 'lib/registry';
import { Inter } from 'next/font/google';
import { theme } from 'styles/theme';
import Script from 'next/script';
import Head from 'next/head';

// export const metadata = {
// title: '이소림-포트폴리오',
// };
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={inter.className}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-S2LXH6YMYC"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S2LXH6YMYC', {
            page_path: window.location.pathname
          })`,
          }}
        />

        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Body>{children}</Body>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </html>
    </>
  );
}

const Body = styled.body`
  background-color: white;

  @media (min-width: 780px) {
    max-width: 600px;
    margin: auto auto;
  }
`;
