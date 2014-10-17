var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var refresh = require('gulp-livereload');
var plumber = require('gulp-plumber');
var env = require('./env');
var lrserver = require('./live-reload');
var paths = require('./paths');
var handlers = require('./handlers');

// Styles task
module.exports = function() {
  return gulp.src(paths.sources.styles)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe(sass({
      onError: handlers.onGenericError,
      outputStyle: env.production ? 'compressed' : 'expanded'
    }))
    // Optionally add autoprefixer
    .pipe(autoprefixer('last 2 versions', '> 1%'))
    // These last two should look familiar now :)
    .pipe(gulp.dest(paths.dist.styles))
    .pipe(refresh(lrserver));
};
