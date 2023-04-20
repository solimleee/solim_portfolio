import styled from 'styled-components';
import { theme } from 'styles/theme';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function CommonSection({ title, children }: SectionProps) {
  return (
    <MainContainer>
      <h3>{title}</h3>
      <div className="children_section">{children}</div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  h3 {
    width: fit-content;
    font-size: 2.25em;
    font-weight: 600;
    color: ${theme.color.accent};
  }

  .children_section {
    padding-top: 20px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  }
`;

export default CommonSection;
