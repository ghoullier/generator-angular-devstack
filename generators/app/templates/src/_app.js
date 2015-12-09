import templates from './templates'
import shared from './shared'
import components from './components'

export default angular
  .module('<%= appname %>', [
    templates.name,
    shared.name,
    components.name
  ])
