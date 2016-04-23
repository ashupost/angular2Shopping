import {Component, OnInit} from 'angular2/core';
import {Recipe} from '../shared/recipe';
import {RouteParams, Router} from 'angular2/router';
import {RecipeService} from './recipe.service';
import {ShoppingListService} from '../shared/shopping-list.service';
@Component({
    template: `
			<div *ngIf="recipe == null" class="list-group-item active">
				<h3>Please choose or create a recipe!!</h3>
			</div>
			
			<div *ngIf="recipe != null" class="list-group">
				<div class="list-group-item">
				<h1>{{recipe.name}}</h1>
				<span><a class="btn bg-orange margin" (click)="onEdit()">Edit</a> | <a (click)="onDelete()" class="btn bg-red margin">Delete</a></span>
				</div>
					<div class="list-group-item">
					<img [src]="recipe.imageUrl" width="120" height="96">
				</div>
				<div class="list-group-item">
					{{recipe.content}}
				</div>
				<div class="list-group-item">
					<a (click)="onAddToShoppingList()" class="btn bg-orange margin" >Add all to shopping list</a>
					<ul class="list-group">
						<li *ngFor="#item of recipe.ingredients" class="list-group-item">{{item.name}} ({{item.amount}})</li>
					</ul>
				</div>
			</div>    
   `,
    providers: [ShoppingListService]
})
export class RecipeDetailComponent implements OnInit{
	recipe: Recipe;
	private _recipeIndex: string;


	constructor(private _routeParams: RouteParams,	private _recipeService: RecipeService,	private _router: Router, private _shoppingListService: ShoppingListService) {
	}
	onEdit(){
		this._router.navigate(['RecipeEdit', {
			editMode: 'edit',
			itemIndex: this._recipeIndex
		}])
	}
	onDelete() {
		this._recipeService.deleteRecipe(+this._recipeIndex);
		this._router.navigate(['RecipeDetail']);

	}
	onAddToShoppingList() {
		this._shoppingListService.insertItems(this.recipe.ingredients);
	}
	ngOnInit():any {
		let itemIndex = this._routeParams.get('recipeIndex');
		this._recipeIndex = itemIndex;
		this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;

	}
}
