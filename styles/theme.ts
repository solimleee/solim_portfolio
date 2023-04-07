/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from 'styled-components';
/* 
[JANINE][220705]
- 색상 추가 시, 같은 계열이면 이름+hex color 앞 두자리로 생성
  -> ex) gray72, graDC
- 색상 추가 후 styled.d.ts파일 내에 타입 선언해주어야 함
*/

const theme: DefaultTheme = {
  color: {
    main: '#FF8933',
    main_hover: '#FFA462',
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
  effect: {
    gradient: 'linear-gradient(to right, #FFAC4A, #FF8933 )',
    img_gradient:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 71.87%, rgba(0, 0, 0, 0.15) 100%)',
    shadow: '2px 2px 10px rgba(95,95,95,0.1)',
  },
};
export { theme };
