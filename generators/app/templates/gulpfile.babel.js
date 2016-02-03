// Modules
import gulp from 'gulp';
// Tasks
import archive from './tasks/archive';
import build from './tasks/build';
import clean from './tasks/clean';
import config from './tasks/config';
import develop from './tasks/develop';
import fonts from './tasks/fonts';
import html from './tasks/html';
import images from './tasks/images';
import lint from './tasks/lint';
import publish from './tasks/publish'
import * as scripts from './tasks/scripts';
import styles from './tasks/styles';
import templates from './tasks/templates';
import * as watch from './tasks/watch';

// Dev task
gulp.task('develop', ['watch'], develop);
// Clean task
gulp.task('clean', clean);
// Config task
gulp.task('config', config);
// Build task
gulp.task('build', build);
// JSHint task
gulp.task('lint', lint);
// Styles task
gulp.task('styles', styles);
// Templates task
gulp.task('templates', templates);
// Scripts task
gulp.task('scripts', ['scripts.app', 'scripts.vendor']);
// Application scripts task
gulp.task('scripts.app', scripts.app);
// Vendor scripts task
gulp.task('scripts.vendor', scripts.vendor);
// Views task
gulp.task('html', html);
// Fonts task
gulp.task('fonts', fonts);
// Images task
gulp.task('images', images);
// Package task
gulp.task('archive', archive);
// Publish task
gulp.task('publish', publish);
// Watch tasks
gulp.task('watch', ['build'], watch.task);
// Watch application files
gulp.task('watch.app', watch.app);
// Watch assets files
gulp.task('watch.assets', watch.assets);
