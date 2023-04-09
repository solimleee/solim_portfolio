import styled from 'styled-components';
import { theme } from 'styles/theme';

function Intro() {
  return (
    <IntroContainer>
      <h3>Introduction.</h3>
      <h4>안녕하세요. 2년차 프론트엔드 개발자 이소림입니다.</h4>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  h3 {
    width: fit-content;
    font-size: 2.25em;
    color: ${theme.color.blue};
    border-bottom: 2px solid ${theme.color.blue};
    font-weight: 600;
  }
  h4 {
    padding-top: 10px;
  }
`;

export default Intro;
