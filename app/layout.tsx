'use client';
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
      <StyledComponentsRegistry>
        <Body>
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `(function() {
            var w = window;
            if (w.ChannelIO) {
              return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
            }
            var ch = function() {
              ch.c(arguments);
            };
            ch.q = [];
            ch.c = function(args) {
              ch.q.push(args);
            };
            w.ChannelIO = ch;
            function l() {
              if (w.ChannelIOInitialized) {
                return;
              }
              w.ChannelIOInitialized = true;
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
              s.charset = 'UTF-8';
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            }
            if (document.readyState === 'complete') {
              l();
            } else if (window.attachEvent) {
              window.attachEvent('onload', l);
            } else {
              window.addEventListener('DOMContentLoaded', l, false);
              window.addEventListener('load', l, false);
            }
          })();
          ChannelIO('boot', {
            "pluginKey":  '${process.env.NEXT_PUBLIC_CHANNELIO_PLIGIN_KEY}'
          });
          `,
            }}
          />
          <Header />
          {children}
          <Footer />
        </Body>
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
