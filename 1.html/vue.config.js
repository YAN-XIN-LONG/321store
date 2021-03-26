module.exports = {
  //生产环境的配置
  devServer: {
    open: true, //配置开发环境下自动打开浏览器
    
    //代理【解决跨域】可以有多个代理
    proxy:{
       '/api':{
         target:'http://localhost:8080/', //代理的本地接口
         changeOrigin:true, //是否改变本地接口，同意
         pathRewrite:{
           '^api':"/" //请求数据时，使用 /api来代替端口号
         }
         //可以有多个代理，比如代理百度的SEO和SEM接口

       }
    }
  },

  //设置打包出来的文件里是否带随机生成的hash值【一般不用设置，除非你的项目不是vue-cli脚手架生成的】
  // filenameHashing:true【默认为true】

  //如果使用了语法规范es-lint可以关闭掉它
  lintOnSave: false,

  //配置在生产环境下打包的dist文件里的根文件index.html里的外链文件路径前是否加斜杠，【不配置默认会加】如果加了打包后就无法找到对应的外链文件即：一片空白。
  // 情景一： 在项目使用路由为 mode: 'history'模式时,配置的相对路径会有问题存在局限性，打包时还得注释掉mode: 'history'且不利于多页面开发。因此下面的才是完美的方法
  //  publicPath:process.env.NODE_ENV === 'production' ? './' : '/',
  //前景二：----------------------直接设置为生产环境下是空字符串就好了---------------------------------------------------------------
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',

  //配置rem适配【remUnit: 75 这个数值写成设计稿宽度的1/10】
  chainWebpack: config => {
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({
        remUnit: 75,
        remPrecision: 8
      })
      .end()
  }
}