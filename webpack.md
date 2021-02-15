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

# webpack이 바라보는 Module
- js (default로 인식하므로 로더가 필요 없음)
- css
- sass
- hbs
- jpg, png 
- 기타 등등

# CleanWebpackPlugin
- 이전 빌드 결과물 제거 플러그인

# css
- normalize.css(다르게 적용되는 스타일만 같게) 또는 reset.css(대부분 제거)
- css를 파일별로 모듈로 사용하여 불러오는 것 MiniCssExtractPlugin,  (style-inline은 style-loader)
- css-loader에서 모듈옵션은 js 모듈로 사용 여부를 나타낸다.
- 최적화 모듈은 OptimizeCssAssetsPlugin

# handlebars(hbs)
- 컴파일러이므로 dev depenedency

# Plugin
- 웹팩이 동작하는 것에 개입함
- 번들파일 변경, 개발 편의성 제공, 프로덕션에서 코드 최적화 등 진행
- 외부 저장소에 있는 플러그인과 내부 저장소에 있는 플러그인으로 나뉨

# caching
- 번들링 될 때 마다 번들 파일에 해시값을 적용하여 캐싱 방지
- 빌드 될 때만 해시값 적용
- 해시, 컨텐츠 해시, 청크 해시 사용가능 
- 파일이 계속 생성되므로, 보통 이 문제를 해결해주는 플러그인을 설치함

# chunk
- 번들링 시 파일 크기가 커질 수 있다.
- 몇가지 기준에 의해 분리한다.
- 분리되어있는 파일을 청크라고 한다.
- 런타임 때 사용되는 청크들을 런타임 청크라고 한다. (캐시가 적용되어 런타임시 더 빠르게 적용)
- 벤더 청크파일(외부 패키지 파일들)

# optimazation
- 웹팩의 번들파일을 최적화 시켜주는 역할을 담당함
- chunk 단위로 쪼개는 것도 최적화 시켜주는 것임

# minification & Mangling
- 주석제거, log 제거
- 분기문 삼항연산자표현, 표현 난독화(uglyfi, mangling)
- 압축 및 난독화는 사용자를 위한 최적화임

# Development & Production Mode
- 웹팩에서 빌드 시간이 소요되는 것을 방지하기 위해 설정파일을 따로 둘 수 있다.
- 해당 내용은 npm i -D webpack-merge로 설치를 한 뒤
- common과 dev, production 으로 웹팩을 나누어놨다
- 스크립트에서 --config 옵션으로 실행 웹팩파일을 바꿀 수 있다.

# define Plugin
- 웹팩에 bulit-in 되어 있는 플러그인
- 모듈들이 상수값을 활용할 수 있게 해줌

# 윈도우 npm 스크립트
- 맥이었다면 NODE_ENV=DEVELOPMENT webpack --conf... 이었을 것
~~~js
  "scripts": {
    "dev": "SET NODE_ENV=DEVELOPMENT & webpack --config webpack.dev.js",
    "build": "SET NODE_ENV=PRODUCTION & webpack --config webpack.prod.js"
  },
~~~

# 개발환경
- webpack-dev-server (웹팩 개발서버)
- 직접실행시킬 수 있음 (./node_modules/.bin/webpack-dev-server), config 플래그로 웹팩 지정시켜줘야함. (perceptive, 관점)
- webpack 4버전 이상은 webpack serve 옵션으로 실행가능
- 결과물이 메모리상에 있음
- 파일 프로토콜이 아님
- 라이브 리로딩 방식임
- historyApiFallback:false // 라우팅과 관련된 키, 제공하지 않는 라우팅으로 접근하면 예외처리, 특정한 곳으로 이동처리 가능

# 정적 리소스 파일
- 이미지와 같은 정적 리소스파일들도 모듈로 다룸
- 파일로더와 URL 로더 
- 파일로더는 import 또는 require 키워드를 통해 사용하는 파일들을 output 디렉터리 폴더로 파일을 카피해오는 로더임.

# URL-loader
- 문자열 형태로 리소스 표현 (inline 형태로)
- 파일을 입력받고 Data uris 라는 특이한 객체로 반환하게 됨
- data:mediatype;base64,data (base64는 이진수값을 텍스트로 인코딩)
- 리소스 요청 수를 줄일 수 있음 (문자열 형태이므로), 작은 이미지에만 사용 권장
- 크기 제한 넘어갈 경우, fallback 옵션으로 다른 로더가 적용되게 할 수 있다.

# SASS (SCSS) 확장자가 두개
- ; {} 표현하느냐 마냐에 따라 확장자(sass | scss)가 갈림
- node 환경에서 읽어들이는 node-sass, sass loader 필요
- sass-loader 작동 -> css로 컴파일 후 css 로더가 받아 처리(chaining) 

# POST CSS
- CSS 를 위해 사용하는 플러그인
- 자바스크립트 플러그인 적용하여 CSS를 변형시키는 역할을 함 (CSS 에도 플러그인 적용 )
- prefix 자동으로 붙여줌 (-moz -webkit 등, auto prefixer라고 함 plugin)
- 하위 브라우저에서 사용 가능하게 vender prefix를 적용함 (위의 내용과 동일)
- 이러한 내용의 플러그인들은 대부분 본 모듈과 loader를 따로따로 설치해야함
- autoprefixer는 package.json에서 browserlist를 설정해주지않으면 적용이 되지않는다.

# stylelint
- 코딩 규칙과도 같은 사소한 부분들을 제어해주는 도구(lint)
- stylelint stylelint-scss stylelint-webpack-plugin stylelint-config-standard
- 개발 환경시에만 적용(plugin)

# babel
- css autoprefixer처럼 js에서 하위 브라우저 호환하기 위한 플러그인
- 바벨 역시 컴파일 하기 때문에 cli 등 필요한 모듈이 많다.
- cli는 실행하기 위한 환경에 불과
- 코어가 있어야 자바스크립트 파일을 입력받아 변환시킴 (변환을 시킬때만 사용)
- @babel/cli @babel/core @babel/preset-env
- 웹팩에서 사용될 수 있게 babel-loader도 사용
- 제공되는건 보통 minification과 transfiling이 제공되기 때문에 범위 제외
- polyfill - ES5 문법으로 대응 할 수 있게 지원해주는 모듈 (하위 브라우저들에게 지원될 수 있게 제공)