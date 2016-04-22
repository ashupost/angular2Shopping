System.register(['angular2/core', 'angular2/router', './recipe.service', '../shared/shopping-list.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, recipe_service_1, shopping_list_service_1;
    var RecipeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
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
                    this._recipeIndex = itemIndex;
                    this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;
                };
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t\t<div *ngIf=\"recipe == null\" class=\"list-group-item active\">\n\t\t\t\t<h3>Please choose or create a recipe!!</h3>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div *ngIf=\"recipe != null\" class=\"list-group\">\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t<h1>{{recipe.name}}</h1>\n\t\t\t\t<span><a class=\"btn bg-orange margin\" (click)=\"onEdit()\">Edit</a> | <a (click)=\"onDelete()\" class=\"btn bg-red margin\">Delete</a></span>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t<img [src]=\"recipe.imageUrl\" width=\"120\" height=\"96\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t{{recipe.content}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t<a (click)=\"onAddToShoppingList()\" class=\"btn bg-orange margin\" >Add all to shopping list</a>\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li *ngFor=\"#item of recipe.ingredients\" class=\"list-group-item\">{{item.name}} ({{item.amount}})</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>    \n   ",
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, router_1.Router, shopping_list_service_1.ShoppingListService])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUlDLCtCQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQVUsT0FBZSxFQUFVLG9CQUF5QztvQkFBNUksaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO2dCQUNoSyxDQUFDO2dCQUNELHNDQUFNLEdBQU47b0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUU7NEJBQ3BDLFFBQVEsRUFBRSxNQUFNOzRCQUNoQixTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVk7eUJBQzVCLENBQUMsQ0FBQyxDQUFBO2dCQUNKLENBQUM7Z0JBQ0Qsd0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUV6QyxDQUFDO2dCQUNELG1EQUFtQixHQUFuQjtvQkFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBQ0Qsd0NBQVEsR0FBUjtvQkFDQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7b0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxLQUFLLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBRTdGLENBQUM7Z0JBcERGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNnQ0F1QlY7d0JBQ0EsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ25DLENBQUM7O3lDQUFBO2dCQTJCRiw0QkFBQztZQUFELENBMUJBLEFBMEJDLElBQUE7WUExQkQseURBMEJDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xyXG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUuc2VydmljZSc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuXHRcdFx0PGRpdiAqbmdJZj1cInJlY2lwZSA9PSBudWxsXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlXCI+XHJcblx0XHRcdFx0PGgzPlBsZWFzZSBjaG9vc2Ugb3IgY3JlYXRlIGEgcmVjaXBlISE8L2gzPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgKm5nSWY9XCJyZWNpcGUgIT0gbnVsbFwiIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHQ8aDE+e3tyZWNpcGUubmFtZX19PC9oMT5cclxuXHRcdFx0XHQ8c3Bhbj48YSBjbGFzcz1cImJ0biBiZy1vcmFuZ2UgbWFyZ2luXCIgKGNsaWNrKT1cIm9uRWRpdCgpXCI+RWRpdDwvYT4gfCA8YSAoY2xpY2spPVwib25EZWxldGUoKVwiIGNsYXNzPVwiYnRuIGJnLXJlZCBtYXJnaW5cIj5EZWxldGU8L2E+PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG5cdFx0XHRcdFx0PGltZyBbc3JjXT1cInJlY2lwZS5pbWFnZVVybFwiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiOTZcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcblx0XHRcdFx0XHR7e3JlY2lwZS5jb250ZW50fX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8YSAoY2xpY2spPVwib25BZGRUb1Nob3BwaW5nTGlzdCgpXCIgY2xhc3M9XCJidG4gYmctb3JhbmdlIG1hcmdpblwiID5BZGQgYWxsIHRvIHNob3BwaW5nIGxpc3Q8L2E+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsaSAqbmdGb3I9XCIjaXRlbSBvZiByZWNpcGUuaW5ncmVkaWVudHNcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPnt7aXRlbS5uYW1lfX0gKHt7aXRlbS5hbW91bnR9fSk8L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+ICAgIFxyXG4gICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2lwZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRyZWNpcGU6IFJlY2lwZTtcclxuXHRwcml2YXRlIF9yZWNpcGVJbmRleDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXHRwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHtcclxuXHR9XHJcblx0b25FZGl0KCl7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVFZGl0Jywge1xyXG5cdFx0XHRlZGl0TW9kZTogJ2VkaXQnLFxyXG5cdFx0XHRpdGVtSW5kZXg6IHRoaXMuX3JlY2lwZUluZGV4XHJcblx0XHR9XSlcclxuXHR9XHJcblx0b25EZWxldGUoKSB7XHJcblx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLmRlbGV0ZVJlY2lwZSgrdGhpcy5fcmVjaXBlSW5kZXgpO1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJ10pO1xyXG5cclxuXHR9XHJcblx0b25BZGRUb1Nob3BwaW5nTGlzdCgpIHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbXModGhpcy5yZWNpcGUuaW5ncmVkaWVudHMpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHRsZXQgaXRlbUluZGV4ID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZWNpcGVJbmRleCcpO1xyXG5cdFx0dGhpcy5fcmVjaXBlSW5kZXggPSBpdGVtSW5kZXg7XHJcblx0XHR0aGlzLnJlY2lwZSA9IHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlKGl0ZW1JbmRleCAhPT0gbnVsbCA/ICtpdGVtSW5kZXggOiBudWxsKSB8fCBudWxsO1xyXG5cclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
