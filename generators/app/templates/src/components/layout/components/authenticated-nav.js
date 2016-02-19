class AuthenticatedNavController {
  constructor(AuthenticatedNav) {
    'ngInject'

    this.links = AuthenticatedNav
  }
}

export const AuthenticatedNav = {
  controller: AuthenticatedNavController,
  templateUrl: 'components/layout/partials/authenticated-nav.html'
}
