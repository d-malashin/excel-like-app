import {$} from '@core/DomHandler'

export class Excel {
  constructor(selector, options) {
    this.$element = $(selector)
    this.components = options.components || []
  }

  makeLayout() {
    const $layout = $.create('div', ['excel'])
    this.components.forEach(Component => {
      const $element = $.create('div', Component.classNames)
      const component = new Component($element)
      $element.html(component.toHTML())
      $layout.append($element)
    })
    return $layout
  }

  render() {
    this.$element.append(this.makeLayout())
  }
}
