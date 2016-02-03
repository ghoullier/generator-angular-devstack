import gulp from 'gulp'
import util from 'gulp-util'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import concat from 'gulp-concat-css'
import browserSync from 'browser-sync'

import args from './utils/cli-args'
import paths from './utils/paths'
import { onGenericError } from './utils/handlers'

export default () => {
  const optimize = args.optimize
  return gulp.src(paths.sources.styles)
    // Catch errors
    .pipe(plumber({
      errorHandler: onGenericError
    }))
    // Prepare sourcemaps generation
    .pipe(optimize ? util.noop() : sourcemaps.init())
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe(sass({
      onError: onGenericError,
      sourceComments: optimize ? false : 'map',
      outputStyle: optimize ? 'compressed' : 'expanded'
    }))
    // Optionally add autoprefixer
    .pipe(optimize ? autoprefixer('last 2 versions', '> 1%') : util.noop())
    // Concat files
    .pipe(concat('main.css'))
    // Generate sourcemaps
    .pipe(optimize ? util.noop() : sourcemaps.write())
    // These last two should look familiar now :)
    .pipe(gulp.dest(paths.dist.styles))
    // Notify for live reload
    .pipe(browserSync.reload({
      stream: true
    }))
  
}
