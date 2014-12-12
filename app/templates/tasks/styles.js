'use strict';

var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var env = require('./utils/env');
var paths = require('./utils/paths');
var handlers = require('./utils/handlers');
var notifyer = require('./utils/notifyer');

// Styles task
module.exports = function() {
  return gulp.src(paths.sources.styles)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe(sass({
      onError: handlers.onGenericError,
      sourceComments: env.production ? false : 'map',
      outputStyle: env.production ? 'compressed' : 'expanded'
    }))
    // Optionally add autoprefixer
    .pipe(env.production ? autoprefixer('last 2 versions', '> 1%') : util.noop())
    // These last two should look familiar now :)
    .pipe(gulp.dest(paths.dist.styles))
    // Notify for live reload
    .pipe(notifyer.reload())
  ;
};
