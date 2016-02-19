class <%= controller %>Controller {
  constructor() {
    'ngInject'

  }
}

export const <%= controller %> = {
  controller: <%= controller %>Controller,
  templateUrl: 'components/<%= component %>/partials/<%= component %>.html'
}
