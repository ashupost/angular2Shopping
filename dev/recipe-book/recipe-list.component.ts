import {Component, OnInit} from 'angular2/core';
import {RecipeService} from './recipe.service';
import {Recipe} from '../shared/recipe';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-recipe-list', // left side panel
    template: `
				<div class="list-group-item">
				<button class="btn bg-orange margin" (click)="onAddRecipe()">Add Recipe Here/Click Image to Update</button>
				<ul class="list-group">
					<li *ngFor="#item of recipes" (click)="onSelect(item)" class="list-group-item">
						<div class="panel panel-default">
							<img [src]="item.imageUrl" alt="Recipe" title="{{item.imageUrl}}" class="img-rounded" width="120" height="96">
						</div>
						<div class="text">{{item.name}}</div>
					</li>
				</ul>
				</div>    
    `
})
export class RecipeListComponent implements OnInit {
	private recipes: Recipe[];

	constructor(private _recipeService: RecipeService, private _router: Router) {
		this.recipes = this._recipeService.getAllRecipes();
	}
	onSelect(item: Recipe){
		this._router.navigate(['RecipeDetail', {recipeIndex: Number(this._recipeService.getRecipeIndex(item))}]);
	}
	ngOnInit(): any {
		//this.recipes = this._recipeService.getAllRecipes();
	}
	onAddRecipe(){
		this._router.navigate(['RecipeEdit', { editMode: 'create' }]);
	}
}