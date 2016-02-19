import { ViewHome } from './components/view-home'

import router from './router'

export default angular
  .module('<%= appname %>.components.home', [
    'ui.router'
  ])
  .component('viewHome', ViewHome)
  .config(router)
