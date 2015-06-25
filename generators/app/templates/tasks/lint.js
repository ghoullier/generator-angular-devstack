import gulp from 'gulp';
import jshint from 'gulp-jshint';
import plumber from 'gulp-plumber';

import paths from './utils/paths';
import { onGenericError } from './utils/handlers';

export default () => {
  return gulp.src(paths.sources.scripts)
    // Catch errors
    .pipe(plumber({
      errorHandler: onGenericError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
  ;
};
