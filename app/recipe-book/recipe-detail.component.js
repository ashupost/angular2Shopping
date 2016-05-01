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
                    console.log('itemIndex', itemIndex);
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
//# sourceMappingURL=recipe-detail.component.js.map