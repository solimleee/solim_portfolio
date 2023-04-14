'use client';

import styled from 'styled-components';
import './globals.css';
import StyledComponentsRegistry from 'lib/registry';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

import Header from 'component/common/Header';

declare global {
  interface Window {
    Kakao: any;
  }
}

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
      <Head>
        <head>
          <title>layout</title>
        </head>
        {/* <Script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></Script> */}
      </Head>
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
        </Body>
      </StyledComponentsRegistry>
    </html>
  );
}

const Body = styled.body`
  width: 100%;
  height: 100%;
  margin: auto auto;
  padding: 0px 25px;

  @media (min-width: 1024px) {
    max-width: 60%;
    padding: 0px 60px;
  }

  @media (min-width: 1920px) {
    max-width: 800px;
    padding: 0px 96px;
  }
`;

// const Header = styled.div`
//   display: flex;
//   position: fixed;
//   align-items: center;
//   justify-content: space-between;
//   left: 0;

//   width: 100%;
//   height: 50px;
//   padding: 0 10px;

//   background-color: white;
//   box-shadow: 0px 2px 5px ${theme.color.grayDC};

//   font-weight: 600;
// `;
