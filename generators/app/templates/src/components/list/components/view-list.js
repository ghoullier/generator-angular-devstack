class ViewListController {
  constructor(Faker) {
    'ngInject'

    this.items = Faker.getItems()
  }
}

export const ViewList = {
  controller: ViewListController,
  templateUrl: 'components/list/partials/view-list.html'
}
