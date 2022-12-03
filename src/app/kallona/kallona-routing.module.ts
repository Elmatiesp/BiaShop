import { NgModule } from '@angular/core';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { KallonaPage } from './kallona.page';

const routes: Routes = [
  {
    path: '',
    component: KallonaPage,
    children:[
      {
        path: 'home', ...canActivate(() => redirectUnauthorizedTo(['/login'])),
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'opciones', ...canActivate(() => redirectUnauthorizedTo(['/login'])),
        loadChildren: () => import('../opciones/opciones.module').then( m => m.OpcionesPageModule)
      },
      {
        path: 'carrito', ...canActivate(() => redirectUnauthorizedTo(['/login'])),
        loadChildren: () => import('../carrito/carrito.module').then( m => m.CarritoPageModule)
      },
      {
        path: 'productos', ...canActivate(() => redirectUnauthorizedTo(['/login'])),
        loadChildren: () => import('../productos/productos.module').then( m => m.ProductosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KallonaPageRoutingModule {}
