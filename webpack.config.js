const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", //inputan yang ingin dibuat webpack
  //hasilnya
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      // style dan css loader
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },

      // babel loader
      {
        test: /\.js$/,
        exclude: "/node_modules/", //kecualikan folder node modules
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // html webpack plugin
    new htmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
    }),
  ],
};
