const CracoLessPlugin = require('craco-less');
const CracoCSSModules = require('craco-css-modules');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {'@primary-color': '#1DA57A'},
            javascriptEnabled: true,
            module: true,
          },
        },
      },
    },
    {
      plugin: CracoCSSModules,
    },
  ],
};
