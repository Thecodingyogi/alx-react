const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist')
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
	  loader: 'image-webpack-loader',
	  options: {
	    name: '[name].[ext]',
	    outputPath: 'images',
	  }
	}
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
	  loader: 'babel-loader',
	  options: {
	    presets: ['@babel/preset-env', '@babel/preset-react']
	  }
	}
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

