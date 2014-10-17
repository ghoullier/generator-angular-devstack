var gulp = require('gulp');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var ngAnnotate = require('browserify-ngannotate');
var stream = require('vinyl-source-stream2');
var env = require('./env');
var paths = require('./paths');
var handlers = require('./handlers');

module.exports = function() {
  return browserify({
      entries: paths.sources.mainJs,
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
    .pipe(gulp.dest(paths.dist.scripts));
};
