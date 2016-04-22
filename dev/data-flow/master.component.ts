import {Component} from 'angular2/core';
import {Level1Component} from "./level-1.component";

@Component({
    template: `
<div style="background-color: #Bb97c4;">
    <h4>Master Component</h4>
    <input type="text" #textInput value="{{text}}">
    <button (click)="onChange(textInput.value)">Change</button>
    <br><br>
    <div style="background-color: #Fb97c4; margin: 50px;">
         <level-1-component [text]="text" (changed) = "onChange($event)"></level-1-component>
    </div>
    <div style="background-color: #Fb97c4; margin: 50px;">
        <level-1-component [text]="text" (changed) = "onChange($event)"></level-1-component>
    </div>
    `,
    directives: [Level1Component]
})
export class DataFlowMasterComponent {
    text:string;
    constructor(){

    }
    onChange(value){
        this.text= value;
    }
}
