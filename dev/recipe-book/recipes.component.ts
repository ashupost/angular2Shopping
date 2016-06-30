import {Component} from '@angular/core';
import {RecipeService} from './recipe.service';
import {RecipeListComponent} from './recipe-list.component';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
	selector: 'my-recipes',
	template: `
			<div class="master">
				<my-recipe-list></my-recipe-list>
			</div>
			<div class="detail">
				<router-outlet></router-outlet>
			</div>
	`,
	providers: [RecipeService],
	directives: [RecipeListComponent, ROUTER_DIRECTIVES],
	styleUrls: ['src/css/app.css']
})
export class RecipesComponent {
}

