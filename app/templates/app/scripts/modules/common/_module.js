'use strict';

module.exports = angular
  .module('<%= appname %>.common', [])
  .factory('Tracer', require('./services/tracer'))
;
