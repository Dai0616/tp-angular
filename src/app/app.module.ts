import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MilanesasListComponent } from './milanesas-list/milanesas-list.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule   } from '@angular/forms';
import { TiendaMilanesasComponent } from './tienda-milanesas/tienda-milanesas.component';
import { TiendaNosotrosComponent } from './tienda-nosotros/tienda-nosotros.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputNumeroComponent } from './input-numero/input-numero.component';
@NgModule({
  declarations: [
    AppComponent,
    MilanesasListComponent,
    TiendaMilanesasComponent,
    TiendaNosotrosComponent,
    CarritoComponent,
    InputNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
