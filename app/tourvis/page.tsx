'use client';
import Link from 'next/link';
import Image from 'next/image';
import GridComponent, {
  DetailMainContainer,
} from 'component/common/GridComponent';
import ArchComponent from 'component/common/ArchComponent';

function page() {
  return (
    <DetailMainContainer>
      <h3 className="title">✈️ Tourvis</h3>
      <GridComponent title="📎 프로젝트 관련 링크">
        <Link href="https://www.tourvis.com/m/main">
          https://www.tourvis.com/m/main
        </Link>
      </GridComponent>
      <GridComponent title="✏️ 해당 프로젝트 설명">
        온라인 여행 상품 중개 플랫폼 투어비스의 메인, 숙소, 호텔, 투어&티켓,
        프로모션 페이지의 프론트 개발을 담당하였습니다.
      </GridComponent>
      <GridComponent title="🛠️ 기술 스택">
        <ArchComponent
          fe_list={[
            'React',
            'Typescript',
            'Redux',
            'react-query',
            'axios',
            'styled-components',
          ]}
          be_list={['Amazon Web Servies', 'Amazon ALB']}
        />
      </GridComponent>
      <GridComponent title="🗣️ 협업 툴">
        <li>Bitbucket</li>
        <li>Swagger</li>
        <li>Jira</li>
        <li>Figma</li>
        <li>Slack</li>
        <li>Notion</li>
      </GridComponent>
      <GridComponent title="👩🏻‍💻 구현 기능 (본인 참여 기여도가 70%이상인 기능만 나열하였습니다.)">
        <div className="img_list">
          1. 모바일 웹 뷰를 기준으로 한 레이아웃 구현
        </div>
        <Image src="/tourvis/tourvis_1.png" alt="" width="1100" height="400" />
        <div className="img_list">2. Header 및 Footer 개발</div>
        <div className="img_list">
          3. 메인 랜딩페이지 프론트 개발
          <div className="list_text">
            메인페이지의 전체적인 레이아웃 및 섹션별 컴포넌트를 개발하였습니다.
            재사용성이 높은 카드 컴포넌트를 공통 컴포넌트로 개발하여 프론트엔드
            개발자의 작업 시간을 줄일 수 있었고 영역별 통일성을 증가시켰습니다.
            Typescript로 interface를 정의하여 Props 데이터를 추가할 수 있도록
            구현하였습니다.
          </div>
          <Image
            src={'/tourvis/tourvis_common.png'}
            alt=""
            width="1100"
            height="400"
          />
        </div>
        <div className="img_list">4. 프로모션 페이지 프론트 개발</div>
        <div className="img_list">
          5. 상품 상세 페이지 프론트 및 옵션선택 기능 개발
          <div className="list_text">
            react swiper 라이브러리를 활용한 팝업 슬라이더와 쿠폰/ 결제 등의
            클릭이벤트 팝업을 구현하였습니다. useRef를 활용하여 특정 영역까지
            스크롤을 할 경우 상품상세의 Navbar가 변경되는 기능을 개발하였습니다.
            useState 상태값을 활용하여 옵셥선택에서 캘린더의 날짜를 클릭한 뒤
            상세옵션과 수량선택까지의 플로우를 연결하였습니다.
          </div>
          <Image
            src="/tourvis/tourvis_detail.gif"
            alt=""
            width="360"
            height="200"
          />
        </div>
        <div className="img_list">
          6. 데이터 로딩 중 스켈레톤 적용 및 스켈레톤 컴포넌트 개발
          <div className="list_text">
            개발 진행 도중 실제 데이터가 렌더링 되기 전에 컴포넌트가 1~2초간
            비어보인다는 문제점을 발견하게 되었습니다. 해당 이슈를
            클라이언트사에 전달하였고 이슈가 생기는 페이지에 스켈레톤을 만들어
            적용해달라는 요청을 받게 되었습니다. 화면의 윤곽이 되는 스켈레톤
            컴포넌트를 제작하여 데이터가 로딩중일때는 스켈레톤을 로딩시켰고 이
            결과로 화면이 부드럽게 전환되어 체감 로딩 시간을 줄여 사용자의
            이탈율을 낮출 수 있게 되었습니다.
          </div>
          <Image
            src="/tourvis/tourvis_loading.gif"
            alt=""
            width="360"
            height="200"
          />
        </div>
        <div className="img_list">
          7. 여행지 찾기 페이지 프론트 및 localStorage를 활용한 최근 검색어 기능
          개발 개발
          <div className="list_text">
            검색 결과 후 일치하는 데이터가 있는 경우 데이터 리스트를 나열해준 뒤
            클릭할 때 localStrage 객체에 저장합니다. 동시에 검색어 상세
            플레이스로 이동하는 플로우를 구현하였습니다. 다시 여행지 찾기
            페이지로 이동해서 최근 검색 영역에서 전체 삭제 또는 삭제 버튼 클릭
            시 localStorage 저장 객체에서 삭제됩니다.
          </div>
          <Image
            src="/tourvis/tourvis_search.gif"
            alt=""
            width="360"
            height="200"
          />
        </div>
      </GridComponent>
      <GridComponent title="🌳 성장 경험">dlrjgkdslf</GridComponent>
    </DetailMainContainer>
  );
}

export default page;
