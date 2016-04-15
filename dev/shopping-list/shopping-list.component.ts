import {Component, OnInit} from 'angular2/core';
import {ShoppingListEditComponent} from './shopping-list-edit.component';
import {ShoppingListService} from '../shared/shopping-list.service';
import {Ingredient} from '../shared/ingredient';

@Component({ // NO SELECTOR BECAUSE IT IS A ROUTE
    templateUrl: 'templates/shopping-list/shopping-list.tpl.html',
    directives: [ShoppingListEditComponent],
    providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit{
	shoppingList: Ingredient[];
	selectedItem: Ingredient = null;
	constructor(private _shoppingListServie: ShoppingListService) {}

	ngOnInit():any {
		this.shoppingList = this._shoppingListServie.getAllItems();
	}
	onSelectItem(item: Ingredient){
		this.selectedItem = item;
	}
	onAddItem(){
		this.selectedItem = null;
	}
}