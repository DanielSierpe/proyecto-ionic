import { Component, OnInit } from '@angular/core';
import { Options } from 'selenium-webdriver';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() {}

  ngOnInit() {

  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    //slidesPerView:1.5,
    //centeredSlides:true,
    //loop: true,
    spaceBetween:5,
    //autoplay:true,
  };
  // eslint-disable-next-line @typescript-eslint/member-ordering
  cupo={
    slidesPerView:2.5,
    loop: true,
  };

}


