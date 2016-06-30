import {
    Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit,
    OnChanges, DoCheck, OnDestroy
} from '@angular/core';

@Component({

    templateUrl: 'templates/bootstrap/bootstrap-main.component.html'
    
})
export class BootstrapMainComponent implements   OnInit,    AfterViewInit
     {

 ngAfterViewInit():any {
        console.log("ngAfterViewInit");
    }



    ngOnInit():any {
        console.log("ngOnInit..");
    }
}