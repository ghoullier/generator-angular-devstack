import { AuthenticatedNav } from './components/authenticated-nav'
import { AuthenticatedNavProvider } from './services/authenticated-nav'

import router from './router'

export default angular
export default angular
  .module('<%= appname %>.components.layout', [
    'ui.router'
  ])
  .config(router)
  .component('authenticatedNav', AuthenticatedNav)
  .provider('AuthenticatedNav', AuthenticatedNavProvider)
