var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
      colors: true,
      reasons: true,
      chunks: true
  },
  module: {
      rules: [{
              test: /\.js$/,
              exclude: /node-modules/,
              loader: 'babel-loader'
            }]
  }
};
