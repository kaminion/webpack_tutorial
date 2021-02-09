# bundle
- 웹에 사용되는 모든 파일들과 확장자들을 하나의 파일로 묶어주는 것
- 서로 참조관계의 모듈들을 하나의 파일로 묶는 것을 번들이라고 한다.

# bundle 사용 이유
- 모든 모듈을 로드하기 위해 검색하는 시간이 단축된다 (파일 하나에 모이므로)
- 사용되지않는 코드를 삭제해준다.
- 파일 크기를 줄여준다.

# Webpack
- 웹 어플리케이션 모듈 번들러
- 여러가지 파일들을 번들링 시켜주는 도구
- **Entry** : 모듈의 의존 관계를 이해하기 위한 시작점을 설정
- 의존성 그래프를 그린 후 번들링 작업 시작
- 최상위 모듈을 Entry에 적어주어야함
- **Output** : Webpack이 생성하는 번들 파일에 대한 정보를 설정
- 파일이 생성되는 위치이기 때문에 절대경로로 작성하여야함.

# Webpack initialize
- npm i -D(--save-dev) webpack webpack-cli
- webpack-cli는 웹팩을 실행할 수 있는 명령어들을 지원해주는 패키지
- npx : node 모듈(여기선 node_modules, 글로벌 모듈의 경우 설치된 어딘가)의 실행 파일을 찾아 실행시켜주는 것, npx webpack으로 실행가능
- 웹팩의 소스 기본경로는 src(실 개발)와 dist(배포 아웃풋)임
- 웹팩 실행 시 어디 환경인지 타겟을 설정해야함 **(default : web)**
- 소스코드 최적화 설정이 자동으로 들어가 있음

~~~bash
    npx webpack --target=node
~~~

위 명령어는 아래와 같음 (bundle.js와 main.js가 차이)

~~~js
    const path = require('path');

    module.exports =
    {
        entry: "./src/index.js",
        output: {
            path:path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        target:'node'
    }
~~~

해당 파일로 만들어주고도 npx webpack을 하면 설정이 자동적용되어 실행됨(tsc와 똑같음)

# Mode
- Package.json --save-dev, --save
- 개발환경과 프로덕션 환경, none지정도 가능하다.
- Mode & Webpack-merge

# Package.json
- 어플리케이션 내부에 직접 포함되는 모듈 (dependencies, --save, default)
- 개발 과정에 필요한 모듈(devDependencies : --save-dev, -D)

# Loader
- Entry를 시작점으로 다양한 모듈을 다룸
- Loader는 웹팩의 의존성 그래프를 그리는 과정에서 다양한 타입의 모듈들을 입력받고 처리하는 역할을 함
- **웹팩이 기본적으로 인식하는 파일은 js, json이기 때문에 로더를 설정해주어야함.**
- module의 rules는 지원해야하는 로더를 넣음, 객체형과 문자열로 넣을수있음
- 로더들은 외부에서 가져와야하므로 설치해야함.
- css의 경우 style-loader와 css-loader 두개를 설치함(style태그 주입)
- test의 경우 어떤파일이 로더의 대상인지 정규표현식으로 표현
- use는 사용하는 로더키와 로더의 동작을 변경하는 options key를 사용함

# css
- normalize.css(다르게 적용되는 스타일만 같게) 또는 reset.css(대부분 제거)