import Image from 'next/image';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface TextProps {
  title: string;
  description: string;
  type?: 'mail' | 'sms' | 'git';
}

function MyInfo() {
  const TextWrap = ({ title, description, type }: TextProps) => {
    const descriptionType = () => {
      switch (type) {
        case 'mail':
          return <a href={`${description}`}>{description.slice(7)}</a>;
        case 'sms':
          return <a href={`${description}`}>{description.slice(4)}</a>;
        case 'git':
          return <a href={`${description}`}>{description}</a>;
        default:
          return <p>{description}</p>;
          break;
      }
    };

    return (
      <TextWrapContainer>
        <h2>{title}</h2>
        {descriptionType()}
      </TextWrapContainer>
    );
  };

  return (
    <MainContainer>
      <div className="text_wrap">
        <div className="inner_text_wrap">
          <h3 id="movie_info">이소림</h3>
          <h4>(Solim Lee)</h4>
        </div>
        <p>Last updated: 2023.06.08</p>
      </div>
      <InnerWrap>
        <Image
          src={'/common/profile_img.jpg'}
          alt=""
          width="220"
          height="220"
        />
        <div className="contact_box">
          <div className="contact_wrap" style={{ paddingBottom: '10px' }}>
            <h4>Contact.</h4>
            <TextWrap
              title="Phone."
              description="sms:010-5616-1581"
              type="sms"
            />
            <TextWrap
              title="Email."
              description="mailto:newsolim5616@gmail.com"
              type="mail"
            />
            <TextWrap
              title="github."
              description="https://github.com/solimleee"
              type="git"
            />
          </div>
          <div className="contact_wrap">
            <h4>Skill.</h4>
            <TextWrap
              title="Deploy."
              description="AWS(Amplify, S3, ec2), Firebase, Vercel"
            />
            <TextWrap
              title="Language."
              description="Typescript, Javascript, Styled-Component"
            />
            <TextWrap
              title="Library / Framework"
              description="Next.js, React, Node.js"
            />
            <TextWrap
              title="Tool"
              description="Git, Github, GitLab, Bitbucket, Jira, Figma"
            />
          </div>
        </div>
      </InnerWrap>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto auto;
  width: inherit;

  img {
    margin: auto auto;
    border-radius: 50%;
  }

  .text_wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;
    padding: 0px 0px 0px 5px;
    margin: 0px 0px 15px 0px;
    border-left: 7px solid ${theme.color.accent};

    h2 {
      padding-left: 5px;
    }

    p {
      font-style: italic;
      font-weight: 300;
      font-size: 0.7em;
      color: ${theme.color.gray97};

      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  .inner_text_wrap {
    display: flex;
    align-items: baseline;

    h3 {
      font-size: 2.25em;
      font-weight: 600;
    }
    h4 {
      padding-left: 3px;
      font-size: 1.5em;
      font-weight: 500;
    }
  }
`;

const InnerWrap = styled.div`
  display: flex;
  padding-top: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .contact_box {
    width: 100%;
    padding: 20px 0 0px 0px;
    @media (min-width: 1024px) {
      padding: 0px 0px 0px 50px;
    }
  }
  .contact_wrap {
    h4 {
      padding: 10px 0px 5px 0px;
      color: ${theme.color.accent};
      font-size: 1.3em;
      font-weight: 600;
    }
  }
`;

const TextWrapContainer = styled.div`
  display: grid;
  align-items: flex-end;
  grid-template-columns: 0.1fr 1fr;

  h2 {
    width: 75px;
    margin-right: 5px;
    padding: 2px;
    font-size: 0.88em;
    font-weight: 500;
  }
  a {
    padding: 2px;
    color: ${theme.color.gray97};
    font-size: 0.78em;
    text-decoration: underline;
  }
  p {
    padding: 2px;
    color: ${theme.color.gray97};
    font-size: 0.78em;
    word-break: break-all;
  }
`;

export default MyInfo;
