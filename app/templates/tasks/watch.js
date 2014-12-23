'use strict';

var gulp = require('gulp');
var paths = require('./utils/paths');

var entries = paths.sources.entries;

module.exports = function() {
  // Watch all application scripts
  gulp.watch([paths.sources.scripts], [
    'lint',
    'scripts.app'
  ]);
  // Watch vendor script
  gulp.watch([entries.vendor], [
    'scripts.vendor'
  ]);
  // Watch styles
  gulp.watch([paths.sources.styles], [
    'styles'
  ]);
  // Watch html files
  gulp.watch([entries.html], [
    'views'
  ]);
  // Watch views
  gulp.watch([paths.sources.partials], [
    'templates'
  ]);
  // Watch images
  gulp.watch([paths.sources.images], [
    'images'
  ]);
};
