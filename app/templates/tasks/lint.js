'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');

var paths = require('./utils/paths');
var handlers = require('./utils/handlers');

// JSHint task
module.exports = function() {
  var files = [
    paths.sources.scripts,
    '!' + paths.modules.templates + 'module.js',
    '!' + paths.sources.entries.config
  ];
  return gulp.src(files)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
  ;
};
