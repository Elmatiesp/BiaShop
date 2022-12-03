import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdminproductoPageRoutingModule } from './adminproducto-routing.module';

import { AdminproductoPage } from './adminproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminproductoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminproductoPage]
})
export class AdminproductoPageModule {}
