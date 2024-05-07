const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { watch } = require("fs");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  mode: process.DEVELOPMENT === "dev" ? "development" : "production",
  watch: true,
};
