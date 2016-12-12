var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var webpack = require('webpack');
const webpackCongig = require('./webpack.config.js');
const bundler = webpack(webpackCongig);


/*
  gulp.task('default', () => {
}
*/

function startBundle (err, stats) {
  if (err) {
    throw new $.util.PluginError('webpack', err);
  }
}

function bundleNoWatchTask (done) {
  function bundle (err, stats) {
    startBundle(err, stats);
    return done();
  }
  bundler.run(bundle);
}


gulp.task('webpack', bundleNoWatchTask);
