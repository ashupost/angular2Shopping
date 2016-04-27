import {Component} from 'angular2/core';
import {TruncatePipe} from "./truncatepipe.component";
@Component({
    selector: 'app',
    pipes: [TruncatePipe],
    template: `
    <h3>Pipe Template Example</h3>
    <p>{{ 'this is a not so long string' | truncate }}</p>
    <p>{{ 'this is a not so long string' | truncate : 20 }}</p>
    <p>{{ 'this is a not so long string' | truncate : 20 : '.' }}</p>
   
  `
})
export class PipeMainComponent {
    constructor(){ }
}