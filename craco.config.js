const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
            //   '@primary-color': '#ce2e6f',
            //   '@btn-border-radius-base': '20',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
