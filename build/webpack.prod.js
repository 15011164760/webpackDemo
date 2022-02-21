const commonConfig=require('./webpack.base');
const {smart:merge}=require("webpack-merge");
module.exports=merge(commonConfig,{
    mode:'production'
})