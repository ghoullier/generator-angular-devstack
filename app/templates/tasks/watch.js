'use strict';

var gulp = require('gulp');

var args = require('./utils/cli-args');
var paths = require('./utils/paths');
var string = require('./utils/string');

var entries = paths.sources.entries;
var env = args.env || 'dev';
var config = string.compile(paths.sources.config, {
  env: env
});

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
    'html'
  ]);
  // Watch templates
  gulp.watch([paths.sources.partials], [
    'templates'
  ]);
  // Watch images
  gulp.watch([paths.sources.images], [
    'images'
  ]);
  // Watch config
  gulp.watch([config], [
    'config'
  ]);
};
