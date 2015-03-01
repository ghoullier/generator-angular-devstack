'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var args = require('./utils/cli-args');
var paths = require('./utils/paths');
var string = require('./utils/string');

var reload = browserSync.reload;
var dist = paths.dist;
var sources = paths.sources;
var entries = sources.entries;
var env = args.env || 'dev';
var config = string.compile(paths.sources.config, {
  env: env
});

module.exports = function() {
  // Watch all application scripts
  gulp.watch([sources.scripts], [
    'lint',
    'scripts.app'
  ]);
  // Watch vendor script
  gulp.watch([entries.vendor], [
    'scripts.vendor'
  ]);
  // Watch styles
  gulp.watch([sources.styles], [
    'styles'
  ]);
  // Watch html files
  gulp.watch([entries.html], [
    'html'
  ]);
  // Watch views
  gulp.watch([sources.partials], [
    'templates'
  ]);
  // Watch images
  gulp.watch([sources.images], [
    'images'
  ]);
  // Watch config
  gulp.watch([config], [
    'config'
  ]);
  // Watch for live reload
  gulp.watch([
    dist.root + '*.html',
    dist.scripts + '*.js',
    dist.images + '*.*',
    dist.fonts + '*.*'
  ]).on('change', reload);
};
