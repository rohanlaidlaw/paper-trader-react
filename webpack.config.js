const path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: [
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, './www'),
    filename: 'bundle.js',
    publicPath: 'www/',
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: [
      '*', '.webpack.js', '.web.js', '.js', '.json', '.jsx',
    ],
  },
};
