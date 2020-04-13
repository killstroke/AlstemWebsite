import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ServiceIpscGenComponent } from './service-ipsc-gen/service-ipsc-gen.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProdTempComponent } from './prod-temp/prod-temp.component';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';


const appRoutes: Routes = [
  { path: 'ser', component: ServicesComponent },
  { path: 'serIpsGen', component: ServiceIpscGenComponent },
  { path: '', redirectTo: '/ser', pathMatch: 'full' },
  { path: 'prod', component: ProductComponent},
  { path: 'prodTemp', component: ProdTempComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
  ],

  declarations: [
    AppComponent,
    ServiceIpscGenComponent,
    FooterComponent,
    ServicesComponent,
    HeaderComponent,
    ProductComponent,
    ProdTempComponent,
    CartComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
