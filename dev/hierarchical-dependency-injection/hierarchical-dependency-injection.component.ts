import {Component} from 'angular2/core';
import {HeroesService} from './heroes.service';
import {HeroesListComponent} from "./heroes-list.component";

@Component({
    template: `
        <heroes-list>Loading...</heroes-list>
    `,
    directives: [HeroesListComponent],
    providers: [HeroesService]
})
export class HierarchicalDependencyInjectionComponent {

}
