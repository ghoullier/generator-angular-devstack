import gulp from 'gulp'

import paths from './utils/paths'

export default () => {
  return gulp.src(paths.sources.fonts)
    .pipe(gulp.dest(paths.dist.fonts))
  
}
