import {Component} from 'angular2/core';
import {RecipeService} from './recipe.service';
import {RecipeListComponent} from './recipe-list.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit.component';
@Component({
	selector: 'my-recipes',
	templateUrl: 'templates/recipe-book/recipe.tpl.html',
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