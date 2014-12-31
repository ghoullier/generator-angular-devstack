'use strict';

module.exports = angular
  .module('<%= appname %>.common', [])

  .constant('AppConfig', require('../../config'))

  .factory('Logger', require('./services/logger'))
;
