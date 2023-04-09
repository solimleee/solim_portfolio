'use client';
import Script from 'next/script';

import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import MyInfo from 'component/MyInfo';
import Intro from 'component/Intro';

export default function Home() {
  return (
    <>
      {/* <Script
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
      /> */}
      <ThemeProvider theme={theme}>
        <MainContainer>
          <MyInfo />
          <Divider />
          <Intro />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

const MainContainer = styled.div`
  background-color: white;
  height: 100vh;
`;

const Divider = styled.div`
  background-color: ${theme.color.grayDC};
  margin: 42px 0px;
  height: 1px;
`;
