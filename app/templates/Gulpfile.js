var gulp = require('gulp');

// Dev task
gulp.task('develop', ['watch'], require('./tasks/develop'));

// Clean task
gulp.task('clean', require('./tasks/clean'));

// Templates task
gulp.task('templates', require('./tasks/templates'));

// Config task
gulp.task('config', require('./tasks/config'));

// Build task
gulp.task('build', require('./tasks/build'));

// Watch task
gulp.task('watch', ['build'], require('./tasks/watch'));

// JSHint task
gulp.task('lint', require('./tasks/lint'));

// Styles task
gulp.task('styles', require('./tasks/styles'));

// Scripts task
gulp.task('scripts', ['scripts.app', 'scripts.vendor']);

// Application scripts task
gulp.task('scripts.app', require('./tasks/scripts-app'));

// Vendor scripts task
gulp.task('scripts.vendor', require('./tasks/scripts-vendor'));

// Views task
gulp.task('html', require('./tasks/html'));

// Fonts task
gulp.task('fonts', require('./tasks/fonts'));

// Images task
gulp.task('images', require('./tasks/images'));

// Package task
gulp.task('package', require('./tasks/package'));

// Publish task
gulp.task('publish', require('./tasks/publish'));
