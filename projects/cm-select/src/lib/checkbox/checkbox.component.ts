import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemType } from '../models/classes';
import { Options } from '../models/classes';
import { deepCopyArray } from '../utils/helpers';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit  {

  @Input() options: Options = new Options(null);
  @Input() bindLabel = 'name';
  @Input() bindValue = 'id';
  @Input() items: ItemType[] = [];
  @Input() selected: ItemType[] = [];
  @Input() selectedIds: number[] = [];
  @Output() changed: EventEmitter<ItemType[]> = new EventEmitter();
  @Output() idsChanged: EventEmitter<number[]> = new EventEmitter();

  search = '';

  constructor() {
   }

  ngOnInit() {
    this.items = deepCopyArray(this.items);
    this.setSelectedItems();
  }

  setSelectedItems() {
    if (this.selected && this.selected.length) {
      this.selected.forEach(s => {
        for (const item of this.items) {
          if (item.id === s.id) {
            item.checked = true;
            break;
          }
        }
      });
    } else if (this.selectedIds && this.selectedIds.length) {
      this.selectedIds.forEach(id => {
        for (const item of this.items) {
          if (item.id === id) {
            item.checked = true;
            break;
          }
        }
      });
    }
  }

  clearSelections() {
    this.items.forEach(i => i.checked = false);
    this.emitChange();
  }

  applySelections() {
    this.selected = this.items.filter(i => i.checked);
    this.emitChange(this.selected);
  }

  emitChange(selected?) {
    if (selected) {
      this.changed.emit(this.selected);
      this.idsChanged.emit(selected.map(i => i.id));
    } else {
      this.changed.emit([]);
      this.idsChanged.emit([]);
    }
  }

}
