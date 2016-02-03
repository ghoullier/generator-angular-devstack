import gulp from 'gulp'
import eslint from 'gulp-eslint'
import plumber from 'gulp-plumber'

import paths from './utils/paths'
import { onGenericError } from './utils/handlers'

export default () => {
  return gulp.src(paths.sources.scripts)
    // Catch errors
    .pipe(plumber({
      errorHandler: onGenericError
    }))
    .pipe(eslint())
    .pipe(eslint.format())
}
