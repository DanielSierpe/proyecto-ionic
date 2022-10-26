import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  constructor(public navCtrl: NavController,public camera: Camera ) { }

  ngOnInit() {
  }

}
