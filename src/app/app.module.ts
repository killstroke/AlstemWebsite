import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceIpscGenComponent } from './service-ipsc-gen/service-ipsc-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceIpscGenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
