import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ServiceIpscGenComponent } from './service-ipsc-gen/service-ipsc-gen.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';


const appRoutes: Routes = [
  { path: 'ser', component: ServicesComponent },
  { path: 'serIpsGen', component: ServiceIpscGenComponent },
  { path: '', redirectTo: '/ser', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  ],

  declarations: [
    AppComponent,
    ServiceIpscGenComponent,
    FooterComponent,
    ServicesComponent,
    HeaderComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
