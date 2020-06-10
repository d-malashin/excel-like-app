import {createListenerName} from './helpers'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = createListenerName(listener)
      if (!this[method]) {
        throw new Error(`Method ${method} not defined in ${this.name}`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = createListenerName(listener)
      this.$root.off(listener, this[method])
    })
  }
}
