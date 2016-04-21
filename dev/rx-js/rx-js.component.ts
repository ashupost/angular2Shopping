import {Component} from 'angular2/core';
import {HTTPRestDataService} from "./http-rest.data.service";

@Component({
    template: `
     <H1> Hellp RX JS Example</H1>
    `

})
export class RXJSComponent {
    getData:string;
    error:any;
    constructor() {
    }

}
