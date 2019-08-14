import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { FilterPipeModule } from '../utils/filter.pipe';
import { SearchInputDirective } from '../utils/search-input.directive';


@NgModule({
  declarations: [
    CheckboxComponent,
    SearchInputDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule,
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
