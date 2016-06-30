import {Component, ElementRef} from '@angular/core';
declare var jQuery: any;
declare var AdminLTE: any;
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
    selector: 'my-index',
    templateUrl: 'templates/index/index.component.html',
    directives: [ROUTER_DIRECTIVES]

})
export class IndexComponent{

 constructor(private _elRef: ElementRef){

    }


     
}
