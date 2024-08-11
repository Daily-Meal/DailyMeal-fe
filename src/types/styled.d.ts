import "styled-components";
import { Colors } from "../styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: {
      main: string;
    };
    // 추가적인 속성들을 여기에 정의할 수 있습니다.
  }
}

// styled.d.ts 파일을 만드는 이유
// styled-components에서 사용하는 테마 객체의 타입을 TypeScript에게 명확히 알려주기 위해서
// 이 파일을 통해 styled-components의 ThemeProvider를 사용할 때 테마 객체의 타입을 명시적으로 정의하고,
//코드 전반에서 그 타입 정보를 사용할 수 있도록 함

// 예를 들어, styled.d.ts 파일을 만들지 않으면 TypeScript는 styled-components의 테마 객체가
// 어떤 구조를 가지고 있는지 정확히 알 수 없으며,
//이로 인해 타입 추론이 제대로 이루어지지 않을 수 있음 styled.d.ts 파일을 만들어서 테마 타입을 정의하면,
//자동 완성 기능이 정확하게 작동하고, 타입 관련 오류를 미리 방지 가능

//이미지를 사용하게 되면 image.d.ts를 만들어야할 수 있음
