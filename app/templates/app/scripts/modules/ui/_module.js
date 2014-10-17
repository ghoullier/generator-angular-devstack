'use strict';

module.exports = angular
  .module('<%= appname %>.ui', [
    'ui.router',
    '<%= appname %>.common',
    '<%= appname %>.data',
    '<%= appname %>.templates'
  ])
  .config(require('./config/route'))
  .controller('IndexController', require('./controllers/index'))
;
