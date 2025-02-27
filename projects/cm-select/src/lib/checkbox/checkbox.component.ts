import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { ItemType } from '../models/classes';
import { Options } from '../models/classes';
import { deepCopyArray } from '../utils/helpers';

@Component({
  selector: 'cm-select-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, OnChanges  {

  @Input() options: Options;
  @Input() bindLabel = 'name';
  @Input() bindValue = 'id';
  @Input() items: ItemType[] = [];
  @Input() loading = false;
  @Input() selected: ItemType[]  = [];
  @Input() selectedIds: number[] = [];
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() changed: EventEmitter<ItemType[]> = new EventEmitter();
  @Output() idsChanged: EventEmitter<number[]> = new EventEmitter();
  q = '';
  checkedItem: any;
  tempSelected = [];


  @HostListener('document:click', ['$event'])
  clickedOutside(event) {
    if (this.options.single) {
      this.checkedItem = null;
    } else  {
      const selectedId = this.tempSelected.map(i => i.id);
      this.items.forEach (
        i => {
          if (selectedId.includes(i.id)) {
            i.checked = true;
          } else if ('checked' in i) {
            i.checked = false;
          }
        }
      );
      this.selected = [...this.tempSelected];
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.selected = [];
    this.options = new Options(this.options);
    this.items = deepCopyArray(this.items);
    this.setSelectedItems();
    this.tempSelected = [...this.selected];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.setSelectedItems();
    }
    if (changes.selected && this.selected && this.selected.length > 1 ) {
      this.tempSelected = [...this.selected];
    }
  }

  setSelectedItems() {
    this.items = deepCopyArray(this.items);
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
    this.tempSelected = [];
    this.items.forEach(i => i.checked = false);
    this.emitChange();
  }

  applySelections() {
    if (this.options.single) {
      this.selected = this.checkedItem;
    }
    this.emitChange(this.selected);
  }

  emitChange(selected?) {
    if (this.options.single) {
      if (selected) {
        this.changed.emit(this.selected);
        this.idsChanged.emit(selected.id);
      } else {
        this.changed.emit(null);
        this.idsChanged.emit(null);
      }
    } else {
      if (selected) {
        this.changed.emit(this.selected);
        this.idsChanged.emit(selected.map(i => i.id));
      } else {
        this.changed.emit([]);
        this.idsChanged.emit([]);
      }
    }
  }

  onSearch(q) {
    this.search.emit(q);
  }

  onItemChange(item) {
    if (item.checked) {
      this.selected.push(item);
    } else {
      this.selected = this.selected.filter(i => i.id !== item.id);
    }
    this.selected = this.selected.filter((thing, index) => {
      return index === this.selected.findIndex(obj => {
        return JSON.stringify(obj) === JSON.stringify(thing);
      });
    });
  }

}
