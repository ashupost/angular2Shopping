import {Component, HostListener, Directive, EventEmitter, Output, Input} from "@angular/core";

@Directive({selector: 'button[counting]'})
class CountClicks {
    numberOfClicks = 0;
    @Output() changed = new EventEmitter();

   @HostListener('click', ['$event.target'])
   onClick(btn) {
       //console.log("button", btn, "number of clicks:", this.numberOfClicks++);
       this.changed.emit(this.numberOfClicks++);
    }
 }

 @Component({
   selector: 'app',
   template: `<button (changed)="onChange($event)" class="btn btn-info btn-lg" counting>Number of click : {{text}} </button>`,
   directives: [CountClicks],
 })
 export class HostListenerComponent {
     text:string;
     onChange(value){
         this.text= value;
     }
 }
