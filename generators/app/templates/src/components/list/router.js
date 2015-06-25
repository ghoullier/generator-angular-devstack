'use strict';

export default ($stateProvider) => {
  'ngInject';

  // Declare routes
  $stateProvider
    .state('list', {
      url: '/list',
      templateUrl: 'components/list/partials/list.html',
      controller: 'List as vm'
    })
  ;
};
