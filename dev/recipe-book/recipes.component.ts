import {Component} from '@angular/core';
import {RecipeService} from './recipe.service';
import {RecipeListComponent} from './recipe-list.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit.component';
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

@RouteConfig([
	{path: '/RecipeDetail',          name: 'RecipeDetail', component: RecipeDetailComponent, useAsDefault: true},
	{path: '/:editMode', name: 'RecipeEdit',   component: RecipeEditComponent}
])

export class RecipesComponent {

}