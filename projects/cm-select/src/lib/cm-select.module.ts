import { NgModule } from '@angular/core';
import { CmSelectComponent } from './cm-select.component';
import { CheckboxModule } from './checkbox/checkbox.module';
import { CmSelectService } from './cm-select.service';



@NgModule({
  declarations: [
    CmSelectComponent,
  ],
  imports: [
    CheckboxModule,
  ],
  providers: [
    CmSelectService,
  ],
  exports: [CmSelectComponent]
})
export class CmSelectModule { }
