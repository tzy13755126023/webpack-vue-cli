// webpack基于NodeJS
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: {
    // 可以有多个入口，也可以是一个，如果一个就默认从这一个开始分析
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包输出文件的目录
    filename: './build.js'
  },
  // watch: true // 用于开发环境(dev)，文件监视改动，自动产出build.js(还需要开发者手动刷新浏览器）
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/,
        loader: 'url-loader',
        options: {
          // 大于10000字节会被打包成重命名的图片资源，否则打包成base64
          limit: 10000
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env'], // 处理关键字，es6/7/8/9...都能转化
          plugins: ['transform-runtime'] // 处理函数
        }
      }
    ]
  },
  // 插件的执行顺序与元素索引有关系
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html' // 参照物
    })
  ]
}
