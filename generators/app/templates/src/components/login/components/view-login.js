class ViewLoginController {
  constructor($state) {
    'ngInject'

    this.state = $state

    this.credentials = {
      login: 'root',
      password: 'root'
    }
  }
  onSubmit(event) {
    event.preventDefault()

    this.state.go('authenticated.home')
  }
  uiCanExit() {
    console.log('ViewLoginController::uiCanExit')
  }
  uiOnParamsUpdated(newValues, $transition) {
    console.log('ViewLoginController::uiCanExit', newValues, $transition)
  }
  $onInit() {
    console.log('ViewLoginController::$onInit')
  }
}

export const ViewLogin = {
  controller: ViewLoginController,
  templateUrl: 'components/login/partials/view-login.html'
}
