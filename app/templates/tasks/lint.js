var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var paths = require('./paths');
var handlers = require('./handlers');

// JSHint task
module.exports = function() {
  var ignored = ['!', paths.modules.templates, 'module.js'].join('');
  return gulp.src([paths.sources.scripts, ignored])
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
};
