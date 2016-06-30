import {Component, ElementRef} from 'angular2/core';
declare var jQuery: any;
declare var AdminLTE: any;
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'my-index',
    templateUrl: 'templates/index/index.component.html',
    directives: [ROUTER_DIRECTIVES]

})
export class IndexComponent{

 constructor(private _elRef: ElementRef){

    }


     
}
