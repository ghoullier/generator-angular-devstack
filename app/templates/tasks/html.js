'use strict';

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var plumber = require('gulp-plumber');
var template = require('gulp-template');

var config = require('./utils/config');
var paths = require('./utils/paths');
var handlers = require('./utils/handlers');
var notifyer = require('./utils/notifyer');

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
    .pipe(template(config.templated))
    // Will minimify html
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    // And put it in the dist folder
    .pipe(gulp.dest(paths.dist.root))
    // Notify for live reload
    .pipe(notifyer.reload());
};
