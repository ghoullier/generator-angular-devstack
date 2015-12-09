import <%= controller %>Controller from './<%= component %>-controller'

import router from './router'

export default angular
  .module('<%= appname %>.components.<%= component %>', [
    'ui.router'
  ])

  .controller('<%= controller %>', <%= controller %>Controller)

  .config(router)
