import HomeController from './home-controller'

import router from './router'

export default angular
  .module('<%= appname %>.components.home', [
    'ui.router'
  ])

  .controller('Home', HomeController)

  .config(router)
