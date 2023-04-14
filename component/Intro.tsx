'use client';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import CommonSection from './common/CommonSection';

function Intro() {
  return (
    <CommonSection title="Introduction.">
      <div>
        안녕하세요. 2년차 프론트엔드 개발자 이소림입니다.
        <br />
        지난 1년간 스타트업에서 총 3개의 웹 프로젝트를 개발/배포/기획에
        참여하였습니다.
        <br />
        클라이언트사와 직접 의사소통을 하며 서비스를 제공하였고 효율적인 협업을
        경험하며 개발 역량을 쌓아왔습니다.
        <br />
        <br />
        저는 조직과 사람의 성장을 최우선적으로 생각하며 새로운 기술의 습득을
        두려워하지 않습니다.
        <br />
        재직 중 팀원들과 개발스터디 프로그램을 만들고 참여하여 정보 공유,
        코드리뷰 등 적극적인 사내 활동을 통하여 전문적인 Frontend 개발자로
        성장하고 있습니다.
      </div>
    </CommonSection>
  );
}

export default Intro;
