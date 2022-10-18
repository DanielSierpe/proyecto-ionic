import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  categories: Category []=[];

  constructor() { }

  ngOnInit() {
    this.getCategory();
  }
  getCategory(){
    this.categories=[
      {
        id:1,
        label:'',
        image:'/assets/icon/logo ilustacion.png',
        active: true,
      },
      {
        id:1,
        label:'',
        image:'/assets/icon/audifonos-inalambricos.png',
        active: false,
      },
      {
        id:1,
        label:'',
        image:'/assets/icon/apple-watch.png',
        active: false,
      },
      {
        id:1,
        label:'',
        image:'/assets/icon/vocero.png',
        active: false,
      },
    ];
  }



  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    //slidesPerView:1.5,
    centeredSlides:true,
    loop: true,
    spaceBetween: 3,
    autoplay:true,
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  in = {
    slidesPerView:2.8,
    //centeredSlides:true,
    //loop: true,
    spaceBetween: 1,
    //autoplay:true,
  };








}
