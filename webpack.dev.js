const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = {
    mode:'development',
    devServer:{
        open:false, // 스크립트 실행 후 기본 브라우저 탭 열리며 실행
        overlay:true, // 에러메시지 발생시 콘솔창이나 터미널이 아닌 브라우저 화면에 나타냄
        historyApiFallback:{
            rewrites:[
                {from:/^\/subpage$/, to:'subpage.html'},
                {from:/./, to:'404.html'}
            ]
        }, // 라우팅과 관련된 키, 제공하지 않는 라우팅으로 접근하면 예외처리, 특정한 곳으로 이동처리 가능
        port:3333
    }
};


module.exports = merge(common, config);