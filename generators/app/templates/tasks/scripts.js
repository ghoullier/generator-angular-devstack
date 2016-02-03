import gulp from 'gulp'
import concat from 'gulp-concat'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import util from 'gulp-util'
import stream from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import files from 'main-bower-files'

import * as bundler from './utils/bundler'
import { onBrowserifyError } from './utils/handlers'
import paths from './utils/paths'
import args from './utils/cli-args'

const { optimize } = args

export const app = () => {
  return bundler.app().bundle()
    .on('error', onBrowserifyError)
    .pipe(stream('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(paths.dist.scripts))
}

export const vendor = () => {
  return gulp.src(files({
      filter: /^(.)*(\.js)$/
    }))
    .pipe(optimize ? util.noop() : sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(optimize ? uglify() : util.noop())
    .pipe(optimize ? util.noop() : sourcemaps.write())
    .pipe(gulp.dest(paths.dist.scripts))
}
