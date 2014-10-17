var gulp = require('gulp');
var paths = require('./paths');

module.exports = function() {
  // Watch all application scripts
  gulp.watch([paths.sources.scripts], [
    'lint',
    'scripts.app'
  ]);
  // Watch vendor script
  gulp.watch([paths.sources.vendorJs], [
    'scripts.vendor'
  ]);
  // Watch styles
  gulp.watch([paths.sources.styles], [
    'styles'
  ]);
  // Watch html files
  gulp.watch([paths.sources.mainHtml], [
    'views'
  ]);
  // Watch views
  gulp.watch([paths.sources.views], [
    'templates'
  ]);
  // Watch images
  gulp.watch([paths.sources.images], [
    'images'
  ]);
};
