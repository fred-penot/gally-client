import { Injectable } from '@angular/core';
import { CommonService } from '../providers/common-service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RemoteActionService {
    private routeGetAction: string = 'remote/api/get/action/';
    private interval: any;

    constructor(public http: Http, public commonService: CommonService) {

    }

    getAction(tabs) {
        let currentTab = 'remote';
        let interval = Observable.interval(1000);
        this.interval = interval.subscribe(() => {
            this.commonService.getDataApi(this.routeGetAction).then(data => {
                if (data['data']['data']['action'] != '') {
                    let action = data['data']['data']['action'];
                    if (action == 'remote' || action == 'vocal') {
                        if (currentTab != action) {
                            if (action == 'vocal') {
                                tabs.select(1);
                            } else if (action == 'remote') {
                                tabs.select(0);
                            }
                        }
                        currentTab = action;
                    } else {
                        if (currentTab == 'remote') {
                            console.log('== mode remote == ');
                            console.log(action);
                        } else if (currentTab == 'vocal') {
                            console.log('== mode vocal == ');
                            let stringDiscussion = action.replace('£', '?');
                            console.log(JSON.parse(stringDiscussion));
                        }
                    }
                }
            });
        });
    }
}
