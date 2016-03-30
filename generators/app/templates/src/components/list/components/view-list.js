class ViewListController {
  constructor() {
    'ngInject'
  }
  uiCanExit() {
    console.log('ViewListController::uiCanExit')
  }
  uiOnParamsUpdated(newValues, $transition) {
    console.log('ViewListController::uiCanExit', newValues, $transition)
  }
  $onInit() {
    console.log('ViewListController::$onInit')
  }
}

export const ViewList = {
  controller: ViewListController,
  templateUrl: 'components/list/partials/view-list.html',
  bindings: {
    items: '<'
  }
}
