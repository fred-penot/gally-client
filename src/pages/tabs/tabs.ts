import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CommonService } from '../../providers/common-service';
import { RemoteActionService } from '../../providers/remote-action-service';
import { RemotePage } from '../remote/remote';
import { VocalPage } from '../vocal/vocal';
import { Tabs, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html',
  providers: [Storage, CommonService, RemoteActionService]
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RemotePage;
  tab2Root: any = VocalPage;

  constructor(public navCtrl: NavController, public remoteActionService: RemoteActionService) {

  }

  ionViewDidEnter() {
    this.remoteActionService.getAction(this.tabRef);
  }
}
