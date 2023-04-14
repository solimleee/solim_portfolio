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
    color: ${theme.color.main_text};
    /* border-bottom: 2px solid ${theme.color.main_text}; */
    font-weight: 600;
  }

  .children_section {
    padding-top: 20px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export default CommonSection;
