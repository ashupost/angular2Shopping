"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var recipe_service_1 = require('./recipe.service');
var shopping_list_service_1 = require('../shared/shopping-list.service');
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(_routeParams, _recipeService, _router, _shoppingListService) {
        this._routeParams = _routeParams;
        this._recipeService = _recipeService;
        this._router = _router;
        this._shoppingListService = _shoppingListService;
    }
    RecipeDetailComponent.prototype.onEdit = function () {
        this._router.navigate(['RecipeEdit', {
                editMode: 'edit',
                itemIndex: this._recipeIndex
            }]);
    };
    RecipeDetailComponent.prototype.onDelete = function () {
        this._recipeService.deleteRecipe(+this._recipeIndex);
        this._router.navigate(['RecipeDetail']);
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this._shoppingListService.insertItems(this.recipe.ingredients);
    };
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var itemIndex = this._routeParams.get('recipeIndex');
        console.log('itemIndex', itemIndex);
        this._recipeIndex = itemIndex;
        this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;
    };
    RecipeDetailComponent = __decorate([
        core_1.Component({
            template: "\n\t\t\t<div *ngIf=\"recipe == null\" class=\"list-group-item active\">\n\t\t\t\t<h3>Please choose or create a recipe!!</h3>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div *ngIf=\"recipe != null\" class=\"list-group\">\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t<h1>{{recipe.name}}</h1>\n\t\t\t\t<span><a class=\"btn bg-orange margin\" (click)=\"onEdit()\">Edit</a> | <a (click)=\"onDelete()\" class=\"btn bg-red margin\">Delete</a></span>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t<img [src]=\"recipe.imageUrl\" width=\"120\" height=\"96\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t{{recipe.content}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t<a (click)=\"onAddToShoppingList()\" class=\"btn bg-orange margin\" >Add all to shopping list</a>\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li *ngFor=\"let item of recipe.ingredients\" class=\"list-group-item\">{{item.name}} ({{item.amount}})</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>    \n   ",
            providers: [shopping_list_service_1.ShoppingListService]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, router_1.Router, shopping_list_service_1.ShoppingListService])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0Msc0NBQWtDLGlDQUFpQyxDQUFDLENBQUE7QUE0QnBFO0lBR0MsK0JBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBVSxPQUFlLEVBQVUsb0JBQXlDO1FBQTVJLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtJQUNoSyxDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFO2dCQUNwQyxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQzVCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELHdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUNELG1EQUFtQixHQUFuQjtRQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0Qsd0NBQVEsR0FBUjtRQUNDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7SUFFN0YsQ0FBQztJQXBERjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUseWdDQXVCVjtZQUNBLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO1NBQ25DLENBQUM7OzZCQUFBO0lBMkJGLDRCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSw2QkFBcUIsd0JBMEJqQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcclxuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcblx0XHRcdDxkaXYgKm5nSWY9XCJyZWNpcGUgPT0gbnVsbFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGFjdGl2ZVwiPlxyXG5cdFx0XHRcdDxoMz5QbGVhc2UgY2hvb3NlIG9yIGNyZWF0ZSBhIHJlY2lwZSEhPC9oMz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwicmVjaXBlICE9IG51bGxcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcblx0XHRcdFx0PGgxPnt7cmVjaXBlLm5hbWV9fTwvaDE+XHJcblx0XHRcdFx0PHNwYW4+PGEgY2xhc3M9XCJidG4gYmctb3JhbmdlIG1hcmdpblwiIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+IHwgPGEgKGNsaWNrKT1cIm9uRGVsZXRlKClcIiBjbGFzcz1cImJ0biBiZy1yZWQgbWFyZ2luXCI+RGVsZXRlPC9hPjwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDxpbWcgW3NyY109XCJyZWNpcGUuaW1hZ2VVcmxcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjk2XCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG5cdFx0XHRcdFx0e3tyZWNpcGUuY29udGVudH19XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG5cdFx0XHRcdFx0PGEgKGNsaWNrKT1cIm9uQWRkVG9TaG9wcGluZ0xpc3QoKVwiIGNsYXNzPVwiYnRuIGJnLW9yYW5nZSBtYXJnaW5cIiA+QWRkIGFsbCB0byBzaG9wcGluZyBsaXN0PC9hPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcmVjaXBlLmluZ3JlZGllbnRzXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj57e2l0ZW0ubmFtZX19ICh7e2l0ZW0uYW1vdW50fX0pPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PiAgICBcclxuICAgYCxcclxuICAgIHByb3ZpZGVyczogW1Nob3BwaW5nTGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGVEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0cmVjaXBlOiBSZWNpcGU7XHJcblx0cHJpdmF0ZSBfcmVjaXBlSW5kZXg6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXHRwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHtcclxuXHR9XHJcblx0b25FZGl0KCl7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVFZGl0Jywge1xyXG5cdFx0XHRlZGl0TW9kZTogJ2VkaXQnLFxyXG5cdFx0XHRpdGVtSW5kZXg6IHRoaXMuX3JlY2lwZUluZGV4XHJcblx0XHR9XSlcclxuXHR9XHJcblx0b25EZWxldGUoKSB7XHJcblx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLmRlbGV0ZVJlY2lwZSgrdGhpcy5fcmVjaXBlSW5kZXgpO1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJ10pO1xyXG5cclxuXHR9XHJcblx0b25BZGRUb1Nob3BwaW5nTGlzdCgpIHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbXModGhpcy5yZWNpcGUuaW5ncmVkaWVudHMpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHRsZXQgaXRlbUluZGV4ID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZWNpcGVJbmRleCcpO1xyXG5cdFx0Y29uc29sZS5sb2coJ2l0ZW1JbmRleCcsaXRlbUluZGV4KTtcclxuXHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gaXRlbUluZGV4O1xyXG5cdFx0dGhpcy5yZWNpcGUgPSB0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldFJlY2lwZShpdGVtSW5kZXggIT09IG51bGwgPyAraXRlbUluZGV4IDogbnVsbCkgfHwgbnVsbDtcclxuXHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
