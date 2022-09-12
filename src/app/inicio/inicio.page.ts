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
        label:'All',
        image:'/assets/img/icon/audifonos-inalambricos',
        active: true,
      },
    ];
  }





  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    slidesPerView:1.5,
    centeredSlides:true,
    loop: true,
    //spaceBetween:10,
    //autoplay:true,
  };









}
