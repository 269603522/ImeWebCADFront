module.exports = {
 proxy: {
    '/apis': {  //将www.exaple.com印射为/apis
      target: 'http://192.168.255.103:2019', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/apis': ''  //需要rewrite的,
      }       
    }
 }
}