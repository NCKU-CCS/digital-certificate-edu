const Dotenv = require('dotenv-webpack');
const withImages = require('next-images');

require('dotenv').config();
const { publicRuntimeConfig } = require('./next.runtimeConfig');

module.exports = withImages({
  assetPrefix: publicRuntimeConfig.GITHUB
    ? `/${publicRuntimeConfig.PROJ_NAME}`
    : '',
  exportPathMap: function() {
    const routes = {
      '/': { page: '/' },
      index: { page: '/index' },
      support: { page: '/support' },
      upload: { page: '/upload' },
      descript: { page: '/descript' },
    };
    return routes;
  },
  webpack: function(config) {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        systemvars: true,
      }),
    ];
    return config;
  },
  publicRuntimeConfig,
});
