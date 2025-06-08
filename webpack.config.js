const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "micro-test": "micro-test@http://localhost:42001/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: false }),
  },

});
