'use strict';

var pkg = require('../../../../package');

module.exports = angular
  .module('<%= appname %>.common', [
    'ng'
  ])

  .constant('AppVersion', pkg.version)
  .constant('EventsEmitter', require('./services/events-emitter'))

  .provider('Logger', require('./services/logger'))

;
