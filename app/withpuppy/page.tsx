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
      <h3 className="title">✈️ Withpuppy</h3>
      <GridComponent title="📎 프로젝트 관련 링크">
        <Link href="https://github.com/codestates/withpuppy">
          https://github.com/codestates/withpuppy (현재 서비스 미운영 중입니다.)
        </Link>
      </GridComponent>
      <GridComponent title="✏️ 해당 프로젝트 설명">
        내 위치 기반 중심의 강아지 산책 메이트 매칭 서비스입니다.
        <br />
        2020년도 기준 우리나라 전체 인구 수 중 1530만명이 반려동물과 생활하고
        있으며 그 중 강아지가 81%를 차지하고 있습니다.
        <br />
        점점 발전하는 펫문화에 따라가기 위해서 강아지의 사회성을 기를 수 있는
        강아지 산책 메이트 서비스를 기획하게 되었습니다.
      </GridComponent>
      <GridComponent title="🛠️ 기술 스택">
        <ArchComponent
          fe_list={['React', 'Javascript', 'Redux', 'axios', 'kakao map api']}
          be_list={['AWS EC2', 'AWS S3', 'Express', 'MySQL', 'Postman']}
        />
      </GridComponent>
      <GridComponent title="🗣️ 협업 툴">
        <li>Github</li>
        <li>Gitbook</li>
        <li>Figma</li>
        <li>Discord</li>
      </GridComponent>
      <GridComponent title="👩🏻‍💻 구현 기능 (본인 참여 기여도가 70%이상인 기능만 나열하였습니다.)">
        <div className="img_list">1. 프로젝트 아이디어 제안 및 구성</div>
        <div className="img_list">
          2. 아키텍처 다이어그래밍 설계
          <div className="list_text">
            프로젝트의 소프트웨어 시스템 구성요소를 시각적으로 표현해
            제작하였습니다.
          </div>
        </div>
        <div className="img_list">
          3. UX/UI 디자인 제작
          <div className="list_text">
            프로젝트 전반적인 디자인 및 레이아웃을 구성하였고 Figma로 공통적으로
            사용할 색상, 아이콘 및 폰트 형식등을 정리하여 공유하였습니다.
          </div>
          <Image
            src="/withpuppy/figma_withpuppy.png"
            alt=""
            width="390"
            height="300"
          />
        </div>
        <div className="img_list">4. 반응형 레이아웃 구현</div>
        <div className="img_list">
          5. 랜딩페이지 레이아웃, 미디어쿼리, 애니메이션 적용
        </div>
        <div className="img_list">
          6. 댓글 컴포넌트 클릭 시 실행되는 모달 스타일 제작 및 내부 기능 구현
        </div>
        <div className="img_list">
          7. 댓글 유저정보 불러오기 및 props를 이용한 모달창 띄우기
        </div>
        <div className="img_list">8. github 이슈 관리</div>
        <div className="img_list">9. 프로젝트 API 문서화</div>
        <div></div>
      </GridComponent>
      <GridComponent title="🌳 성장 경험">
        <p>해당 프로젝트 종료 후 팀원분들이 작성해주신 피드백과 후기입니다. </p>
        <Image
          src="/codestate_evaluation.jpg"
          alt=""
          width="350"
          height="350"
        />
      </GridComponent>
    </DetailMainContainer>
  );
}

export default page;
