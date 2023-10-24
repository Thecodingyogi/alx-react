const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
	  "file-loader",
	  {
	    loader: "image-webpack-loader",
	    options: {
	      disable: true,
	      name: "assets/[name].[ext]"
	    },
	  }
	]
      },
    ]
  }
};
