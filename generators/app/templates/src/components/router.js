'use strict';

function RouterConfig($urlRouterProvider, $locationProvider) {
  'ngInject';

  // Default route
  $urlRouterProvider.otherwise('/');
  // Configure html5
  $locationProvider.html5Mode(true);
}

module.exports = RouterConfig;
