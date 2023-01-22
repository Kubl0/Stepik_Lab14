const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        (async () => {
          const imageminMozjpeg = await import("imagemin-mozjpeg");
          return imageminMozjpeg.default({
            quality: 80,
          });
        })(),
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
