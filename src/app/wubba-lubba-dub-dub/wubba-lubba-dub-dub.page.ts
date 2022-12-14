import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wubba-lubba-dub-dub',
  templateUrl: './wubba-lubba-dub-dub.page.html',
  styleUrls: ['./wubba-lubba-dub-dub.page.scss'],
})
export class WubbaLubbaDubDubPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  in = {
    slidesPerView:1.8,
    //centeredSlides:true,
    //loop: true,
    spaceBetween: 1,
    //autoplay:true,
  };
}
