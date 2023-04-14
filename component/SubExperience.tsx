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
        simple_desc="🐾 인플루언서 기반의 E-커머스 플랫폼 구축"
        period="2021.11.23 ~ 2021.12.21"
        position={[
          '클라이언트사 기획팀 2명',
          '자사 기획팀 3명, 백엔드 개발자 1명, 프론트엔드 개발자 3명, 어플리케이션 개발자 1명',
        ]}
        stack="AWS(Amplify, S3), React, Typescript, Redux, Recoil, React-Query, styled-component"
        feature={[
          'AWS Amplify를 활용하여 프로젝트 배포',
          ' 메인 랜딩페이지, 상품 상세 페이지 프론트 개발 및 데이터 연동 ',
          '상품 상세 페이지에서 구매페이지까지 플로우 연결 ',
          'AWS Amplify를 활용하여 프로젝트 배포',
          '비밀번호 찾기 및 회원가입 페이지 개발',
          'react-recoil로 셀러정보를 전역 상태로 받아와 셀러 심사신청 페이지 개발',
          '마이페이지(셀러) 정보 수정 페이지 개발',
        ]}
      />
    </CommonSection>
  );
}
