import {Component} from '@angular/core';
import {DILevel1Component} from "./di-level1.compoment";
import {DILevel2Component} from "./di-level2.compoment";

@Component({
    template: `
     <section style="background-color: #0f7595;">
         <di-level1-component></di-level1-component>
     </section>
     <section style="background-color: #0f7595;">
         <di-level2-component></di-level2-component>
     </section>
    `,
    directives: [DILevel1Component, DILevel2Component]
})
export class DIMasterComponent {
}