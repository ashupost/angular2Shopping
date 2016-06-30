import {
    Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit,
    OnChanges, DoCheck, OnDestroy
} from '@angular/core';

@Component({

    templateUrl: 'templates/bootstrap/bootstrap-second.component.html'
    
})
export class BootstrapSecondComponent implements   OnInit,    AfterViewInit
     {

 ngAfterViewInit():any {
        console.log("ngAfterViewInit");
    }



    ngOnInit():any {
        console.log("ngOnInit..");
    }
}