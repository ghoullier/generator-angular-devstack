'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var cache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var template = require('gulp-template');

var config = require('./utils/config');
var handlers = require('./utils/handlers');
var paths = require('./utils/paths');

module.exports = function () {
  return gulp.src(paths.sources.partials)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    // Inject static template variables
    .pipe(template(config.TEMPLATED_VARIABLES))
    // Will minimify html
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    // Generate templates module
    .pipe(cache({
      filename: 'module.js',
      module: '<%= appname %>.templates',
      moduleSystem: 'Browserify',
      root: 'partials/',
      standalone: true
    }))
    .pipe(gulp.dest(paths.modules.templates))
  ;
};
