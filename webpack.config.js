const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "app/script"),
    filename: "app.js"
  },
  mode: "development",
  devServer: {
    contentBase: "app",
    open: true
  }
};
