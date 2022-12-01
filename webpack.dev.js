"use strict";
const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",
  stats: "errors-warnings",
  devServer: {
    host: "local-ip",
    port: 5050,
    open: true,
    https: false,
    hot: false,
    allowedHosts: "all",
    client: {
      logging: "none",
      overlay: true,
      progress: false,
    },
    watchFiles: ["src/**", "static/**"],
    static: {
      watch: true,
      directory: path.join(__dirname, "/static"),
    },
    setupMiddlewares: function (middlewares, devServer) {
      console.clear();
      console.log(
        "-------------------------------------------------------------------"
      );
      console.log(path.resolve("src"));
      const port = devServer.options.port;
      const https = devServer.options.https ? "s" : "";
      const domain1 = `http${https}://${devServer.options.host}:${port}`;
      const domain2 = `http${https}://localhost:${port}`;

      console.log(`Project running at:\n  - ${domain1}\n  - ${domain2}`);

      console.log(
        "-------------------------------------------------------------------"
      );
      return middlewares;
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
