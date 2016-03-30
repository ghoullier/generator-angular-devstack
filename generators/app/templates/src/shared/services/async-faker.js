export class AsyncFaker {
  getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const items = []
        const size = Math.ceil(Math.random() * 10)
        for (let i = 0; i < size; ++i) {
          items.push({
            id: i,
            name: ['data', i].join('--')
          })
        }
        resolve(items)
      }, 250)
    })
  }
}
