import {Component, EventEmitter} from 'angular2/core';
import {Output} from 'angular2/core';
@Component({
    selector: 'level-2-component',
    template: `
    <h4>Level 2 Component</h4>
    <input type="text" #textElement value="{{text}}">
    
    <button (click)="onChange(textElement.value)">Change</button>
     `,
    inputs: ['text']
})
export class Leve12Component {
    text:string;
    @Output() changed = new EventEmitter();
    constructor() {    }
    onChange(value) {
        this.changed.emit(value);
    }
}
