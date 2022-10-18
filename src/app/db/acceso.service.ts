import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';



@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  constructor(private Base_Rocket:Storage) {}

}

