import {$} from '@core/domHandler'

export class Excel {
  constructor(selector, options) {
    this.$element = $(selector)
    this.components = options.components || []
  }

  makeLayout() {
    const $layout = $.create('div', ['excel'])
    this.components = this.components.map(Component => {
      const $element = $.create('div', Component.classNames)
      const component = new Component($element)
      $element.html(component.toHTML())
      $layout.append($element)
      return component
    })
    return $layout
  }

  render() {
    this.$element.append(this.makeLayout())
    this.components.forEach(component => {
      component.init()
    })
  }
}
