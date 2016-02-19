import browserSync from 'browser-sync'
import fs from 'fs'
import url from 'url'

import paths from './utils/paths'

const { dist: { root } } = paths

/**
 * Middelware that support pushState
 */
const pushStateMiddleware = (request, response, next) => {
  const pathname = root + url.parse(request.url).pathname
  fs.exists(pathname, (exists) => {
    if (!exists) {
      request.url = '/index.html'
    }
    return next()
  })
}

export default () => {
  browserSync({
    server: {
      baseDir: root,
      middleware: pushStateMiddleware
    }
  })
}
