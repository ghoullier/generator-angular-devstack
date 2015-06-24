'use strict';

var pkg = require('../../package');

module.exports = angular
  .module('<%= appname %>.shared', [
    'ng'
  ])

  .constant('AppVersion', pkg.version)
  .constant('EventsEmitter', require('./services/events-emitter'))

  .factory('Faker', require('./services/faker'))

  .provider('Logger', require('./services/logger'))

  .config(require('./config/compiler'))
  .config(require('./config/logger'))
;
