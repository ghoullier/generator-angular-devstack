export default ($stateProvider, AuthenticatedNavProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('authenticated.home', {
      url: '/home',
      views: {
        view: {
          component: 'viewHome'
        }
      }
    })
  AuthenticatedNavProvider.add({
    sref: 'authenticated.home',
    text: 'Home'
  })
}
