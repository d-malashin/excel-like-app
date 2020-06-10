export function createListenerName(listener) {
  return `on${listener[0].toUpperCase()}` + `${listener.slice(1)}`
}
