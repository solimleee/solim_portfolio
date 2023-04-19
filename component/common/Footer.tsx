import styled from 'styled-components';
import { theme } from 'styles/theme';

function Footer() {
  return (
    <MainContainer>
      <div className="wrap">
        <p>
          본 페이지는 상업적 목적이 아닌 비영리적 개인 포트폴리오용으로 만들어진
          사이트입니다. solim lee ⓒ 2023
        </p>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  width: 100vw;
  margin-top: 20px;
  padding: 15px 30px;
  color: ${theme.color.base};

  p {
    margin-right: 5px;
    font-size: 0.7rem;
    font-style: italic;
  }
`;

export default Footer;
