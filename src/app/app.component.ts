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
      {id: 5, name: 'Mosambi'},
      {id: 6, name: 'pine apple'},
      {id: 7, name: 'green apple'},
      {id: 8, name: 'pink apple'},
      {id: 9, name: 'watermelon'},
      {id: 10, name: 'drumstick'},
      {id: 11, name: 'pomegranet'},
      {id: 12, name: 'avacodo'},
      {id: 13, name: 'butter fruit'},
      {id: 14, name: 'dragon friut'},
      {id: 15, name: 'fig'},
      {id: 16, name: 'almond'},
      {id: 17, name: 'cashew'},
      {id: 18, name: 'custard apple'},
      {id: 19, name: 'papaya'},
      {id: 20, name: 'lemon'},
      {id: 21, name: 'mushmelon'},
      {id: 22, name: 'guava'},
      {id: 23, name: 'chikku'},
      {id: 24, name: 'kiwi'},
    ];
  }

  onSearch(event) {
    console.log('event is: ', event);
    this.items = [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Mango'},
      {id: 3, name: 'Tomato'},
      {id: 4, name: 'Grapes'},
      {id: 5, name: 'Mosambi'},
      {id: 6, name: 'pine apple'},
      {id: 7, name: 'green apple'},
      {id: 8, name: 'pink apple'},
      {id: 9, name: 'watermelon'},
      {id: 10, name: 'drumstick'},
      {id: 11, name: 'pomegranet'},
      {id: 12, name: 'avacodo'},
      {id: 13, name: 'butter fruit'},
      {id: 14, name: 'dragon friut'},
      {id: 15, name: 'fig'},
      {id: 16, name: 'almond'},
      {id: 17, name: 'cashew'},
      {id: 18, name: 'custard apple'},
      {id: 19, name: 'papaya'},
      {id: 20, name: 'lemon'},
      {id: 21, name: 'mushmelon'},
      {id: 22, name: 'guava'},
      {id: 23, name: 'chikku'},
      {id: 24, name: 'kiwi'},
    ];
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
