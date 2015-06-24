'use strict';

export default ($stateProvider) => {
  'ngInject';

  // Declare routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'components/home/partials/home.html',
      controller: 'Home as vm'
    })
  ;
};
