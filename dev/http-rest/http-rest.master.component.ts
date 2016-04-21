import {Component} from 'angular2/core';
import {HTTPRestDataService} from "./http-rest.data.service";

@Component({
    template: `
      <button (click)="getHTTPCall()">Get REST CALL SHOW TIME</button>
      <h4>{{getData}}</h4>
       <div class="alert alert-info">
          <h4>{{error}}</h4>
      </div>
    `,
    providers: [HTTPRestDataService]

})
export class HTTPRestMasterComponent {
    getData:string;
    error:any;
    constructor(private _dataService: HTTPRestDataService) {
    }

    getHTTPCall() {
        this._dataService.getCall()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => this.error = <any>error,
                () => console.log("finished HTTP get Call")
            );
    }
}
