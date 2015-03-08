'use strict';

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var plumber = require('gulp-plumber');
var template = require('gulp-template');

var templated = require('./utils/templated-variables');
var paths = require('./utils/paths');
var handlers = require('./utils/handlers');

var entries = paths.sources.entries;

// Views task
module.exports = function() {
  // Get our index.html
  gulp.src(entries.html)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    // Inject static template variables
    .pipe(template(templated))
    // Will minimify html
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    // And put it in the dist folder
    .pipe(gulp.dest(paths.dist.root))
  ;
};
