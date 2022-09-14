import { Injectable } from "@angular/core";
import { Fonos } from "../models/fonos.model";


@Injectable({
  providedIn:'root'
})
export class FonosService{
  getfonos(): Fonos[]{
    return[
      {
        id: 1,
        title: 'que onda',
        price: 12,
        image:'/assets/img/blue3',
        description:
        'Hola papu,uwu'
      },

      {
        id: 1,
        title: 'sea food',
        price: 12,
        image:'/assets/img/blue4',
        description:
        'Hola papu,uwu'
      },

      {
        id: 1,
        title: 'sea food',
        price: 12,
        image:'/assets/img/blue5',
        description:
        'Hola papu,uwu'
      },

      {
        id: 1,
        title: 'sea food',
        price: 12,
        image:'/assets/img/blue6',
        description:
        'Hola papu,uwu'
      },

    ];
  }
}
