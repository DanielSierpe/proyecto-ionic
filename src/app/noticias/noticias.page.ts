import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  option = {
    //slidesPerView:1.5,
    centeredSlides:true,
    loop: true,
    spaceBetween: 3,
    //autoplay:true,
  };

}
