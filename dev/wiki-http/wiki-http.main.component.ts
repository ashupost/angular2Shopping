import {Component}        from 'angular2/core';
import {TohComponent} from "./toh.component";
import {WikiComponent} from "./wiki.component";
import {WikiSmartComponent} from "./wiki-smart.component";

@Component({
    template: `
    <my-toh>ToH Loading...</my-toh>
    <my-wiki>Wiki Loading...</my-wiki>
    <my-wiki-smart>WikiSmart Loading...</my-wiki-smart>
    `,
    directives: [TohComponent,WikiComponent, WikiSmartComponent]

})
export class WikiHttpMainComponent {
}

