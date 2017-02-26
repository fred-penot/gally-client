import { Component } from '@angular/core';
import { RemoteActionService } from '../../providers/remote-action-service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RemoteActionService]
})
export class HomePage {

  constructor(public navCtrl: NavController, public remoteActionService: RemoteActionService) {
    this.remoteActionService.getAction();
  }

}
