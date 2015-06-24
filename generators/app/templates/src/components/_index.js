'use strict';

module.exports = angular
  .module('<%= appname %>.components', [
    require('./list').name,
    require('./home').name
  ])

  .config(require('./router'))
;
