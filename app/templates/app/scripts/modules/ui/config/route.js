'use strict';

/**
 * @ngInject
 */
function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  // Declare routes
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'views/index.html',
      controller: 'IndexController as vm'
    });
  // Default route
  $urlRouterProvider.otherwise('/');
  // Configure html5
  $locationProvider.html5Mode(true);
}

module.exports = RouteConfig;
