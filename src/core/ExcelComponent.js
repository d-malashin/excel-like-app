import {DomListener} from './DomListener.js'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root)
  }
  toHTML() {
    return ''
  }
}
