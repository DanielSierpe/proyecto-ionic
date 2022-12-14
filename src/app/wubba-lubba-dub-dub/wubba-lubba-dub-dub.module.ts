import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WubbaLubbaDubDubPageRoutingModule } from './wubba-lubba-dub-dub-routing.module';

import { WubbaLubbaDubDubPage } from './wubba-lubba-dub-dub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WubbaLubbaDubDubPageRoutingModule
  ],
  declarations: [WubbaLubbaDubDubPage]
})
export class WubbaLubbaDubDubPageModule {}
