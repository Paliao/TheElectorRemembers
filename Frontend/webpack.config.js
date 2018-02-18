const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': __dirname + '/src'
    }
  },
    plugins: [
      new ExtractTextPlugin('app.css')
    ],
   module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }, {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: 'file'
      }
    ]
  }
}