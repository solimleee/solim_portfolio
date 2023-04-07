import Image from 'next/image';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface TextProps {
  title: string;
  description: string;
  type?: 'mail' | 'sms';
}

function MyInfo() {
  const TextWrap = ({ title, description, type }: TextProps) => {
    const descriptionType = () => {
      switch (type) {
        case 'mail':
          return <a href={`${description}`}>{description.slice(7)}</a>;
        case 'sms':
          return <a href={`${description}`}>{description.slice(4)}</a>;
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
          <h1>이소림</h1>
          <h2>(Solim Lee)</h2>
        </div>
        <p>Last updated: 2023.04.06</p>
      </div>
      <InnerWrap>
        <Image src={'/profile.jpg'} alt="" width="220" height="220" />
        <div>
          <div className="contact_wrap">
            <h1>Contact.</h1>
            <TextWrap
              title="Email."
              description="mailto:newsolim5616@gmail.com"
              type="mail"
            />
            <TextWrap
              title="Phone."
              description="sms:010-5616-1581"
              type="sms"
            />
            {/* <a href="sms:010-5616-1581">tell:010-5616-1581</a> */}
          </div>
          <div className="contact_wrap">
            <h1>Skill.</h1>
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
              description="Git, Github, Gitlab, Bitbucket, Wordpress, Jira, Figma"
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
  padding-top: 100px;

  img {
    border-radius: 50%;
  }

  @media (max-width: 780px) {
    align-items: center;
  }

  .text_wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;
    padding: 0px 0px 0px 5px;
    margin: 0px 0px 15px 0px;
    border-left: 7px solid ${theme.color.blue};

    @media (max-width: 360px) {
      width: auto;
    }

    @media (min-width: 360px) and (max-width: 780px) {
      width: 300px;
    }

    h2 {
      padding-left: 5px;
    }

    p {
      font-style: italic;
      font-size: small;
      color: ${theme.color.gray97};

      @media (max-width: 780px) {
        display: none;
      }
    }
  }

  .inner_text_wrap {
    display: flex;
    align-items: flex-end;
  }

  /* @media (max-width: 360px) {
    border: 3px solid red;
  }
  @media (min-width: 360px) and (max-width: 800px) {
    border: 3px solid blue;
  } 
 @media (min-width: 1400px) {
    border: 3px solid green;
  } */
`;

const InnerWrap = styled.div`
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }

  .contact_wrap {
    width: 100%;
    margin: 0px 0px 10px 30px;

    h1 {
      padding: 10px 0px 5px 0px;
      color: ${theme.color.blue};
      font-size: large;
    }
  }
`;

const TextWrapContainer = styled.div`
  display: flex;
  align-items: flex-end;

  h2 {
    padding: 2px;
    font-size: 0.85em;
    width: 75px;
  }
  a {
    padding: 2px;
    color: ${theme.color.gray97};
    font-size: 0.8em;
    text-decoration: underline;
  }
  p {
    padding: 2px;
    color: ${theme.color.gray97};
    font-size: 0.8em;
  }
`;

export default MyInfo;
