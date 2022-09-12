import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'config',
        loadChildren: () => import('../config/config.module').then( m => m.ConfigPageModule)
      },
      {
        path: 'carrito',
        loadChildren: () => import('../carrito/carrito.module').then( m => m.CarritoPageModule)
      },
      {
        path: "",
        redirectTo: "tablinks/perfil",
        pathMatch:"full"

      }
    ]
  },
  {
    path: "",
    redirectTo: "tablinks/inicio",
    pathMatch:"full"

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
