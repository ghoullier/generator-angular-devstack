'use strict';

module.exports = angular
  .module('<%= appname %>.components.<%= component.name %>', [
    'ui.router'
  ])

  .controller('<%= controller.name %>', require('./<%= component.name %>-controller'))

  .config(require('./router'))
;
