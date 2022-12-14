"use strict";
// const API_ORIGIN = process.env.VUE_APP_API_ORIGIN
// const API_COMMON_PATH = process.env.VUE_APP_API_COMMON_PATH
// const APPKEY = process.env.VUE_APP_APPKEY
// const APPID = process.env.VUE_APP_APPID
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/Painter-aggregation/" : "/",
  filenameHashing: false,

  css: {
    sourceMap: true,
    loaderOptions: {},
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://private-a3c4c8-painteraggregation.apiary-mock.com/",
        changeOrigin: true,
      },
    },
  },
};
