const path = require('path');
const context = __dirname;

module.exports = {
  context,
  entry: './client/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)?/,
        include : path.resolve(__dirname, 'client'),
        loader : 'babel-loader',
      }
    ]
  },
  devtool: 'source-map',
  cache: true,
}