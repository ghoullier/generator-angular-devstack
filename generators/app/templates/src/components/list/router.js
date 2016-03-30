export default ($stateProvider, AuthenticatedNavProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('authenticated.list', {
      url: '/list',
      resolve: {
        items(AsyncFaker) {
          'ngInject'
          return AsyncFaker.getItems()
        }
      },
      views: {
        view: {
          component: 'viewList',
          bindings: {
            items: 'items'
          }
        }
      }
    })
  AuthenticatedNavProvider.add({
    sref: 'authenticated.list',
    text: 'List'
  })
}
