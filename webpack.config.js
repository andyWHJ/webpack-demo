/**
 * Created by andy on 2017/6/6.
 */
const path  = require('path');
module.exports = {
    entry: {
        'first': './src/first.js'
    },
    output: {
        filename: "[name].js",
        path:path.resolve(__dirname,'dist')
    }
};