module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //粘贴官网的 【npm i babel-plugin-import -D】自动按需导入的配置
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
