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
}

export const ViewLogin = {
  controller: ViewLoginController,
  templateUrl: 'components/login/partials/view-login.html'
}
