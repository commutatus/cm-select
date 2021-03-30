import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemType } from './models/classes';
import { Options } from './models/classes';

@Component({
  selector: 'cm-select',
  templateUrl: './cm-select.component.html',
  styles: []
})
export class CmSelectComponent implements OnInit {

  @Input() options: Options;
  @Input() bindLabel = 'name';
  @Input() bindValue = 'id';
  @Input() items: ItemType[] = [];
  @Input() selected: ItemType[] = [];
  @Input() selectedIds: number[] = [];
  @Input() loading = false;
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() changed: EventEmitter<ItemType[]> = new EventEmitter();
  @Output() idsChanged: EventEmitter<number[]> = new EventEmitter();
  @Output() selection: EventEmitter<ItemType[]> = new EventEmitter();
  @Output() idsSelection: EventEmitter<number[]> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
    this.options = new Options(this.options);
  }

  onChange(items)  {
    this.changed.emit(items);
  }

  onIdsChanged(items) {
    this.idsChanged.emit(items);
  }

  onSearch(event) {
    this.search.emit(event);
  }

  onSelection(event) {
    this.selection.emit(event);
  }

  onSelectionChanged(event) {
    this.idsSelection.emit(event);
  }

}
