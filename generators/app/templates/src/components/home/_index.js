'use strict';

module.exports = angular
  .module('<%= appname %>.components.home', [
    'ui.router'
  ])

  .controller('Home', require('./home-controller'))

  .config(require('./router'))
;
