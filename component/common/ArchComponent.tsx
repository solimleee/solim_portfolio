import styled from 'styled-components';

interface ArchProps {
  fe_list: string[];
  be_list: string[];
}

function ArchComponent({ fe_list, be_list }: ArchProps) {
  return (
    <MainContaienr>
      <div>
        <ul>frontend</ul>
        {fe_list.map((e: string, idx: number) => {
          return <li key={idx}>{e}</li>;
        })}
      </div>
      <div>
        <ul>backend</ul>
        {be_list.map((e: string, idx: number) => {
          return <li key={idx}>{e}</li>;
        })}
      </div>
    </MainContaienr>
  );
}

const MainContaienr = styled.div`
  display: flex;
  max-width: 400px;

  div {
    width: 50%;
  }
`;

export default ArchComponent;
