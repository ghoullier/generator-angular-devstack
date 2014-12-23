'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');

var paths = require('./utils/paths');
var handlers = require('./utils/handlers');

// JSHint task
module.exports = function() {
  var ignored = ['!', paths.modules.templates, 'module.js'].join('');
  return gulp.src([paths.sources.scripts, ignored])
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
  ;
};
