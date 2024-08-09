const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'true-microfrontends--mfe2',
  filename: 'remoteEntry.js',

  exposes: {
    './web-components': './src/bootstrap.ts',
  },

  shared: {
    ...shareAll({ requiredVersion: 'auto' }),
  },

});
