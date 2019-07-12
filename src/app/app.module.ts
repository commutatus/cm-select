import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmSelectModule } from 'projects/cm-select/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CmSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
