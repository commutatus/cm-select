import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filter: any): any {
    if (!items || !filter || !filter.value) {
      return items;
    }

    if (filter.field) {
      try {
        return items.filter(item => item[filter.field].toLowerCase().includes(filter.value.toLowerCase()));
      } catch (e) {
        return null;
      }
    } else {
      try {
        return items.filter(item => item.toLowerCase().includes(filter.value.toLowerCase()));
      } catch (e) {
        return null;
      }
    }

  }

}

@NgModule({
  declarations: [
    FilterPipe,
  ],
  exports: [
    FilterPipe,
  ]
})
export class FilterPipeModule {
}

