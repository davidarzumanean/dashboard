const sassResourcesLoader = require("craco-sass-resources-loader");
const path = require('path');

module.exports = {
  mode: "development",
  output: {
    path: __dirname,
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        modules: true,
        resources: [path.resolve(__dirname, "src/assets/styles/global/index.scss")],
      },
    },
  ],
};