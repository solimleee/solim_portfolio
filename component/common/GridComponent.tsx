import styled from 'styled-components';
import { theme } from 'styles/theme';

interface InfoProps {
  title: string;
  children: React.ReactNode;
}

const GridComponent = ({ title, children }: InfoProps) => {
  return (
    <GridContainer>
      <h4>{title}</h4>
      <h5>{children}</h5>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  padding: 10px 0px;
  h4 {
    padding: 5px 0px;
    font-size: 1.05rem;
    font-weight: 600;
  }
  h5 {
    font-size: 1rem;
    font-weight: 400;
  }
  img {
    width: 100%;
    height: 100%;
    padding: 3px 0 3px 16px;
  }
  .list_text {
    font-size: 0.9em;
    padding: 3px 0 3px 16px;
    color: ${theme.color.gray72};
  }
  /* .grid_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    justify-content: center;
    @media (max-width: 1024) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  } */
`;

export const DetailMainContainer = styled.div`
  margin: auto auto;
  padding: 75px 0px 50px 0px;
  line-height: 1.6;
  a {
    font-weight: 400;
    color: ${theme.color.gray72};
    text-decoration-color: ${theme.color.gray72};
  }
  .title {
    padding: 10px 0px;
    font-size: 2.25em;
    font-weight: 600;
    color: ${theme.color.accent};
  }
`;

export default GridComponent;
