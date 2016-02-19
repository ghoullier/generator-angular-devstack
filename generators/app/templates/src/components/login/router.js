export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('anonymous.login', {
      url: '/login',
      views: {
        view: {
          template: '<view-login></view-login>'
        }
      }
    })

}
