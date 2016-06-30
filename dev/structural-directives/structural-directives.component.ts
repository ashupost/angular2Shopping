import {Component, Input, Output} from '@angular/core';
import {UnlessDirective} from "./unless.directive";
import {HeavyLoaderComponent} from "./heavy-loader.component";

@Component({
    selector: 'structural-directives',
    templateUrl: 'templates/structural-directives/structural-directives.component.html',
    styles: ['button { min-width: 100px; }'],
    directives: [UnlessDirective, HeavyLoaderComponent]  
})
export class StructuralDirectivesComponent {
    heroes = ['AAAAAAAAAAAA', 'BBBBBBB', 'CCCCCCC'];
    hero = this.heroes[2];
    condition = true;
    isVisible = true;
    logs: string[] = [];
    status = 'ready';
}