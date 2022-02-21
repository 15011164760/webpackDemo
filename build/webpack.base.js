const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        demo: './src/demo.js',
        demo1: './src/demo1.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template:'./src/1.html'
        // }),
        // new HtmlWebpackPlugin(
        //     {
        //         template: './src/1.html',
        //     }
        // ),
        new HtmlWebpackPlugin(
            {
                template: './src/1.html',//使用模板index.html
                filename: 'index1.html',//打包生成的文件名叫index.html
                chunks:['demo']//index.html里引用打包生成的index.js
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/2.html',//使用模板index.html
                filename: 'index2.html',//打包生成的文件名叫index.html
                chunks:['demo1']//index.html里引用打包生成的index.js
            }
        ),
    ]
};