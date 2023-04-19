import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface ExpProps {
  title: string;
  title_routing: string;
  url?: string;
  simple_desc: string;
  period: string;
  position: string[];
  stack: string;
  feature: any;
}

function ExpSection({
  title,
  title_routing,
  url,
  simple_desc,
  period,
  position,
  stack,
  feature,
}: ExpProps) {
  return (
    <MainContainer>
      <div className="wrap">
        <h4 className="title">
          <Link href={`${title_routing}`}>{title}</Link>
        </h4>
        <h4 className="url">
          <Link href={`${url}`}>{url}</Link>
        </h4>
      </div>
      <div className="simple_desc">{simple_desc}</div>
      <GridContainer>
        <div className="type">팀 프로젝트</div>
        <div>
          {position.map((info: any, idx: number) => {
            return (
              <div key={idx}>
                <li>{info}</li>
              </div>
            );
          })}
        </div>
      </GridContainer>
      <GridContainer>
        <div className="type">프로젝트 기간</div>
        <div>{period}</div>
      </GridContainer>
      <GridContainer>
        <div className="type">사용한 기술스택</div>
        <div>{stack}</div>
      </GridContainer>
      <GridContainer>
        <div className="type">구현 기능</div>
        <div>
          {feature.map((skill: any, idx: number) => {
            return (
              <div key={idx}>
                <li>{skill}</li>
              </div>
            );
          })}
        </div>
      </GridContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin-bottom: 20px;

  .wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }
  .title {
    font-size: 1.6rem;
    font-weight: 500;
    a {
      color: ${theme.color.accent};
      text-decoration-color: ${theme.color.accent};
    }
  }
  .url {
    padding-bottom: 2.7px;
    font-size: 0.9rem;
    font-weight: 400;
    a {
      color: ${theme.color.base};
    }
    @media (min-width: 1024px) {
      margin-left: 1.3rem;
    }
  }
  .simple_desc {
    padding: 10px 0px 15px 0px;
  }
  :last-child {
    margin-bottom: none;
  }
`;

const GridContainer = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid ${theme.color.grayEA};
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 0.3fr 0.85fr;
  }
  li {
    list-style-position: outside;
    padding-left: 22px;
    text-indent: -20px;
  }
  .type {
    padding-bottom: 3px;
    font-weight: 600;
  }
  :last-child {
    border: none;
  }
`;

export default ExpSection;
