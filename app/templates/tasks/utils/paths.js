'use strict';

module.exports = {
  modules: {
    ui: './src/app/modules/ui/',
    templates: './src/app/modules/templates/'
  },
  sources: {
    app: './src/app/',
    config: './src/config/config-{{env}}.js',
    entries: {
      app: './src/app/app.js',
      vendor: './src/app/vendor.js',
      html: './src/index.html'
    },
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
