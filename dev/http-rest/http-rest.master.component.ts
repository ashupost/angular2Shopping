import {Component} from 'angular2/core';
import {HTTPRestDataService} from "./http-rest.data.service";

@Component({
    template: `
      <button (click)="getHTTPCall()">Get REST CALL SHOW TIME</button>
      <h4>{{getData}}</h4>
    `,
    providers: [HTTPRestDataService]

})
export class HTTPRestMasterComponent {
    getData:string;
    constructor(private _dataService: HTTPRestDataService) {
    }

    getHTTPCall() {
        this._dataService.getCall()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert(error),
                () => console.log("finished HTTP get Call")
            );
    }
}
