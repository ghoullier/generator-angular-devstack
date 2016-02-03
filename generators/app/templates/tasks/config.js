 import gulp from 'gulp'
 import template from 'gulp-template'

 import config from './utils/config'
 import paths from './utils/paths'

export default () => {
  return gulp
    .src(paths.sources.entries.config)
    .pipe(template({
      APP_CONFIG: JSON.stringify(config(), null, 2)
    }))
    .pipe(gulp.dest(paths.dist.scripts))
  
}
