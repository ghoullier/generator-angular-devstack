import gulp from 'gulp'
import tar from 'gulp-tar'
import gzip from 'gulp-gzip'

import pkg from '../package'

import args from './utils/cli-args'
import paths from './utils/paths'

const archive = args.archive || [pkg.name, pkg.version].join('-')

export default () => {
  return gulp
    .src([paths.dist.root + '**/*'])
    .pipe(tar(archive + '.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'))
}
