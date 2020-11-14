const path = require("path")//用来解析路径信息相关的模块

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {//配置对象
    // 入口
    entry: {
        app: path.resolve(__dirname, "src/index.js")  //__dirname代表当前文件所在目录的绝对路径
    },
    // 出口
    output: {
        filename: 'static/js/[name].bundle.js',//可以带路径
        path: path.resolve(__dirname, 'dist')
    },
    // 模块加载器
    module: {
        rules: [

        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html',//将哪个页面作为模板进行打包处理(在根目录中寻找)
            filename:'index.html'//生成页面(在output指定的path下)
        })
    ]

}