import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static classNames = ['excel__toolbar', 'toolbar']

  toHTML() {
    return `<button class="toolbar__btn btn btn--align">
    <span class="material-icons">
      format_align_left
    </span>
  </button>
  <button class="toolbar__btn btn btn--align">
    <span class="material-icons">
      format_align_right
    </span>
  </button>
  <button class="toolbar__btn btn btn--align">
    <span class="material-icons">
      format_align_center
    </span>
  </button>
  <button class="toolbar__btn btn btn--format">
    <span class="material-icons">
      format_bold
    </span>
  </button>
  <button class="toolbar__btn btn btn--format">
    <span class="material-icons">
      format_italic
    </span>
  </button>
  <button class="toolbar__btn btn btn--format">
    <span class="material-icons">
      format_underline
    </span>
  </button>`
  }
}
