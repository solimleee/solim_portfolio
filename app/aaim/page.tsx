'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface InfoProps {
  title: string;
  children: React.ReactNode;
}

function page() {
  const GridComponent = ({ title, children }: InfoProps) => {
    return (
      <GridContainer>
        <h4 style={{ border: '1px solid blue' }}>{title}</h4>
        <h5 style={{ border: '1px solid aqua' }}>{children}</h5>
      </GridContainer>
    );
  };

  return (
    <MainContainer>
      <h3 className="title">🎧 Aaim Project</h3>
      <GridComponent title="📎 프로젝트 관련 링크">
        <Link href="https://www.aaim-project.com">
          https://www.aaim-project.com
        </Link>
      </GridComponent>
      <GridComponent title="🛠️ 기술 스택">
        <li>언어: </li>
        <li>서버: </li>
        <li>라이브러리 및 기타 솔루션: </li>
      </GridComponent>
      <GridComponent title="✏️ 해당 프로젝트 설명">dlrjgkdslf</GridComponent>
      <GridComponent title="👩🏻‍💻 구현 기능 (본인 참여 기여도가 70%이상인 기능만 나열하였습니다.)">
        <div className="img_list">
          1. 랜딩페이지 스크롤 이벤트 구현 및 프론트 개발
        </div>
        <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" />
        <div className="img_list">
          1. 랜딩페이지 스크롤 이벤트 구현 및 프론트 개발
        </div>
        <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" />
        <div className="img_list">
          1. 랜딩페이지 스크롤 이벤트 구현 및 프론트 개발
        </div>
        <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" />
        <div className="img_list">
          1. 랜딩페이지 스크롤 이벤트 구현 및 프론트 개발
        </div>
        <Image src="/aaim/landing_page.gif" alt="" width="360" height="200" />
      </GridComponent>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  border: 1px solid red;
  margin: auto auto;
  padding-top: 85px;

  .title {
    padding: 10px 0px;
    font-size: 2.25em;
    font-weight: 600;
    color: ${theme.color.main_text};
  }

  a {
    font-weight: 400;
    color: ${theme.color.gray72};
    text-decoration-color: ${theme.color.gray72};
  }
`;

const GridContainer = styled.div`
  border: 1px solid pink;
  padding: 10px 0px;

  h4 {
    padding: 5px 0px;
    font-weight: 600;
  }

  h5 {
    padding: 5px 0px;
    font-size: 1rem;
    font-weight: 400;
  }
  img {
    width: 100%;
    height: 100%;
    @media (min-width: 1024px) {
    }
  }
  .img_list {
    padding: 5px 0px;
  }
`;

export default page;
