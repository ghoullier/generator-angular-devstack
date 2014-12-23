'use strict';

var gulp = require('gulp');

var paths = require('./utils/paths');

// Images task
module.exports = function() {
  return gulp.src(paths.sources.fonts)
    .pipe(gulp.dest(paths.dist.fonts))
  ;
};
