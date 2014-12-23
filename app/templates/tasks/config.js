'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

var args = require('./utils/cli-args');
var paths = require('./utils/paths');
var string = require('./utils/string');

var env = args.env || 'dev';
var config = string.compile(paths.sources.config, {
  env: env
});

module.exports = function() {
  return gulp.src(config)
    .pipe(rename('config.js'))
    .pipe(gulp.dest(paths.sources.app))
  ;
};
