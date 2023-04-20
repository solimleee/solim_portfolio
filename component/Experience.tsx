'use client';
import CommonSection from './common/CommonSection';
import ExpSection from './common/ExpSection';

function Experience() {
  return (
    <CommonSection title="Work Experience.">
      <div style={{ marginBottom: '17px' }}>
        재직 중 개발에 참여한 프로젝트와 담당 업무를 소개해드리겠습니다.
      </div>
      <ExpSection
        title="Tourvis"
        title_routing="tourvis"
        url="https://www.tourvis.com/m/main"
        simple_desc="✈️ 항공권, 호텔, 투어 & 티켓, 여행자보험 등 여행 상품을 예약할 수 있는 온라인 여행 중개 플랫폼 투어비스의 홈페이지 UI/UX 및 기능 개선 "
        period="2022.03 ~ 2022.07"
        position={[
          '클라이언트사 기획팀, QA팀, 백엔드 개발팀 다수',
          '자사 프론트엔드 개발자 3명',
        ]}
        stack="React, Typescript, Redux, Recoil, React-Query, styled-component"
        feature={[
          '모바일 웹 뷰를 기준으로 메인 랜딩페이지, 상세 플레이스, 투어 액티비티, 프로모션 페이지 프론트 개발',
          '검색페이지 구현 및 localStorage를 활용한 최근검색어 기능 개발',
          '실제 운영중인 서비스를 고려하여 중복 컴포넌트 제거에 주력 및 코드 재사용성을 고려한 컴포넌트 모듈화 작업',
        ]}
      />
      <ExpSection
        title="Aaim Project"
        title_routing="aaim"
        url="https://www.aaim-project.com/"
        simple_desc="🎧 음악 소셜 플랫폼 Aaim의 브랜드 사이트 개선"
        period="2022.11 ~ 2023.02"
        position={[
          '클라이언트사 CEO, 디자인팀 1명, 기획운영팀 2명',
          '자사 프론트엔드 개발자 2명',
        ]}
        stack="React, Typescript, Redux, Recoil, React-Query, styled-component"
        feature={[
          '뷰포트별 반응형 웹, 레이아웃(Header, Footer) 개발 및 디자인 일관성을 위한 공통 컴포넌트 제작',
          '랜딩 페이지 스크롤 이벤트 구현 및 프론트 개발',
          '검색 페이지 프론트 개발 및 질문 검색 기능 구현',
          '기존 레거시 코드 삭제 후 코드 리팩토링 작업',
          '이용방법 페이지 유튜브 비디오 연동 및 프론트 개발',
          '약관정보 수정 데이터 연동 및 관련 페이지 프론트 개발',
          'Firebase를 사용하여 홈페이지 내부 관리자 페이지 및 입점 문의 페이지 개발',
        ]}
      />
      <ExpSection
        title="Jlim"
        title_routing="jlim"
        simple_desc="🛍️ 인플루언서 기반의 E-커머스 플랫폼 구축"
        period="2022.08 ~ 2022.11"
        position={[
          '클라이언트사 기획팀 2명',
          '자사 기획팀 3명, 백엔드 개발자 1명, 프론트엔드 개발자 3명, 어플리케이션 개발자 1명',
        ]}
        stack="AWS(Amplify, S3), React, Typescript, Redux, Recoil, React-Query, styled-component"
        feature={[
          'AWS Amplify를 활용하여 프로젝트 배포',
          '반응형 레이아웃 개발',
          '메인 랜딩페이지, 상품 상세 페이지 프론트 개발 및 데이터 연동 ',
          '상품 상세 페이지에서 구매 페이지까지 플로우 연결 ',
          '비밀번호 찾기 및 회원가입 페이지 개발',
          'react-recoil로 셀러정보를 전역 상태로 받아와 셀러 심사신청 페이지 개발',
          '마이페이지(셀러) 정보 수정 페이지 개발',
        ]}
      />
    </CommonSection>
  );
}

export default Experience;
