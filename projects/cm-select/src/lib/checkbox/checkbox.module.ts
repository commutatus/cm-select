import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { FilterPipeModule } from '../utils/filter.pipe';


@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule,
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
