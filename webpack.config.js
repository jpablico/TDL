import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/Script/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
			"style-loader", 
			"css-loader",
			"sass-loader"
		],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
