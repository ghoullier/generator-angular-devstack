export default ($stateProvider, AuthenticatedNavProvider) => {
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
  AuthenticatedNavProvider.add({
    sref: 'authenticated.list',
    text: 'List'
  })
}
