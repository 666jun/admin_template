module.exports = {
  lintOnSave: false,  //关闭EsLint
  publicPath:'/',
  css: {
    loaderOptions: {
      sass: {
        /*如果sass-loader 8.x key为prependData
        * 如果sass-loader 9.x key为additionalData */
        prependData: `@import "~@/assets/css/variable/variables.scss";`
      }
    }
  },
}
