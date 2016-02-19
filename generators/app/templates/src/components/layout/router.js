export default ($urlRouterProvider, $stateProvider) => {
  'ngInject'

  $urlRouterProvider.when(/^\/app\/logout/, '/login')

  // Declare routes
  $stateProvider
    .state('anonymous', {
      abstract: true,
      views: {
        layout: {
          template: '<view-container context="Anonymous"></view-container>'
        }
      }
    })
    .state('authenticated', {
      abstract: true,
      url: '/app',
      views: {
        layout: {
          template: `
            <authenticated-nav></authenticated-nav>
            <view-container context="Authenticated"></view-container>
          `
        }
      }
    })
}
