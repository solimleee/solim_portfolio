import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: string;
      main_hover: string;
      main_pressed: string;
      white: string;
      black: string;
      red: string;
      blue: string;
      gray72: string;
      grayDC: string;
      grayEA: string;
      grayF9: string;
      grayA9: string;
      grayEA: string;
      gray97: string;
    };
    effect: {
      gradient: string;
      img_gradient: string;
      shadow: string;
    };
  }
}
