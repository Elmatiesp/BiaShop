import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminproductoPage } from './adminproducto.page';

const routes: Routes = [
  {
    path: '',
    component: AdminproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminproductoPageRoutingModule {}
