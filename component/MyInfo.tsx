import Image from 'next/image';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface TextProps {
  title: string;
  description: string;
  type?: 'mail' | '';
}

function MyInfo() {
  const TextWrap = ({ title, description, type }: TextProps) => {
    return (
      <TextWrapContainer>
        <h2>{title}</h2>
        {type === 'mail' ? (
          <a href={`${description}`}>{description.slice(7)}</a>
        ) : (
          <p>{description}</p>
        )}
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
          </div>
          <div className="contact_wrap">
            <h1>Skill.</h1>
            <TextWrap
              title="Deploy."
              description="AWS, Firebase, Vercel, Wordpress"
            />
            <TextWrap title="Language." description="Typescript, Javascript" />
          </div>
        </div>
        {/* <div>
          <div className="contact_wrap">
            <h1>Contact.</h1>
            <TextWrap>
              <h2>Email. </h2>
              <a href="mailto:newsolim5616@gmail.com">newsolim5616@gmail.com</a>
            </TextWrap>
          </div>
          <div className="contact_wrap">
            <h1>Skill.</h1>
            <TextWrap>
              <h2>Language. </h2>
              <p>Typescript, JavaScript</p>
            </TextWrap>
            <TextWrap>
              <h2>Deploy. </h2>
              <p>Typescript, JavaScript</p>
            </TextWrap>
          </div>
        </div> */}
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

    @media (max-width: 780px) {
      width: auto;
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
    font-size: 0.9em;

    width: 70px;
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
