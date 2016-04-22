import {Component, OnInit} from 'angular2/core';
import {ShoppingListEditComponent} from './shopping-list-edit.component';
import {ShoppingListService} from '../shared/shopping-list.service';
import {Ingredient} from '../shared/ingredient';

@Component({ // NO SELECTOR BECAUSE IT IS A ROUTE
	directives: [ShoppingListEditComponent],
	providers: [ShoppingListService],
    template: `
			<h1>Shopping List</h1>
			<my-shopping-list-edit [ingredient]="selectedItem"></my-shopping-list-edit>
			<div class="list">
				<button class="btn bg-orange margin" (click)="onAddItem()">Add New Item</button>
				<ul>
					<li *ngFor="#item of shoppingList" (click)="onSelectItem(item)">{{item.name}} {{item.amount}}</li>
				</ul>
			</div>    
    `
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