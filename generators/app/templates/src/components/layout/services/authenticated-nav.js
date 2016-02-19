export const AuthenticatedNavProvider = () => {
  const links = []

  return {
    add(item) {
      links.push(item)
    },
    $get() {
      return Object.freeze(links)
    }
  }
}
