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

    getAction() {
        let interval = Observable.interval(1000);
        this.interval = interval.subscribe(() => {
            this.commonService.getDataApi(this.routeGetAction).then(data => {
                if (data['data']['data']['action'] != '') {
                    console.log(data['data']['data']['action']);
                    if (data['data']['data']['action'] == 'vocal') {
                        this.interval.unsubscribe();
                        clearInterval(this.interval);
                        console.log('== terminé == ');
                    }
                }
            });
        });
    }
}
