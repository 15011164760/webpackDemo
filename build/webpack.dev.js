const commonConfig=require('./webpack.base');
const {smart:merge}=require("webpack-merge");
module.exports=merge(commonConfig,{
    mode:'development',
    devServer:{
        port:8099,//服务器启动的端口 8080
        contentBase:'./dist',//服务器静态资源文件夹
        progress:true,//打包时显示进度条
        open:true,//启动服务器后，自动打开浏览器
        compress:true,//开启 gzip 压缩
    }
})