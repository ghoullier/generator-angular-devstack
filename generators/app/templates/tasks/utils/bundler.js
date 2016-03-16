import fs from 'fs'
import browserify from 'browserify'
import babelify from 'babelify'
import ngAnnotate from 'browserify-ngannotate'

import args from './cli-args'
import paths from './paths'

const entries = paths.sources.entries
const optimize = args.optimize

const getBabelifyConfig = () => {
  const text = fs.readFileSync(paths.sources.babel, 'utf8')
  const config = JSON.parse(text)
  if (optimize) {
    config.plugins = config.plugins || []
    config.plugins.push('transform-remove-console')
  }
  return config
}

const getBrowserifyConfig = () => {
  return {
    entries: entries.app,
    debug: !optimize,
    verbose: true
  }
}

export const app = () => {
  const bundler = browserify(getBrowserifyConfig())
    .transform(babelify, getBabelifyConfig())
    .transform({
      add: true,
      single_quotes: true
    }, ngAnnotate)

  if (optimize) {
    bundler.plugin('minifyify', {
      map: false
    })
  }
  return bundler
}

export const vendor = () => {
  const bundler = browserify({
    entries: entries.vendor,
    insertGlobals: true,
    debug: !optimize,
    verbose: true
  })
  if (optimize) {
    bundler.plugin('minifyify', {
      map: false
    })
  }
  return bundler
}
