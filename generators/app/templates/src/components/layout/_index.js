import router from './router'

export default angular
  .module('<%= appname %>.components.layout', [
    'ui.router'
  ])
  .config(router)
