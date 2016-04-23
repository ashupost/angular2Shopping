import {Component, EventEmitter} from 'angular2/core';
import {Output, Input} from 'angular2/core';
import {Leve12Component} from './level-2.component';

@Component({
    selector: 'level-1-component',
    template: `
  
    <h4>Level 1 Component</h4>
    <input type="text" #textElement value="{{text}}">
    
    <button (click)="onChange(textElement.value)" class="btn btn-primary btn-sm">Change</button>
    <br><br>
    <div style="background-color: #0b97c4; margin: 50px;">
         <level-2-component [text]="text" (changed) = "onLevel2Changed($event)"></level-2-component>
    </div>
 
`,
    directives: [Leve12Component]
})
export class Level1Component {
    @Input() text: string;
    @Output() changed = new EventEmitter();
    constructor(){ }
    onChange(value){
        this.text= value;
        this.changed.emit(value);
    }
    onLevel2Changed(value){
        this.text=value;
        this.changed.emit(value);

    }
}
