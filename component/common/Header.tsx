import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { useScrollEvent } from 'hook/useScrollEvent';
import { header_list } from 'model/headerlist';

function Header() {
  const pathname = usePathname();
  const scroll = useScrollEvent();
  const [menuOpen, setMenuOpen] = useState<any>(false);
  const [navClassList, setNavClassList] = useState<'hidden' | 'visible'>(
    'visible',
  );

  useEffect(() => {
    if (scroll.y < scroll.lastY) {
      setNavClassList('visible');
    } else if (scroll.y > 70) {
      setNavClassList('hidden');
    }
  }, [scroll.lastY, scroll.y]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen]);

  const copyURL = () => {
    let currentUrl = window.document.location.href;
    let t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = currentUrl;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);

    alert('링크가 복사되었습니다.');
  };

  return (
    <MainContainer ishidden={navClassList}>
      <Link href="/">👩🏻‍💻 Dev Solim</Link>
      <Image
        src={'/common/menu_icon.svg'}
        alt=""
        width="32"
        height="32"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <ModalContainer>
          <div className="be_modal" onClick={() => setMenuOpen(false)} />
          <div className="fe_modal">
            <div className="fe_header">
              <div className="row_wrap">
                <div className="icon_section" onClick={() => copyURL()}>
                  <Image
                    src="/common/link_icon.svg"
                    alt=""
                    width="25"
                    height="25"
                  />
                  링크 복사
                </div>
                {/* <a
                  className="icon_section"
                  href="/resume/resume_download_img.png"
                  download
                >
                  <Image
                    src="/common/download_icon.svg"
                    alt=""
                    width="25"
                    height="25"
                  />
                  이력서 다운로드
                </a> */}
              </div>
              <Image
                src={'/common/close_icon.svg'}
                alt=""
                width="32"
                height="32"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            {header_list.map((list: any, idx: number) => {
              return (
                <RouteContainer
                  route={pathname}
                  url={list.href}
                  key={idx}
                  href={list.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {list.link_text}
                </RouteContainer>
              );
            })}
          </div>
        </ModalContainer>
      )}
    </MainContainer>
  );
}

export default Header;

const MainContainer = styled.div<{ ishidden: any }>`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  left: 0;

  width: 100%;
  height: 55px;
  padding: 0 10px;

  background-color: ${theme.color.white};
  box-shadow: 0px 2px 5px ${theme.color.grayDC};
  visibility: ${(props) => props.ishidden};

  a {
    color: ${theme.color.black};
    font-weight: 500;
    text-decoration: none;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  .be_modal {
    width: 20%;
    background-color: rgba(102, 102, 102, 0.5);

    @media (min-width: 1024px) {
      width: 70%;
    }
  }
  .fe_modal {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    background-color: white;
    @media (min-width: 1024px) {
      width: 30%;
    }
  }
  .fe_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    padding: 0 10px;
    box-shadow: 0px 2px 5px ${theme.color.grayDC};
  }
  .row_wrap {
    display: flex;
  }
  .icon_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.7em;
    font-weight: 400;
    :first-child {
      margin-right: 10px;
    }
  }
`;

const RouteContainer = styled(Link)<{ route: any; url: any }>`
  padding: 12px 0px 10px 15px;
  font-size: 1.3rem;
  color: ${(props) =>
    props.route === props.url
      ? theme.color.accent
      : theme.color.gray97} !important;
  :hover {
    color: ${theme.color.accent} !important;
  }
  :first-of-type {
    padding: 30px 0px 10px 15px;
  }
`;
