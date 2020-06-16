import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextstepsComponent } from './body/nextsteps/nextsteps.component';
import { ListadoclientesComponent } from './body/listadoclientes/listadoclientes.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';

const routes: Routes = [
  { path: '', component: NextstepsComponent },
  { path: 'clientes', component: ListadoclientesComponent },
  { path: 'sucursales', component: ListadosucursalesComponent },
  { path: '**', component: NextstepsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
