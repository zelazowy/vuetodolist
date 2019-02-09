export const store = {
  debug: true,
  state: {
    authorized: false
  },
  authorizeAction () {
    if (this.debug) console.log('authorizeAction triggered')
    this.state.authorized = true
  }
}