'use strict';

function RouterConfig($stateProvider) {
  'ngInject';

  // Declare routes
  $stateProvider
    .state('<%= component %>', {
      url: '/<%= component %>',
      templateUrl: 'components/<%= component %>/partials/<%= component %>.html',
      controller: '<%= controller %> as vm'
    })
  ;
}

module.exports = RouterConfig;
