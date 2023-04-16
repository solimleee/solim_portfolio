/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from 'styled-components';

// [color theme][230414]
// - 색상 추가 시, 같은 계열이면 이름+hex color 앞 두자리로 생성
//   -> ex) gray72, graDC
// - 색상 추가 후 styled.d.ts파일 내에 default 타입 선언

const theme: DefaultTheme = {
  color: {
    main_text: '#2CAB02',
    sub_text: '#56C133',
    base_text: '#87D66E',
    main_pressed: '#FFF7F2',
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    blue: '#007AFF',
    gray72: '#727272',
    grayDC: '#dcdcdc',
    grayEA: '#eaeaea',
    grayF9: '#f9f9f9',
    grayA9: '#A9A9A9',
    gray97: '#979797',
  },
};
export { theme };
