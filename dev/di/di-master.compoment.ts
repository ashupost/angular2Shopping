import {Component} from 'angular2/core';
import {DILevel1Component} from "./di-level1.compoment";
import {DILevel2Component} from "./di-level2.compoment";

@Component({
    template: `
     <section style="padding: 10px 0; background-color: #0f7595; margin: 10px 20px;">
         <di-level1-component></di-level1-component>
     </section>
     <section style="padding: 10px 0;background-color: #0f7595; margin: 10px 20px;">
         <di-level2-component></di-level2-component>
     </section>
    `,
    directives: [DILevel1Component, DILevel2Component]

})
export class DIMasterComponent {
}