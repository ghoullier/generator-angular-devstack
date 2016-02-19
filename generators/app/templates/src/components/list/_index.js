import { ViewList } from './components/view-list'

import router from './router'

export default angular
  .module('<%= appname %>.components.list', [
    'ui.router'
  ])
  .config(router)
  .component('viewList', ViewList)
