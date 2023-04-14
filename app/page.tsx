'use client';

import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import MyInfo from 'component/MyInfo';
import Intro from 'component/Intro';
import Experience from 'component/Experience';
import Career from 'component/Career';
import SubExperience from 'component/SubExperience';

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
          <Divider />
          <Career />
          <Divider />
          <Experience />
          <Divider />
          <SubExperience />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

const MainContainer = styled.div`
  height: 100%;
  padding-top: 85px;
  margin: auto auto;

  @media (max-width: 1024px) {
    width: fit-content;
  }
`;

const Divider = styled.div`
  height: 1px;
  margin: 42px 0px;
  background-color: ${theme.color.grayDC};
`;
