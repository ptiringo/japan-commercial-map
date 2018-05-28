const path = require("path");
const convert = require("koa-connect");
const proxy = require("http-proxy-middleware");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "app.js"
  },
  mode: "development",
  serve: {
    content: "./app",
    open: true,
    port: 8090,
    add: (app, middleware, options) => {
      app.use(convert(proxy("/api", { target: "http://localhost:8080" })));
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
