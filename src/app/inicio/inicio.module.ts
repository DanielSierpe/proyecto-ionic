import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { SearchbarModule } from '../components/searchbar/searchbar.module';
import { CategoryItemModule } from '../components/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    SearchbarModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
