import {Component} from 'angular2/core';
import {Observable} from "rxjs/Observable";

@Component({
    template: `
     <H1> Hellp RX JS Example</H1>
     <p><button class="btn" (click)="onStart()">Start</button> </p>
     <p><button class="btn" (click)="onSubscribe()">onSubscribe</button></p>
    `
})
export class RXJSComponent {
    getData:string;
    error:any;
    private data: Observable<Array<any>>;
    constructor() { }

    onStart(){
        this.data = new Observable(
            observer => {
                setTimeout(
                    () => {
                        observer.next(42);
                        observer.next(43);
                        observer.complete();
                    },200);
                console.log('Started Observer Sequence onStart');
            });
    }

    onSubscribe(){
        let subscription = this.data.subscribe(
            value => console.log('value : ' + value),
            error => console.log('error : ' + error),
            () => console.log('Completed Observer sequence')
        );

    }

}
