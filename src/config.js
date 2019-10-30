// personality/src/config.js

module.exports = {
  appName: process.env.APP_NAME || 'anon',
  projectId:
    process.env.APP_ENV === 'PROD'
      ? process.env.PROD_PROJECT_ID
      : process.env.TEST_PROJECT_ID,
  port: process.env.PORT || 8080,
};
