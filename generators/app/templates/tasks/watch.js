import gulp from 'gulp'
import browserSync from 'browser-sync'
import sequence from 'run-sequence'

import args from './utils/cli-args'
import paths from './utils/paths'
import { compile } from './utils/string'
import * as watcher from './utils/watcher'

const { reload } = browserSync
const { dist, sources } = paths
const { entries } = sources
const env = args.env || 'dev'
const config = compile(sources.config, {
  env: env
})

export const task = (callback) => {
  sequence(
    ['watch.assets', 'watch.app'],
    callback
  )
}

export const assets = () => {
  // Watch all application scripts
  gulp.watch([sources.scripts], [
    'lint'
  ])
  // Watch styles
  gulp.watch([sources.styles], [
    'styles'
  ])
  // Watch html files
  gulp.watch([entries.html], [
    'html'
  ])
  // Watch views
  gulp.watch([sources.partials], [
    'templates'
  ])
  // Watch images
  gulp.watch([sources.images], [
    'images'
  ])
  // Watch config
  gulp.watch([config], [
    'config'
  ])
  // Watch bower
  gulp.watch([sources.bower], [
    'scripts.vendor'
  ])
  // Watch for live reload
  gulp.watch([
    dist.root + '*.html',
    dist.scripts + '*.js',
    dist.images + '*.*',
    dist.fonts + '*.*'
  ]).on('change', reload)
}

export const app = () => {
  // Watch app
  return watcher.app()
}
