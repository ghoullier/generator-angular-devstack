var gulp = require('gulp');

// Dev task
gulp.task('default', ['watch'], require('./tasks/default'));

// Clean task
gulp.task('clean', require('./tasks/clean'));

// Templates task
gulp.task('templates', require('./tasks/templates'));

// Config task
gulp.task('config', require('./tasks/config'));

// Build task
gulp.task('build', ['clean', 'config', 'templates'], require('./tasks/build'));

// Watch task
gulp.task('watch', ['build'], require('./tasks/watch'));

// JSHint task
gulp.task('lint', require('./tasks/lint'));

// Styles task
gulp.task('styles', require('./tasks/styles'));

// Application scripts task
gulp.task('scripts.app', require('./tasks/scripts-app'));

// Vendor scripts task
gulp.task('scripts.vendor', require('./tasks/scripts-vendor'));

// Views task
gulp.task('views', require('./tasks/views'));

// Images task
gulp.task('images', require('./tasks/images'));

// Publish task
gulp.task('publish', require('./tasks/publish'));
