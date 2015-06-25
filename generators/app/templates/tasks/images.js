import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import util from 'gulp-util';

import args from './utils/cli-args';
import paths from './utils/paths';
import { onGenericError } from './utils/handlers';

export default () => {
  var optimize = args.optimize;
  return gulp.src(paths.sources.images)
    // Catch errors
    .pipe(plumber({
      errorHandler: onGenericError
    }))
    // Optimize image size
    .pipe(optimize ? imagemin({
      optimizationLevel: 3,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }) : util.noop())
    .pipe(gulp.dest(paths.dist.images))
  ;
};
