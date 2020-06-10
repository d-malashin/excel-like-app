import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static classNames = ['excel__header', 'header']

  toHTML() {
    return `<input type="text" class="header__input" value="Новая таблица" />
    <div class="header__icons">
      <button class="header__btn btn btn--delete">
        <span class="material-icons">
          delete_forever
        </span>
      </button>
      <button class="header__btn btn btn--exit">
        <span class="material-icons">
          exit_to_app
        </span>
      </button>
    </div>`
  }
}
