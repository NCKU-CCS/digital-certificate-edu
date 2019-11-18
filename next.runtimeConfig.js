const publicRuntimeConfig = {
  GITHUB: process.env.DEPLOY_ENV === 'github',
  PROJ_NAME: 'digital-certificate-edu',
  MAIN_HOST: process.env.MAIN_HOST,
};

module.exports = {
  publicRuntimeConfig,
};
