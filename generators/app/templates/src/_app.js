'use strict';

module.exports = angular
  .module('<%= appname %>', [
    require('./templates').name,
    require('./shared').name,
    require('./components').name
  ])
;
