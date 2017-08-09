const path = require('path')

const config = {
  entry: './src/index',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
  cache: false,
  devtool: 'source-map',
  module: {
    rules: [
       { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}

module.exports = config
