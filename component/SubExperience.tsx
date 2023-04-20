import { theme } from 'styles/theme';
import CommonSection from './common/CommonSection';
import ExpSection from './common/ExpSection';

export default function SubExperience() {
  return (
    <CommonSection title="Project Experience">
      <div style={{ marginBottom: '17px', color: `${theme.color.gray72}` }}>
        코드스테이츠 부트캠프 진행 중 저의 성장에 영향을 주었던 프로젝트를
        소개해드리겠습니다.
      </div>
      <ExpSection
        title="Withpuppy"
        title_routing="withpuppy"
        simple_desc="🐾 강아지 산책 메이트 매칭 프로젝트 "
        period="2021.11.23 ~ 2021.12.21"
        position={['프론트엔드 개발자 3명, 풀스텍 개발자 1명']}
        stack="AWS(EC2, S3, RDS), React, javascript, Redux, kakaomap api, React-Query, styled-component"
        feature={[
          '프로젝트 아이디어 제안 및 구성',
          '아키텍처 다이어그래밍 설계',
          'UX/UI 디자인 제작',
          '프로젝트 전반적인 디자인 및 레이아웃을 구성하였고 Figma로 공통적으로 사용할 색상, 아이콘 및 폰트 형식등을 정리하여 공유하였습니다.',
          '반응형 레이아웃 구현',
          '랜딩페이지 레이아웃, 미디어쿼리, 애니메이션 적용',
          '댓글 컴포넌트 클릭 시 실행되는 모달 스타일 제작 및 내부 기능 구현',
          '댓글 유저정보 불러오기 및 props를 이용한 모달창 띄우기',
          'github 이슈 관리',
          '프로젝트 API 문서화',
        ]}
      />
    </CommonSection>
  );
}
