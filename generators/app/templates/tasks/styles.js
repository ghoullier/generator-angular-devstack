import gulp from 'gulp'
import util from 'gulp-util'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import concat from 'gulp-concat-css'
import browserSync from 'browser-sync'
import files from 'main-bower-files'

import { optimize } from './utils/cli-args'
import { onGenericError } from './utils/handlers'
import paths from './utils/paths'

export const app = () => {
  return transform(gulp.src(paths.sources.styles), 'main.css', [
    sass({
      onError: onGenericError,
      sourceComments: optimize ? false : 'map',
      outputStyle: optimize ? 'compressed' : 'expanded'
    }),
    optimize ? autoprefixer('last 2 versions', '> 1%') : util.noop()
  ])
}

export const vendor = () => {
  const source = files({
    filter: /^(.)*(\.css)$/
  })
  return transform(gulp.src(source), 'vendor.css')
}

const transform = (stream, filename, tasks = []) => {
  let transformed = stream
    // Catch errors
    .pipe(plumber({
      errorHandler: onGenericError
    }))
    // Prepare sourcemaps generation
    .pipe(optimize ? util.noop() : sourcemaps.init())

  // Execute extra transform tasks
  tasks.forEach((task) => {
    transformed = transformed.pipe(task)
  })

  return transformed
    // Concat files
    .pipe(concat(filename))
    // Generate sourcemaps
    .pipe(optimize ? util.noop() : sourcemaps.write())
    // These last two should look familiar now :)
    .pipe(gulp.dest(paths.dist.styles))
    // Notify for live reload
    .pipe(browserSync.reload({
      stream: true
    }))
}
