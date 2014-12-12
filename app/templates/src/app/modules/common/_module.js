'use strict';

module.exports = angular
  .module('<%= appname %>.common', [])
  .factory('Logger', require('./services/logger'))
;
