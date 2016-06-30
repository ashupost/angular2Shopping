import {Component} from '@angular/core';
import {HTTPRestDataService} from "./http-rest.data.service";
import {DataService} from "../di/di-data.service";
import {DILevel2Component} from "../di/di-level2.compoment";

@Component({
    template: `
      <button (click)="getHTTPCall()">Get REST CALL SHOW TIME</button>
      <h4>{{getData}}</h4>
       <div class="alert alert-info">
          <h4>{{error}}</h4>
      </div>
       <section style="background-color: #0f7595;">
         <di-level2-component></di-level2-component>
     </section>
    `,
    directives: [DILevel2Component],
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
