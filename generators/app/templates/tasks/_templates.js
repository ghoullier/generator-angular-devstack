import gulp from 'gulp'
import plumber from 'gulp-plumber'
import cache from 'gulp-angular-templatecache'
import htmlmin from 'gulp-htmlmin'
import template from 'gulp-template'

import templated from './utils/templated-variables'
import { onGenericError } from './utils/handlers'
import paths from './utils/paths'

export default () => {
  return gulp.src(paths.sources.partials)
    // Catch errors
    .pipe(plumber({
      errorHandler: onGenericError
    }))
    // Inject static template variables
    .pipe(template(templated()))
    // Will minimify html
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    // Generate templates module
    .pipe(cache({
      filename: 'templates.js',
      module: '<%= appname %>.templates',
      moduleSystem: 'Browserify',
      standalone: true
    }))
    .pipe(gulp.dest(paths.sources.root))
}
