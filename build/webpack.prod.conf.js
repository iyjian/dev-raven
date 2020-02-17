const path = require('path')

module.exports = {
  mode: 'production',
  target: 'webworker',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'main.js'
  }
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     URL: 'url-polyfill',
  //   })
  // ]
}