'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var util = require('gulp-util');

var args = require('./utils/cli-args');
var paths = require('./utils/paths');
var handlers = require('./utils/handlers');

// Images task
module.exports = function() {
  var optimize = args.optimize;
  return gulp.src(paths.sources.images)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    // Optimize image size
    .pipe(optimize ? imagemin({
      optimizationLevel: 3,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }) : util.noop())
    .pipe(gulp.dest(paths.dist.images))
  ;
};
