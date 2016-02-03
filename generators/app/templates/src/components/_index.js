import list from './list'
import home from './home'

import router from './router'

export default angular
  .module('<%= appname %>.components', [
    list.name,
    home.name
  ])

  .config(router)
