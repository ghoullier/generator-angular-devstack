'use strict';

var gulp = require('gulp');
var cache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var paths = require('./utils/paths');

module.exports = function () {
  return gulp.src(paths.sources.partials)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(cache({
      filename: 'module.js',
      module: '<%= appname %>.templates',
      moduleSystem: 'Browserify',
      root: 'partials/',
      standalone: true
    }))
    .pipe(gulp.dest(paths.modules.templates));
};
