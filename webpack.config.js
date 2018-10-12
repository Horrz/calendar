const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/
    },
    {
      loader: 'style-loader!css-loader',
      test: /\.css$/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
