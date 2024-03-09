const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',                        // 配置模式为开发模式 development
    entry: "./src/index.js",                    // 配置打包入口 从哪里开始打包

    output: {
        filename: "bundle.js",                  // 打包出来的文件名加什么也可以自定义
        path: path.resolve(__dirname, 'build')  // 打包出来的文件默认是在dist里面 我想更改也很简单
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000,
        hot: true
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            minify: {
                collapseWhitespace:true             // 一行显示
            },
            hash:true
        })
    ],

    module: {
        rules: [                                        // 设定规则
            {
                test: /\.js$/,                          // 这个就是一个正常 匹配js文件
                use: [
                    {
                        loader: "babel-loader",         // babel-loader 使用起来
                        options: {
                            presets: [                  // 让他帮我把es6+的代码转es5
                                "@babel/preset-env"
                            ],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", {legacy: true}],
                                ["@babel/plugin-proposal-class-properties", {loose: true}]
                            ]
                        }
                    }
                ],
                exclude: /node_module/,                 // 但是别全给转啊 我不要转node_module里面的
                include: /src/                          // 我只要src里面的 因为这才是我写的啊
            },

            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},           // 将写的css 添加到style标签里面去
                    {loader: "css-loader"},             // 解析import导入方式 和 url()
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './image',
                },
            }
        ]
    }
};
