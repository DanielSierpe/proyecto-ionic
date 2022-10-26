import { Component, OnInit } from '@angular/core';
import { Options } from 'selenium-webdriver';
import { NavController } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  image: any;

  constructor(public navCtrl: NavController, public camera: Camera) {

  }

  sacarCamara(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado =>{
      this.image =  + resultado;
    }).catch(error =>{
      console.log(error);
    });
  }
  tomarGaleria(){

  }
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


