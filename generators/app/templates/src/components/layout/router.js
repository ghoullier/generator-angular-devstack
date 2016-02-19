export default ($urlRouterProvider, $stateProvider) => {
  'ngInject'

  $urlRouterProvider.when(/^\/app\/logout/, '/login')

  // Declare routes
  $stateProvider
    .state('anonymous', {
      abstract: true,
      views: {
        layout: {
          template: '<section ui-view="view" class="ViewContainer ViewContainer--Anonymous"></section>'
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
            <section ui-view="view" class="ViewContainer ViewContainer--Authenticated"></section>
          `
        }
      }
    })
}
