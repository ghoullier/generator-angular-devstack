class ViewContainerController {
  constructor() {
    'ngInject'

  }
}

export const ViewContainer = {
  bindings: {
    context: '<'
  },
  controller: ViewContainerController,
  templateUrl: 'components/layout/partials/view-container.html'
}
