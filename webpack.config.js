var webpack = require('webpack');

var config = {
  cache: true,
  entry: './transducers.js',
  output: {
    filename: './dist/transducers.js',
    library: 'transducers'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: []
};

if(process.env.NODE_ENV === 'production') {
  config.output.filename = './dist/transducers.min.js';
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin()
  ]);
}

module.exports = config;
