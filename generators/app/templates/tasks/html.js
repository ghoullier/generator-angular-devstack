import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import template from 'gulp-template';

import templated from './utils/templated-variables';
import paths from './utils/paths';
import { onGenericError } from './utils/handlers';

const entries = paths.sources.entries;

export default () => {
  // Get our index.html
  gulp.src(entries.html)
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
    // And put it in the dist folder
    .pipe(gulp.dest(paths.dist.root))
  ;
};
