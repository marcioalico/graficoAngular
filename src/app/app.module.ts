import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NextstepsComponent } from './body/nextsteps/nextsteps.component';
import { ListadoclientesComponent } from './body/listadoclientes/listadoclientes.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NextstepsComponent,
    ListadoclientesComponent,
    ListadosucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
