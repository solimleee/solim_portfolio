'use client';
import Link from 'next/link';
import Image from 'next/image';
import GridComponent, {
  DetailMainContainer,
} from 'component/common/GridComponent';

function page() {
  return (
    <DetailMainContainer>
      <h3 className="title">✈️ Tourvis</h3>
      <GridComponent title="📎 프로젝트 관련 링크">
        <Link href="https://www.tourvis.com/m/main">
          https://www.tourvis.com/m/main
        </Link>
      </GridComponent>
      <GridComponent title="✏️ 해당 프로젝트 설명">dlrjgkdslf</GridComponent>
      <GridComponent title="🛠️ 기술 스택">
        <li>aa</li>
        <li>aa</li>
      </GridComponent>
      <GridComponent title="🗣️ 협업 툴">
        <li>aa</li>
        <li>aa</li>
      </GridComponent>
      <GridComponent title="👩🏻‍💻 구현 기능 (본인 참여 기여도가 70%이상인 기능만 나열하였습니다.)">
        <div className="img_list">
          1. 랜딩페이지 스크롤 이벤트 구현 및 프론트 개발
        </div>
        {/* <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" /> */}
        <div className="img_list">
          1. 랜딩페이지 스크롤 이벤트 구현 및 프론트 개발
        </div>
        {/* <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" /> */}
        <div className="img_list">
          1. 랜딩페이지 스크롤 이벤트 구현 및 프론트 개발
        </div>
        {/* <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" /> */}
        <div className="img_list">
          1. 랜딩페이지 스크롤 이벤트 구현 및 프론트 개발
        </div>
        {/* <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" /> */}
      </GridComponent>
      <GridComponent title="🌳 성장 경험">dlrjgkdslf</GridComponent>
    </DetailMainContainer>
  );
}

export default page;
