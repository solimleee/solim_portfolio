'use client';
import Image from 'next/image';
import GridComponent, {
  DetailMainContainer,
} from 'component/common/GridComponent';
import ArchComponent from 'component/common/ArchComponent';
import { theme } from 'styles/theme';

function page() {
  return (
    <DetailMainContainer>
      <h3 className="title">🛍️ Jlim</h3>
      <GridComponent title="✏️ 해당 프로젝트 설명">
        인플루언서 기반 패션 소셜 커머스 플랫폼입니다.
        <br />
        user-web, seller-web을 담당하여 프로젝트 초반 설계부터 배포까지 작업을
        진행하였습니다.
        <div style={{ color: theme.color.grayA9 }}>
          (개발 완료 후 서비스 착수 단계에서 프로젝트가 무산되어 현재 서비스
          미운영 중입니다.)
        </div>
      </GridComponent>
      <GridComponent title="🛠️ 기술 스택">
        <ArchComponent
          fe_list={[
            'React',
            'Typescript',
            'Redux',
            'Recoil',
            'React-Query',
            'styled-component',
          ]}
          be_list={['AWS Amplify', 'AWS S3']}
        />
      </GridComponent>
      <GridComponent title="🗣️ 협업 툴">
        <li>GitLab</li>
        <li>Swagger</li>
        <li>Figma</li>
        <li>Jira</li>
        <li>Slack</li>
        <li>Notion</li>
      </GridComponent>
      <GridComponent title="👩🏻‍💻 구현 기능 (본인 참여 기여도가 70%이상인 기능만 나열하였습니다.)">
        <div className="img_list">공통 (user-web, seller-web)</div>
        <div className="img_list">
          1. 반응형 레이아웃 설계
          <div className="list_text">
            미디어 쿼리를 사용하여 각각의 디바이스에서 적합한 레이아웃으로
            대응하였습니다.
          </div>
        </div>
        <div className="img_list">
          2. AWS Amplify를 활용하여 프로젝트 배포
          {/* <div className="list_text">왜 amplify를 사용함?</div> */}
        </div>
        <div className="img_list" style={{ paddingTop: '10px' }}>
          user-web{' '}
          <span style={{ color: theme.color.gray72 }}>
            (해당 페이지는 프로젝트 무산 이후 디자인 저작권에 대한 명시가 없어
            스크린샷을 제외하였습니다. 양해 부탁드립니다.)
          </span>
        </div>
        <div className="img_list">
          1. 메인 랜딩 페이지의 전체적인 레이아웃 및 카테고리별로 필터링한 상품
          컴포넌트 개발
        </div>
        <div className="img_list">
          2. 메인 페이지에서 선택한 상품의 상세 페이지 이동 및 상세 페이지에서
          옵션과 수량 선택 후 구매 페이지까지의 플로우 연결
        </div>
        <div className="img_list">
          3. 상품 및 셀러 검색 기능 및 검색 결과 페이지 개발
        </div>
        <div className="img_list">4. Header, Footer 개발</div>
        <div className="img_list" style={{ paddingTop: '10px' }}>
          seller-web
        </div>
        <div className="img_list">
          1. 비밀번호 찾기, 회원가입의 기능 및 프론트 개발
        </div>
        <div className="img_list">
          2. 셀러 마이페이지 심사 신청 페이지 기능 및 프론트 개발
          <div className="list_text">
            로그인 성공 후 셀러 정보가 존재하지 않는 경우 셀러 심사 신청
            페이지로 이동하여 정보를 입력합니다. 셀러 심사 신청 페이지는 6개의
            섹션을 걸쳐서 진행되며 섹션을 이동하는 동안 입력한 텍스트 정보가
            유지될수있도록 recoil을 사용하여 구조를 작성하였습니다. 또한 프로필
            이미지 사진같은 경우에는 AWS S3를 사용하여 bucket안에 이미지를
            저장하는 방식으로 구현하였습니다.
          </div>
        </div>
        <div className="img_list">
          3. 셀로 마이페이지 정보 수정 기능 및 프론트 개발
          <Image src="/jlim/seller.gif" alt="" width="350" height="200" />
        </div>
      </GridComponent>
      {/* <GridComponent title="🌳 성장 경험">dlrjgkdslf</GridComponent> */}
    </DetailMainContainer>
  );
}

export default page;
