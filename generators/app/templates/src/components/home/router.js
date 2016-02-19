export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('authenticated.home', {
      url: '/home',
      views: {
        view: {
          template: '<view-home></view-home>'
        }
      }
    })

}
