import {Component, EventEmitter} from 'angular2/core';
import {Output} from 'angular2/core';
import {Leve12Component} from './level-2.component';

@Component({
    selector: 'level-1-component',
    template: `
  
    <h4>Level 1 Component</h4>
    <input type="text" #textElement value="{{text}}">
    
    <button (click)="onChange(textElement.value)">Change</button>
    <br><br>
    <div style="background-color: #0b97c4; margin: 50px;" id="c3">
         <level-2-component [text]="text" (changed) = "onLevel2Changed($event)"></level-2-component>
    </div>
 
`,
    directives: [Leve12Component],
    inputs: ['text']

})
export class Level1Component {
    text:string;
    @Output() changed = new EventEmitter();
    constructor(){

    }
    onChange(value){
        this.text= value;
        this.changed.emit(value);
    }
    onLevel2Changed(value){
        this.text=value;
        this.changed.emit(value);

    }

}
