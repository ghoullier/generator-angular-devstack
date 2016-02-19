import { <%= controller %> } from './components/<%= component %>'

import router from './router'

export default angular
  .module('<%= appname %>.components.<%= component %>', [
    'ui.router'
  ])
  .component('<%= component %>', <%= controller %>)
  .config(router)
