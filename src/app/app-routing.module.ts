import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaMilanesasComponent } from './tienda-milanesas/tienda-milanesas.component';
import { TiendaNosotrosComponent } from './tienda-nosotros/tienda-nosotros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'milanesas',
    pathMatch: 'full'
  },
  {
    path: 'milanesas',
    component: TiendaMilanesasComponent
  },
  {
    path: 'nosotros',
    component: TiendaNosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
