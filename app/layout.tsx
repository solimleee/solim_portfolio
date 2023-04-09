/* eslint-disable @next/next/no-script-component-in-head */
'use client';

import styled, { ThemeProvider } from 'styled-components';
import './globals.css';
import StyledComponentsRegistry from 'lib/registry';
import { Inter, Roboto, Noto_Sans_KR } from 'next/font/google';
import { theme } from 'styles/theme';
import Script from 'next/script';
import Head from 'next/head';

// export const metadata = {
// title: '이소림-포트폴리오',
// };

// const homemadeApple = Roboto({
//   subsets: ['latin'],
//   weight: '200 300',
//   display: 'swap',
// });

const notoSansKr = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  fallback: [
    // 디자이너분과 상의한 폴백 폰트 넣으시면 됩니다
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    // 'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={notoSansKr.className}>
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
  width: 100%;
  margin: auto auto;
  border: 1px solid red;

  @media (min-width: 1024px) {
    max-width: 60%;
    border: 1px solid blue;
    margin: auto auto;
  }
  @media (min-width: 1920px) {
    max-width: 40%;
    border: 1px solid green;
    margin: auto auto;
  }
`;
