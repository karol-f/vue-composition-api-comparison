module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-composition-api-comparison/" : "/",
  outputDir: "docs",
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/styles/_variables.scss";'
      }
    },
    sourceMap: true
  }
};
