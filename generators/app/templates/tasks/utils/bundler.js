import browserify from 'browserify';
import ngAnnotate from 'browserify-ngannotate';

import args from './cli-args';
import paths from './paths';

const entries = paths.sources.entries;
const optimize = args.optimize;

function app() {
  const bundler = browserify({
      entries: entries.app,
      debug: !optimize,
      verbose: true
    })
    .transform({
      add: true,
      single_quotes: true
    }, ngAnnotate)
  ;
  if (optimize) {
    bundler.plugin('minifyify', {
      map: false
    });
  }
  return bundler;
}

function vendor() {
  const bundler = browserify({
    entries: entries.vendor,
    insertGlobals: true,
    debug: !optimize,
    verbose: true
  });
  if (optimize) {
    bundler.plugin('minifyify', {
      map: false
    });
  }
  return bundler;
}

export { app, vendor };
