const Dotenv = require('dotenv-webpack');
const withImages = require('next-images');

require('dotenv').config();
const { publicRuntimeConfig } = require('./next.runtimeConfig');

const DEPLOY_BLACK_LIST = ['templates/ncku', 'templates/ncku-en'];

module.exports = withImages({
  assetPrefix: publicRuntimeConfig.GITHUB
    ? `/${publicRuntimeConfig.PROJ_NAME}/`
    : '',
  exportPathMap: function() {
    const routes = {
      '/': { page: '/' },
      index: { page: '/index' },
      support: { page: '/support' },
      upload: { page: '/upload' },
    };

    if (process.env.DEPLOY_ENV === 'github') {
      DEPLOY_BLACK_LIST.forEach(route => {
        delete routes[route];
      });
    }

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
