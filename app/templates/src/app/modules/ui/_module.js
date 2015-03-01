'use strict';

module.exports = angular
  .module('<%= appname %>.ui', [
    'ui.router',
    '<%= appname %>.common',
    '<%= appname %>.data',
    '<%= appname %>.templates'
  ])

  .config(require('./config/compiler'))
  .config(require('./config/logger'))
  .config(require('./config/router'))

  .controller('Index', require('./controllers/index'))
  .controller('List', require('./controllers/list'))
;
