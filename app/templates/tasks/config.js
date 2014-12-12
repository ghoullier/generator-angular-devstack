'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var env = require('./utils/env');
var paths = require('./utils/paths');
var config = paths.config.dev; // Default is dev

if (env.production) {
  config = paths.config.prod;
}

module.exports = function() {
  return gulp.src(config)
    .pipe(rename('config.js'))
    .pipe(gulp.dest(paths.sources.config))
  ;
};
