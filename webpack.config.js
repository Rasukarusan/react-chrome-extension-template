const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    contents: './src/contents.tsx',
    background: './src/background.js',
  },
  output: {
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false, // LICENCE.txtを生成しない
    })],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './public/manifest.json',
          to: 'manifest.json'
        },
      ]
    }),
  ],
};
