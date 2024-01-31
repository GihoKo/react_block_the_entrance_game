// 타입스크립트는 기본적인 자바스크립트 코드만 이해할 수 있기 때문에
// 이미지와 같은 non-JS 모듈을 import할 때는 추가적인 선언이 필요하다.
// 이 코드는 모든 .png 파일이 모듈로서 import 될 수 있음을 TypeScript에게 알려준다.
declare module "*.png" {
    const value: any;
    export default value;
}

// 이 파일을 추가한 후, TypeScript 컴파일러가 이 파일을 자동으로 인식하도록 하려면 tsconfig.json 파일에 다음 설정을 추가해야 할 수도 있습니다:
// {
//     "include": ["typings.d.ts"]
//   }
