const path = require('path');
/* css 로더는 css파일들을 읽어주고, style-loader는 읽은 파일들을
    style 태그로 만들어 head 태그안에 넣어줌
*/ 
// use배열에 문자열만 넣으면 loader 이름만 들어간거임(나머지 생략)

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =
{
    entry: "./src/index.js",
    output: {
        path:path.resolve(__dirname, 'dist'), 
        filename: 'bundle.[hash].js' // hash, contentHash chunkHash
    },
    mode:"none",
    module:{
        rules:[{
            test:/\.css$/i,
            use:[
                // {
                //     loader:'style-loader',
                //     options:{
                //         injectType:'singletonStyleTag'
                //     }
                // }, 외부 빠지는거 때문에 여기 위치
                {
                    loader:MiniCssExtractPlugin.loader
                },
                {
                    loader:'css-loader',
                    options:{
                        modules:true
                    }
                }
            ]
        },{
            test:/\.hbs$/,
            use:['handlebars-loader']
        }]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[contenthash].css' // 자바스크립트와 css 빌드 시점이 다르므로 contenthash 적용
        }), // CSS 외부로 빠짐 CSS도 캐싱제외가능
        new HtmlWebpackPlugin({
            title:'Webpack',
            template:'./template.hbs',
            meta:{
                viewport:"width=device-width, initial-scale=1.0"
            }
        }),
        new CleanWebpackPlugin()
    ],
    target:'web'
}