const withImages = require('next-images');
const PROJ_NAME = 'digital-certificate-edu';
const GITHUB = process.env.DEPLOY_ENV === 'github';

module.exports = withImages({
  assetPrefix: GITHUB ? `/${PROJ_NAME}/` : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      index: { page: '/index' },
      support: { page: '/support' },
      upload: { page: '/upload' },
    };
  },
  webpack: function(config) {
    return config;
  },
});
