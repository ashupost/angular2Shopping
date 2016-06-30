import {Component, EventEmitter} from '@angular/core';
import {Output, Input} from '@angular/core';
@Component({
    selector: 'level-2-component',
    template: `
    <h4>Level 2 Component</h4>
    <input type="text" #textElement value="{{text}}">
    
    <button (click)="onChange(textElement.value)" class="btn btn-primary btn-sm">Change</button>
     `
})
export class Leve12Component {
    @Input() text:string;
    @Output() changed = new EventEmitter();
    constructor() {    }
    onChange(value) {
        this.changed.emit(value);
    }
}
