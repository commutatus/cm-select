import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any[];
  title = 'cm-select-app';
  showCheckbox = true;
  selected: any[];
  selectedIds: number[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Tomato'},
      {id: 4, name: 'Grapes'},
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Tomato'},
      {id: 4, name: 'Grapes'},
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Tomato'},
      {id: 4, name: 'Grapes'},
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Tomato'},
      {id: 4, name: 'Grapes'},
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Tomato'},
      {id: 4, name: 'Grapes'},
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Tomato'},
      {id: 4, name: 'Grapes'},
    ];
  }

  onSearch(event) {
    console.log('event is: ', event);
  }

  onChange(selectedItems) {
    console.log('new items are: ', JSON.parse(JSON.stringify(selectedItems)));
    this.selected = selectedItems;
  }

  onIdsChanged(ids) {
    console.log('new items are: ', JSON.parse(JSON.stringify(ids)));
    this.selectedIds = ids;
  }

}
