const path = require('path');

module.exports = {
  context: __dirname,
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
        loader : 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  cache: true,
}