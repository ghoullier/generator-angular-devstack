'use strict';

module.exports = angular
  .module('<%= appname %>.components.list', [
    'ui.router'
  ])

  .controller('List', require('./list-controller'))

  .config(require('./router'))
;
