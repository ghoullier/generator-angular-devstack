export default ($stateProvider, AuthenticatedNavProvider) => {
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
  AuthenticatedNavProvider.add({
    sref: 'authenticated.home',
    text: 'Home'
  })
}
