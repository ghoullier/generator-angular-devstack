var gulp = require('gulp');
var refresh = require('gulp-livereload');
var plumber = require('gulp-plumber');
var lrserver = require('./live-reload');
var paths = require('./paths');
var handlers = require('./handlers');

// Images task
module.exports = function() {
  return gulp.src(paths.sources.images)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    .pipe(gulp.dest(paths.dist.images))
    .pipe(refresh(lrserver));
};
