import layout from './layout'
import home from './home'
import list from './list'
import login from './login'

import router from './router'

export default angular
  .module('<%= appname %>.components', [
    layout.name,
    login.name,
    home.name,
    list.name
  ])
  .config(router)
