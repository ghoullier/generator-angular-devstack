'use strict';

module.exports = {
  config: {
    dev: './src/config/config-dev.js',
    prod: './src/config/config-prod.js'
  },
  modules: {
    ui: './src/app/modules/ui/',
    templates: './src/app/modules/templates/'
  },
  sources: {
    entries: {
      app: './src/app/app.js',
      mocks: './src/app/app.mocks.js',
      vendor: './src/app/vendor.js',
      html: './src/index.html'
    },
    config: './src/app/',
    scripts: './src/app/**/*.js',
    styles: './src/styles/**/*.scss',
    images: './src/styles/images/**/*.png',
    fonts: './src/styles/fonts/**',
    partials: './src/partials/**/*.html'
  },
  dist: {
    root: './dist/',
    scripts: './dist/js/',
    styles: './dist/css/',
    images: './dist/css/images/',
    fonts: './dist/fonts/'
  }
};
