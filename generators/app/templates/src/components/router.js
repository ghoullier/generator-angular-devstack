export default ($urlRouterProvider, $locationProvider) => {
  'ngInject'

  // Default route
  $urlRouterProvider.otherwise('/login')
  // Configure html5
  $locationProvider.html5Mode(true)
}
