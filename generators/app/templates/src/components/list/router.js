export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('authenticated.list', {
      url: '/list',
      views: {
        view: {
          template: '<view-list></view-list>'
        }
      }
    })

}
