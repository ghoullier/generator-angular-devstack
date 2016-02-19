export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('anonymous', {
      abstract: true,
      views: {
        layout: {
          template: `<section ui-view="view" class="ViewContainer ViewContainer--Anonymous"></section>`
        }
      }
    })
    .state('authenticated', {
      abstract: true,
      url: '/admin',
      views: {
        layout: {
          template: `<section ui-view="view" class="ViewContainer ViewContainer--Authenticated"></section>`
        }
      }
    })
}
