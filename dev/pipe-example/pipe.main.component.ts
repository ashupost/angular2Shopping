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
    <hr>
    <p> 'this is a not so long string' | truncate </p>
    <p> 'this is a not so long string' | truncate : 20 </p>
    <p> 'this is a not so long string' | truncate : 20 : '.' </p>
    
    <hr>
    <p>
        transform(value: string, args: string[]) : string { <br>
        let limit = args.length > 0 ? parseInt(args[0], 10) : 10;<br>
        let trail = args.length > 1 ? args[1] : '...';<br>
        return value.length > limit ? value.substring(0, limit) + trail : value;<br>
    }<br>
    </p>
  `
})
export class PipeMainComponent {
    constructor(){ }
}