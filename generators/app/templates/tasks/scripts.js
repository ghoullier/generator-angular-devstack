import gulp from 'gulp';
import stream from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import * as bundler from './utils/bundler';
import { onBrowserifyError } from './utils/handlers';
import paths from './utils/paths';

export function app() {
  return bundler.app().bundle()
    .on('error', onBrowserifyError)
    .pipe(stream('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(paths.dist.scripts))
  ;
}

export function vendor() {
  return bundler.vendor().bundle()
    .on('error', onBrowserifyError)
    .pipe(stream('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest(paths.dist.scripts))
  ;
}
