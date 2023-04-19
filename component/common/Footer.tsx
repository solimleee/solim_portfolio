import styled from 'styled-components';
import { theme } from 'styles/theme';

function Footer() {
  return (
    <MainContainer>
      <div className="wrap">
        <p>thank you for reading my post : )</p>
        <p>
          본 페이지는 상업적 목적이 아닌 비영리적 개인 포트폴리오용으로 만들어진
          사이트입니다. solim lee ⓒ 2023
        </p>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100px;
  width: 100vw;
  margin-top: 40px;
  padding: 20px;
  background-color: #fef9f8;
  color: ${theme.color.accent};

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  p {
    margin-right: 5px;
    font-size: 0.75rem;
    font-style: italic;
  }
`;

export default Footer;
