import { useState } from 'react';

import styled from 'styled-components';
import Image from 'next/image';

import IcClose from 'public/close_icon.svg';
import IcMenu from 'public/menu_icon.svg';
import IcMoon from 'public/moon.png';
import IcSun from 'public/sun.png';
import { theme } from 'styles/theme';

function Header() {
  const [menuOpen, setMenuOpen] = useState<any>(false);
  const [theme, setTheme] = useState<any>(false);

  return (
    <MainContainer>
      👩🏻‍💻 Dev Solim
      <Image
        src={IcMenu}
        alt=""
        width="32"
        height="32"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <ModalContainer themes={theme}>
          <div className="be_modal" onClick={() => setMenuOpen(false)} />
          <div className="fe_modal">
            <div className="fe_header">
              {/* <div className="toggle">
                <Image
                  onClick={() => {
                    setTheme(!theme);
                  }}
                  style={{ animation: 'rotation 10s infinite linear' }}
                  src={theme ? IcMoon : IcSun}
                  alt=""
                  width="32"
                  height="32"
                />
              </div> */}
              <Image
                src={IcClose}
                alt=""
                width="32"
                height="32"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </ModalContainer>
      )}
    </MainContainer>
  );
}

export default Header;

const MainContainer = styled.div`
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

  font-weight: 600;
`;

const ModalContainer = styled.div<{ themes: any }>`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  .toggle {
    border: 1px solid red;
    width: 100px;
    height: 60%;

    img {
      position: relative;
      right: 0%;
      border: ${(props) =>
        props.themes === false ? '3px solid red' : '3px solid blue'};
      margin-left: ${(props) => (props.themes === false ? '50px' : '0px')};
    }
  }

  .be_modal {
    width: 20%;
    background-color: rgba(102, 102, 102, 0.5);

    @media (min-width: 1024px) {
      width: 70%;
    }
  }

  .fe_modal {
    display: flex;
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
    width: 100%;
    height: 55px;

    justify-content: flex-end;
    padding: 0 10px;
    box-shadow: 0px 2px 5px ${theme.color.grayDC};
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
