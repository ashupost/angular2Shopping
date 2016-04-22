import {Component} from 'angular2/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from '../shared/shopping-list.service';
@Component({
    selector: 'my-shopping-list-edit',
    templateUrl: 'templates/shopping-list/shopping-list-edit.tpl.html',
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