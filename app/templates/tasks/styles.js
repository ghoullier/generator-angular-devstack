'use strict';

var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

var args = require('./utils/cli-args');
var paths = require('./utils/paths');
var handlers = require('./utils/handlers');

// Styles task
module.exports = function() {
  var optimize = args.optimize;
  return gulp.src(paths.sources.styles)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    // Prepare sourcemaps generation
    .pipe(optimize ? util.noop() : sourcemaps.init())
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe(sass({
      onError: handlers.onGenericError,
      sourceComments: optimize ? false : 'map',
      outputStyle: optimize ? 'compressed' : 'expanded'
    }))
    // Optionally add autoprefixer
    .pipe(optimize ? autoprefixer('last 2 versions', '> 1%') : util.noop())
    // Generate sourcemaps
    .pipe(optimize ? util.noop() : sourcemaps.write())
    // These last two should look familiar now :)
    .pipe(gulp.dest(paths.dist.styles))
    // Notify for live reload
    .pipe(browserSync.reload({
      stream: true
    }))
  ;
};
