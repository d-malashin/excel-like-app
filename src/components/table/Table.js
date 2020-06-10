import {ExcelComponent} from '@core/ExcelComponent'

export class Table extends ExcelComponent {
  static classNames = ['excel__table', 'table']

  toHTML() {
    return `<div class="table__row">
    <div class="table__row-info"></div>
    <div class="table__row-data">
      <div class="table__column">A</div>
      <div class="table__column">B</div>
      <div class="table__column">C</div>
    </div>
  </div>
  <div class="table__row">
    <div class="table__row-info">1</div>
    <div class="table__row-data">
      <div class="table__cell selected" contenteditable>A</div>
      <div class="table__cell" contenteditable>B</div>
      <div class="table__cell" contenteditable>C</div>
    </div>
  </div>`
  }
}
