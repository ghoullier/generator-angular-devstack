export default {
  sources: {
    root: './src/',
    bower: './bower.json',
    config: './config/config-{{env}}.json',
    entries: {
      app: './src/app.js',
      config: './src/config.js',
      vendor: './src/vendor.js',
      html: './src/index.html'
    },
    scripts: './src/{components,shared}/**/*.js',
    styles: './src/{components,shared}/**/styles/main.scss',
    images: './assets/images/**/*.png',
    fonts: './assets/fonts/**',
    partials: './src/{components,shared}/**/*.html'
  },
  dist: {
    root: './dist/',
    scripts: './dist/js/',
    styles: './dist/css/',
    images: './dist/css/images/',
    fonts: './dist/fonts/'
  }
};
