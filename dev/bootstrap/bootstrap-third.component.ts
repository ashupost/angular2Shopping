import {
    Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit,
    OnChanges, DoCheck, OnDestroy
} from 'angular2/core';

@Component({

    templateUrl: 'templates/bootstrap/bootstrap-third.component.html'
    
})
export class BootstrapThirdComponent implements   OnInit,    AfterViewInit
     {

 ngAfterViewInit():any {
        console.log("ngAfterViewInit");
    }



    ngOnInit():any {
        console.log("ngOnInit..");
    }
}