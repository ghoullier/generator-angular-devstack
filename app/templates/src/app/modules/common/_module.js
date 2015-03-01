'use strict';

var pkg = require('../../../../package');

module.exports = angular
  .module('<%= appname %>.common', [
    'ng'
  ])

  .constant('AppVersion', pkg.version)

  .provider('Logger', require('./services/logger'))

  .factory('EventsEmitter', require('./services/events-emitter'))
;
