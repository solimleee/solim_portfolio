'use client';
import styled from 'styled-components';
import CommonSection from './common/CommonSection';

function Career() {
  return (
    <CommonSection title="Career.">
      <InnerWrap>
        <div>(주) 아시모프</div>
        <div>2022.03.02 ~ 2023.03.31 (1년 1개월)</div>
      </InnerWrap>
      <div style={{ paddingTop: '15px' }}>
        회사는 역동적인 분위기와 소통을 중시하며 Javascript 기반의 React
        라이브러리 기술을 활용한 맞춤형 솔루션 제공에 힘쓰고 있습니다. 동료들과
        적극 협업하여 고객과 함께 지속적인 혁신과 창의적 아이디어 발굴에 노력을
        기울였습니다. 이 경험을 통해 기술 역량과 협동 정신을 높일 수 있었습니다.
      </div>
    </CommonSection>
  );
}

const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Career;
