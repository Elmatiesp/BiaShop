import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KallonaPageRoutingModule } from './kallona-routing.module';

import { KallonaPage } from './kallona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KallonaPageRoutingModule
  ],
  declarations: [KallonaPage]
})
export class KallonaPageModule {}
