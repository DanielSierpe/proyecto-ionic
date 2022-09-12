import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
