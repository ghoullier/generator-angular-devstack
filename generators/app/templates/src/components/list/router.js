'use strict';

function RouterConfig($stateProvider) {
  'ngInject';

  // Declare routes
  $stateProvider
    .state('list', {
      url: '/list',
      templateUrl: 'components/list/partials/list.html',
      controller: 'List as vm'
    })
  ;
}

module.exports = RouterConfig;
