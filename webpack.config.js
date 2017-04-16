var path = require('path')

module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /node-modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ['css-loader' ]
    }]
  }
}
