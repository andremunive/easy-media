import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() byWord: boolean = false;
  @Input() byDate: boolean = false;
  @Output() word = new EventEmitter<string>();
  filterByWord: string = '';
  @Output() date = new EventEmitter<string>();
  filterByDate: string = '';

  emitDate() {
    this.date.emit(this.filterByDate);
  }
  emitWord() {
    this.word.emit(this.filterByWord);
  }
}
