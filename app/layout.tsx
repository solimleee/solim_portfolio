'use client';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import styled from 'styled-components';
import StyledComponentsRegistry from 'lib/registry';
import Header from 'component/common/Header';
import Footer from 'component/common/Footer';
import './globals.css';

const notoSansKr = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSansKr.className}>
      {/* <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id="
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '', {
            page_path: window.location.pathname
          })`,
          }}
        /> */}
      <StyledComponentsRegistry>
        <Body>
          <Header />
          {children}
        </Body>{' '}
        <Footer />
      </StyledComponentsRegistry>
    </html>
  );
}

const Body = styled.body`
  width: 100%;
  height: auto;
  min-height: 100%;
  margin: auto auto;
  padding: 0px 25px;

  @media (min-width: 1024px) {
    max-width: 60%;
    padding: 0px 60px;
  }

  @media (min-width: 1920px) {
    max-width: 1200px;
    padding: 0px 96px;
  }
`;
