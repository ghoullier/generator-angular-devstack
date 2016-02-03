export default class Faker {
  getItems() {
    const items = []
    const size = Math.ceil(Math.random() * 10)
    for (let i = 0; i < size; ++i) {
      items.push({
        id: i,
        name: ['data', i].join('--')
      })
    }
    return items
  }
}
