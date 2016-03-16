import gulp from 'gulp'
import util from 'gulp-util'
import browserSync from 'browser-sync'
import hrtime from 'pretty-hrtime'
import stream from 'vinyl-source-stream'
import watchify from 'watchify'

import * as bundler from './bundler'
import { onBrowserifyError } from './handlers'
import paths from './paths'

const log = (task, step, message = '', duration = '') => {
  util.log(step, util.colors.cyan(`'watchify.${task}'`), message, util.colors.magenta(duration))
}

const watch = (bundle, task) => {
  const watcher = watchify(bundle)
  const rebundle = () => {
    const start = process.hrtime()
    log(task, 'Starting')
    return watcher.bundle()
      .on('error', onBrowserifyError)
      .pipe(stream(`${task}.js`))
      .pipe(gulp.dest(paths.dist.scripts))
      .on('end', function() {
        const end = process.hrtime(start)
        log(task, 'Finished', 'after', hrtime(end))
      })
      .pipe(browserSync.reload({stream: true, once: true}))
  }
  watcher.on('update', rebundle)
  return rebundle()
}

export const app = () => {
  return watch(bundler.app(), 'app')
}

export const vendor = () => {
  return watch(bundler.vendor(), 'vendor')
}
