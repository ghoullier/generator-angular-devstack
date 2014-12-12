'use strict';

var gulp = require('gulp');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var ngAnnotate = require('browserify-ngannotate');
var stream = require('vinyl-source-stream2');
var env = require('./utils/env');
var paths = require('./utils/paths');
var handlers = require('./utils/handlers');
var notifyer = require('./utils/notifyer');
var entries = paths.sources.entries;

module.exports = function() {
  return browserify({
      entries: entries.app,
      debug: !env.production
    })
    // Anotate angular di
    .transform({
      add: true,
      single_quotes: true
    }, ngAnnotate)
    // Bundle
    .bundle()
    // Catch errors
    .on('error', handlers.onBrowserifyError)
    // Bundle to a single file
    .pipe(stream('app.js'))
    // Minimify app js only in production
    .pipe(env.production ? uglify({
      mangle: true
    }) : util.noop())
    // Output it to our dist folder
    .pipe(gulp.dest(paths.dist.scripts))
    // Notify for live reload
    .pipe(notifyer.reload())
  ;
};
