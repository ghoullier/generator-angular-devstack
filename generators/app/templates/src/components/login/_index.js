import { ViewLogin } from './components/view-login'

import router from './router'

export default angular
  .module('<%= appname %>.components.login', [
    'ui.router'
  ])
  .config(router)
  .component('viewLogin', ViewLogin)
