import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemType } from './models/classes';
import { Options } from './models/classes';

@Component({
  selector: 'cm-select',
  templateUrl: './cm-select.component.html',
  styles: []
})
export class CmSelectComponent implements OnInit {

  @Input() options: Options = new Options(null);
  @Input() bindLabel = 'name';
  @Input() bindValue = 'id';
  @Input() items: ItemType[] = [];
  @Input() selected: ItemType[] = [];
  @Input() selectedIds: number[] = [];
  @Output() changed: EventEmitter<ItemType[]> = new EventEmitter();
  @Output() idsChanged: EventEmitter<number[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(items)  {
    this.changed.emit(items);
  }

  onIdsChanged(items) {
    this.idsChanged.emit(items);
  }


}
