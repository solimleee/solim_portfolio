'use client';

import styled, { ThemeProvider } from 'styled-components';
import './globals.css';
import StyledComponentsRegistry from 'lib/registry';
import { Inter } from 'next/font/google';
import { theme } from 'styles/theme';

// export const metadata = {
//   title: '이소림-포트폴리오',
// };
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <Body>{children}</Body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}

const Body = styled.body`
  background-color: white;

  @media (min-width: 780px) {
    max-width: 600px;
    margin: auto auto;
  }
`;
