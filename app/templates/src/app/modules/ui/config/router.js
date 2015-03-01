'use strict';

/**
 * @ngInject
 */
function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  // Declare routes
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'partials/views/index.html',
      controller: 'Index as vm'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'partials/views/list.html',
      controller: 'List as vm'
    })
  ;
  // Default route
  $urlRouterProvider.otherwise('/');
  // Configure html5
  $locationProvider.html5Mode(true);
}

module.exports = RouteConfig;
