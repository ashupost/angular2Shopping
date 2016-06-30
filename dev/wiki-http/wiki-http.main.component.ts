import {Component}        from '@angular/core';
import {TohComponent} from "./toh.component";
import {WikiComponent} from "./wiki.component";
import {WikiSmartComponent} from "./wiki-smart.component";

@Component({
    template: `
    <my-wiki-smart>WikiSmart Loading...</my-wiki-smart>
    <my-toh>ToH Loading...</my-toh>
    <my-wiki>Wiki Loading...</my-wiki>
  
    `,
    directives: [TohComponent,WikiComponent, WikiSmartComponent]

})
export class WikiHttpMainComponent {
}

