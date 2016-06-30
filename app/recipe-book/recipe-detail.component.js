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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
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
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object, recipe_service_1.RecipeService, router_1.Router, shopping_list_service_1.ShoppingListService])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
    var _a;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0Msc0NBQWtDLGlDQUFpQyxDQUFDLENBQUE7QUE0QnBFO0lBR0MsK0JBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBVSxPQUFlLEVBQVUsb0JBQXlDO1FBQTVJLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtJQUNoSyxDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFO2dCQUNwQyxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQzVCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELHdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUNELG1EQUFtQixHQUFuQjtRQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0Qsd0NBQVEsR0FBUjtRQUNDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7SUFFN0YsQ0FBQztJQXBERjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUseWdDQXVCVjtZQUNBLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO1NBQ25DLENBQUM7OzZCQUFBO0lBMkJGLDRCQUFDOztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksNkJBQXFCLHdCQTBCakMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwicmVjaXBlID09IG51bGxcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBhY3RpdmVcIj5cclxuXHRcdFx0XHQ8aDM+UGxlYXNlIGNob29zZSBvciBjcmVhdGUgYSByZWNpcGUhITwvaDM+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiAqbmdJZj1cInJlY2lwZSAhPSBudWxsXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG5cdFx0XHRcdDxoMT57e3JlY2lwZS5uYW1lfX08L2gxPlxyXG5cdFx0XHRcdDxzcGFuPjxhIGNsYXNzPVwiYnRuIGJnLW9yYW5nZSBtYXJnaW5cIiAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPiB8IDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCIgY2xhc3M9XCJidG4gYmctcmVkIG1hcmdpblwiPkRlbGV0ZTwvYT48L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8aW1nIFtzcmNdPVwicmVjaXBlLmltYWdlVXJsXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCI5NlwiPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHRcdHt7cmVjaXBlLmNvbnRlbnR9fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDxhIChjbGljayk9XCJvbkFkZFRvU2hvcHBpbmdMaXN0KClcIiBjbGFzcz1cImJ0biBiZy1vcmFuZ2UgbWFyZ2luXCIgPkFkZCBhbGwgdG8gc2hvcHBpbmcgbGlzdDwvYT5cclxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJlY2lwZS5pbmdyZWRpZW50c1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+e3tpdGVtLm5hbWV9fSAoe3tpdGVtLmFtb3VudH19KTwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj4gICAgXHJcbiAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtTaG9wcGluZ0xpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cdHJlY2lwZTogUmVjaXBlO1xyXG5cdHByaXZhdGUgX3JlY2lwZUluZGV4OiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFx0cHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSxcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7XHJcblx0fVxyXG5cdG9uRWRpdCgpe1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRWRpdCcsIHtcclxuXHRcdFx0ZWRpdE1vZGU6ICdlZGl0JyxcclxuXHRcdFx0aXRlbUluZGV4OiB0aGlzLl9yZWNpcGVJbmRleFxyXG5cdFx0fV0pXHJcblx0fVxyXG5cdG9uRGVsZXRlKCkge1xyXG5cdFx0dGhpcy5fcmVjaXBlU2VydmljZS5kZWxldGVSZWNpcGUoK3RoaXMuX3JlY2lwZUluZGV4KTtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZURldGFpbCddKTtcclxuXHJcblx0fVxyXG5cdG9uQWRkVG9TaG9wcGluZ0xpc3QoKSB7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEl0ZW1zKHRoaXMucmVjaXBlLmluZ3JlZGllbnRzKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKTphbnkge1xyXG5cdFx0bGV0IGl0ZW1JbmRleCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVjaXBlSW5kZXgnKTtcclxuXHRcdGNvbnNvbGUubG9nKCdpdGVtSW5kZXgnLGl0ZW1JbmRleCk7XHJcblx0XHR0aGlzLl9yZWNpcGVJbmRleCA9IGl0ZW1JbmRleDtcclxuXHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUoaXRlbUluZGV4ICE9PSBudWxsID8gK2l0ZW1JbmRleCA6IG51bGwpIHx8IG51bGw7XHJcblxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
