var gulp = require('gulp');
var cache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var paths = require('./paths');

module.exports = function () {
  return gulp.src(paths.sources.views)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(cache({
      filename: 'module.js',
      module: '<%= appname %>.templates',
      root: 'views/',
      standalone: true
    }))
    .pipe(gulp.dest(paths.modules.templates));
};
