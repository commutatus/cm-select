import { NgModule } from '@angular/core';
import { CmSelectComponent } from './cm-select.component';
import { CheckboxModule } from './checkbox/checkbox.module';



@NgModule({
  declarations: [CmSelectComponent],
  imports: [
    CheckboxModule,
  ],
  exports: [CmSelectComponent]
})
export class CmSelectModule { }
