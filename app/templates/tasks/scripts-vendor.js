var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var stream = require('vinyl-source-stream2');
var env = require('./env');
var paths = require('./paths');
var handlers = require('./handlers');

module.exports = function() {
  return browserify({
      entries: paths.sources.vendorJs,
      insertGlobals: true,
      debug: !env.production
    })
    .bundle()
    // Catch errors
    .on('error', handlers.onBrowserifyError)
    // Bundle to a single file
    .pipe(stream('vendor.js'))
    // Minimify app js only in production
    .pipe(env.production ? uglify({
      mangle: true
    }) : util.noop())
    // Output it to our dist folder
    .pipe(gulp.dest(paths.dist.scripts));
};
