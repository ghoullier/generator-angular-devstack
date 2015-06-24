'use strict';

function RouterConfig($stateProvider) {
  'ngInject';

  // Declare routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'components/home/partials/home.html',
      controller: 'Home as vm'
    })
  ;
}

module.exports = RouterConfig;
