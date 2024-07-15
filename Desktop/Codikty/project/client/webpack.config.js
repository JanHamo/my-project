const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      util: require.resolve('util/'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert/'),
      url: require.resolve('url/'),
    },
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // يمكن إضافة أي إعدادات مخصصة هنا إذا لزم الأمر
      return middlewares;
    },
    // يمكن إضافة إعدادات أخرى إذا لزم الأمر
  },
};
