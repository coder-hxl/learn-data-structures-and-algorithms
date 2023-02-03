const path = require('path')

module.exports = {
  mode: "production",
  devtool: false,
  entry: './lib/index.ts',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'index.js',
    library: {
        name: 'algokit',
        type: 'umd',
    },
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
