const path = require('path');
/* css 로더는 css파일들을 읽어주고, style-loader는 읽은 파일들을
    style 태그로 만들어 head 태그안에 넣어줌
*/ 
// use배열에 문자열만 넣으면 loader 이름만 들어간거임(나머지 생략)

const { merge } = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 웹팩 의존성에 terser 모듈이 있다. js 컴프레서, minimize true여야함
const TerserWebpackPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common');

const config =
{
    entry: "./src/index.js",
    output: {
        path:path.resolve(__dirname, 'dist'), 
        filename: '[name].[chunkhash].js' // hash, contenthash chunkhash
    },
    mode:"production", // production 일 경우 압축, 직접 리소스 최적화설정도 가능
    plugins:[
        // css nano를 이용한 plugin
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions:{
                preset: ['default', { discardComments: { removeAll: true} }]
            },
            canPrint:true
        })
    ],
    optimization:{
        runtimeChunk:{
            name:'runtime'
        },
        splitChunks:{
            cacheGroups:{
                commons:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'venders',
                    chunks:'all'
                }
            }
        },
        minimize:true, // Terser 생략가능, 적어주면 옵션 커스터마이징 가능
        minimizer:[new TerserWebpackPlugin()] // Terser의 옵션 커스터마이징 가능함
    },
    target:'web'
}

module.exports = merge(common, config);