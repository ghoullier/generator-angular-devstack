'use strict';

module.exports = angular
  .module('<%= appname %>.data', [
    '<%= appname %>.common'
  ])
  .factory('Faker', require('./services/faker'))
;
