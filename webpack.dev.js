const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = {
    mode:'development',
    devServer:{
        historyApiFallback:false // 라우팅과 관련된 키
    }
};


module.exports = merge(common, config);