const convert = require("koa-connect");
const proxy = require("http-proxy-middleware");

module.exports = {
  content: "app",
  open: true,
  port: 8090,
  add: (app, middleware, options) => {
    app.use(convert(proxy("/api", { target: "http://localhost:8080" })));
  }
};
