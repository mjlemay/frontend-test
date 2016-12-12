const _ = require('lodash');
const AssetsPlugin = require('assets-webpack-plugin');
const webpack = require('webpack');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const jeet = require('jeet');
const nib = require('nib');
const rupture = require('rupture');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const AUTOPREFIXER_LOADER= `autoprefixer-loader?
{browsers:
  ${
    JSON.stringify([
      'Android 2.3',
      'Android >= 4',
      'Chrome >= 20',
      'Firefox >= 24',
      'Explorer > 10',
      'iOS >= 6',
      'Opera >= 12',
      'Safari >= 6'
    ])
  }
}`;

/* WEBPACK CONFIG BELOW
// Webpack is very powerful but can be very confusing to follow. Edit at your own risk!
*/

const config = {

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ],

  resolve: {
    alias: {
      __ROOT__: path.resolve(__dirname),
      __SRC__: path.resolve(__dirname, 'src')
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: `style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!${AUTOPREFIXER_LOADER}!csscomb`
      },
      {
        test: /\.styl$/,
        loader: `style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!stylus`
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      }
    ]
  },
  stylus: {use: [(require('nib'))(), (require('rupture'))(), (require('jeet'))()]}
};


const frontend = _.merge({}, config, {
  entry: {
    app: path.resolve(__dirname, 'src', 'reactApp.js'),
    vendor: [
      'lodash',
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename:'js/[name].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity})
  ].concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('css/styles.css', {allChunks: true}),
    new AssetsPlugin({path: path.resolve(__dirname, 'public', 'assets')}),
    new ChunkManifestPlugin({filename: 'webpack-manifest.json', manifestVariable: 'webpackManifest'})
  ]),
  module: {
    loaders: config.module.loaders.map(loader => {
      if (loader.loader.indexOf('stylus') !== -1) {
         _.merge(loader, {
           loader: ExtractTextPlugin.extract(`css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]!${AUTOPREFIXER_LOADER}!stylus`)
         });
      } else if (loader.loader.indexOf('css-loader') !== -1) {
         _.merge(loader, {
           loader: ExtractTextPlugin.extract(`css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]!csscomb!${AUTOPREFIXER_LOADER}`)
         });
      }
      return loader;
    })
  }
});

module.exports = frontend;
