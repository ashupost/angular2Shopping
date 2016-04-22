import {Component} from 'angular2/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from '../shared/shopping-list.service';
@Component({
    selector: 'my-shopping-list-edit',
    template: `
		<h1>{{ingredient === null ? 'Add' : 'Edit' }} Item </h1>
		<form id="shopping-list-add" (ngSubmit)="onSubmit(f.value)" #f="ngForm">
			<div class="form-group">
			<label for="item-name">Name</label>
			<input type="text" class="form-control" id="item-name" [ngModel]="ingredient?.name" required ngControl="name">
				</div>
			<div class="form-group">
				<label for="item-amount">amount</label>
			<input type="text" class="form-control" id="item-amount" required required [ngModel]="ingredient?.amount" ngControl="amount">
			</div>
			<div class="form-group">
			<button class="btn bg-orange margin" type="submit">{{ingredient === null ? 'Add' : 'Edit' }} Item</button>
			<button class="btn bg-red margin" type="submit" *ngIf="ingredient !== null" (click)="onDelete()">Delete Item</button>
				</div>
		</form>    
    `,
	inputs: ['ingredient']

})
export class ShoppingListEditComponent {
	ingredient: Ingredient;
	constructor(private _shoppingListService: ShoppingListService) {}
	onSubmit(item: Ingredient) {
		this.ingredient !== null
			?
			this._shoppingListService.updateItem(
				this._shoppingListService.getIndexOfItem(
					this.ingredient), item)
			:
			this._shoppingListService.insertItem(item);
	}
	onDelete() {
		this._shoppingListService.deleteItem(this.ingredient);
		this.ingredient = null;
	}
}