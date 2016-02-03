import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'

import pkg from '../package'

import paths from './utils/paths'

export default () => {
  return gulp.src([paths.dist.root + '**/*.*'])
    .pipe(ghPages({
      remoteUrl : pkg.repository.url,
      branch : 'gh-pages',
      cacheDir : __dirname + '/../.publish/'
    }))
  
}
