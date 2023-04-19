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
      <h3 className="title">🎧 Aaim Project</h3>
      <GridComponent title="📎 프로젝트 관련 링크">
        <Link href="https://www.aaim-project.com">
          https://www.aaim-project.com
        </Link>
      </GridComponent>
      <GridComponent title="✏️ 해당 프로젝트 설명">
        음악 소셜 플랫폼 Aaim의 브랜드 홈페이지입니다.
        <br />
        프로젝트 개발 및 기획에 참여하였습니다. 전체적인 반응형 레이아웃 구성과
        프론트 개발을 담당하여 홈페이지를 개발하였고, 기존 에임 홈페이지의
        레거시 코드 구조를 효율적으로 개선하였습니다. 클라이언트사의 요청에
        따라서 웹 호스팅 서비스등을 추가하였고 커뮤니케이션 대응을 하였습니다.
      </GridComponent>
      <GridComponent title="🛠️ 기술 스택">
        <ArchComponent
          fe_list={[
            'React',
            'Typescript',
            'Redux',
            'axios',
            'styled-components',
          ]}
          be_list={[
            'AWS CloudFront',
            'AWS S3',
            'Amazon Web Servies',
            'Firebase',
            'Wordpress',
          ]}
        />
      </GridComponent>
      <GridComponent title="🗣️ 협업 툴">
        <li>Bitbucket</li>
        <li>Slack</li>
        <li>Notion</li>
        <li>Zeplin</li>
        <li>Firebase</li>
        <li>Wordpress</li>
      </GridComponent>
      <GridComponent title="👩🏻‍💻 구현 기능 (본인 참여 기여도가 70%이상인 기능만 나열하였습니다.)">
        <div className="img_list">
          1. 클라이언트사와 커뮤니케이션 및 기획, 리서치 참여
        </div>
        <div className="img_list">
          2. 기존 레거시 코드 삭제 후 코드 리팩토링 작업
          <div className="list_text">
            기존 Class Component의 코드를 Functional Component로 코드 문법을
            최신화하였습니다.
            <br />
            또한 초기 렌더링 속도가 느리다는 단점을 보안하기 위해서 대용량
            이미지 파일과 동영상 파일 등의 용량을 재조정하여 사용자 경험을
            개선하였습니다.
          </div>
        </div>
        <div className="img_list">3. 랜딩페이지 스크롤 애니메이션 구현</div>
        <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" />
        <div className="img_list">
          4. 뷰 포트별 반응형 웹, 레이아웃(Header,Footer) 개발 및 디자인
          일관성을 위한 공통 컴포넌트 제작
          <div className="list_text">
            리덕스 스토어의 useSelctor Hook을 사용하여 현재 디바이스의 뷰포트에
            따라 스토어의 상태값을 변경해주었습니다. 뷰포트가 변경되어 상태값이
            바뀐 경우에 컴포넌트를 렌더링 시켜주어 반응형 웹을 구현하였습니다.
          </div>
        </div>
        <div className="img_list">
          5. 검색페이지 기능 구현 및 프론트 개발
          <Image src="/aaim/aaim_search.gif" alt="" width="360" height="200" />
        </div>
        <div className="img_list">
          6. 이용방법 페이지 유튜브 비디오 연동 및 프론트 개발
          <div className="list_text">
            IFrame 태그를 사용하여 youtube 비디오 플레이어를 연동하고 제어할 수
            있게 구현하였습니다.
          </div>
        </div>
        <div className="img_list">
          7. Wordpress를 사용하여 약관정보 수정 데이터 연동 및 관련 페이지
          프론트 개발
          <div className="list_text">
            클라이언트사의 기획운영팀에서 별도의 비용이나 서버구축없이 텍스트
            수정 및 페이지 숨김 처리를 할 수 있는 기능이 필요하였습니다. 여러
            조건을 따져보았을때 웹 호스팅 플랫폼 중 해당 기능은 Wordpress가
            적합하다고 생각하였습니다.
          </div>
          <Image
            src="/aaim/aaim-terms-res.gif"
            alt=""
            width="360"
            height="200"
          />
        </div>
        <div className="img_list">
          8. Wordpress를 사용하여 팝업 이미지 데이터 연동 및 프론트 개발
          <Image src="/aaim/aaim_popup.png" alt="" width="500" height="400" />
        </div>
        <div className="img_list">
          9. Firebase를 사용하여 입점문의 페이지 및 관리자 페이지 개발
          <div className="list_text">
            Firebase의 무료 클라우드 데이터서비스를 사용해 홈페이지 사용자가
            입점문의 페이지에서 정보를 전달하였을때 실시간으로 데이터를 저장할
            수 있도록 구현하였습니다.
          </div>
        </div>
      </GridComponent>
      <GridComponent title="🌳 성장 경험">dlrjgkdslf</GridComponent>
    </DetailMainContainer>
  );
}

export default page;
