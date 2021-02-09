const path = require('path');
/* css 로더는 css파일들을 읽어주고, style-loader는 읽은 파일들을
    style 태그로 만들어 head 태그안에 넣어줌
*/ 
// use배열에 문자열만 넣으면 loader 이름만 들어간거임(나머지 생략)

module.exports =
{
    entry: "./src/index.js",
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode:"none",
    module:{
        rules:[{
            test:/\.css$/i,
            use:[
                {
                    loader:'style-loader',
                    options:{
                        injectType:'singletonStyleTag'
                    }
                },
                {
                    loader:'css-loader',
                    options:{
                        modules:true
                    }
                }
            ]
        }]
    },
    target:'web'
}