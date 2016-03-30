export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('anonymous.login', {
      url: '/login',
      views: {
        view: {
          component: 'viewLogin'
        }
      }
    })
    .state('authenticated.logout', {
      url: '/logout'
    })

}
