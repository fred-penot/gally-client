import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vocal',
  templateUrl: 'vocal.html'
})
export class VocalPage {
  private discussion: any = [];

  constructor(public navCtrl: NavController) {

  }

}
