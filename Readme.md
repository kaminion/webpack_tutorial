# Module
- 프로그램을 구성하는 내부의 코드가 기능별로 나뉘어져 있는 형태
- Module을 사용하기 위해서는 Module System과 Module을 다루는 키워드가 제공되어야 함 (모듈이 어떤 표준을 따르냐에 따라)
- CommonJS(Node.js)
- ESM (ECMAScript 2015~)
- 이 부분은 typescript module 키워드와도 동일하다.
- 모듈 역시 하나의 객체
- CommonJS 는 require를 사용(import), export 시에는 module.exports 키 안에 담으면 됨
- Node는 기본적으로 commonjs를 따름 (npm i esm으로 esm 모듈 설치 가능)
- 실행 시 esm 표준을 따르게 해야함
~~~bash
    # -r 옵션은 실행하는 파일의 다른 표준의 모듈도 사용할 수 있게 설정(commonjs와 동시사용가능)
    node -r esm index.js
~~~

~~~js
    // CommonJS
    // 불러오기
    const module_obj = require('module_location');
    
    // 내보내기
    module.exports = {...}
    module.exports.key = value;
    module.exports = value;
    exports.key = value // module.exports.key 의 축약형
~~~

~~~js
    // ESM
    // 불러오기
    import module_name from 'module.location';

    // 내보내기
    export const module
    export default module
~~~


# Module의 종류
- Built-in Core Module (예 : Node.js Module)
- Community-based Module (예 : NPM) 외부 모듈
- Local Module (특정 프로젝트에 정의된 모듈)

# Module 사용
- 코드의 재사용성이 증가한다.
- 코드의 관리가 편해진다.
- 코드를 모듈화하는 기준이 명확해야한다.

(**웹팩에 관한건 webpack.md 참조**)[https://github.com/kaminion/webpack_tutorial/blob/master/webpack.md]