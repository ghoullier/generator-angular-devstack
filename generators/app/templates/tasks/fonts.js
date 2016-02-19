import gulp from 'gulp'
import files from 'main-bower-files'

import paths from './utils/paths'

export const app = () => {
  return gulp.src(paths.sources.fonts)
    .pipe(gulp.dest(paths.dist.fonts))
}

export const vendor = () => {
  return gulp.src(files({
      filter: /^.*\.(otf|eot|svg|ttf|woff|woff2)$/
    }))
    .pipe(gulp.dest(paths.dist.fonts))
}
