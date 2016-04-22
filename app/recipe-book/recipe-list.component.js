System.register(['angular2/core', './recipe.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, recipe_service_1, router_1;
    var RecipeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RecipeListComponent = (function () {
                function RecipeListComponent(_recipeService, _router) {
                    this._recipeService = _recipeService;
                    this._router = _router;
                    this.recipes = this._recipeService.getAllRecipes();
                }
                RecipeListComponent.prototype.onSelect = function (item) {
                    this._router.navigate(['RecipeDetail', { recipeIndex: Number(this._recipeService.getRecipeIndex(item)) }]);
                };
                RecipeListComponent.prototype.ngOnInit = function () {
                    //this.recipes = this._recipeService.getAllRecipes();
                };
                RecipeListComponent.prototype.onAddRecipe = function () {
                    this._router.navigate(['RecipeEdit', { editMode: 'create' }]);
                };
                RecipeListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-list',
                        templateUrl: 'templates/recipe-book/recipe-list.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.Router])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUdDLDZCQUFvQixjQUE2QixFQUFVLE9BQWU7b0JBQXRELG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSLFVBQVMsSUFBWTtvQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFHLENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUjtvQkFDQyxxREFBcUQ7Z0JBQ3RELENBQUM7Z0JBQ0QseUNBQVcsR0FBWDtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBbkJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLDRDQUE0QztxQkFFNUQsQ0FBQzs7dUNBQUE7Z0JBZ0JGLDBCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxxREFlQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXJlY2lwZS1saXN0JywgLy8gbGVmdCBzaWRlIHBhbmVsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZWNpcGUtYm9vay9yZWNpcGUtbGlzdC50cGwuaHRtbCdcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwcml2YXRlIHJlY2lwZXM6IFJlY2lwZVtdO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5yZWNpcGVzID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRBbGxSZWNpcGVzKCk7XHJcblx0fVxyXG5cdG9uU2VsZWN0KGl0ZW06IFJlY2lwZSl7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnLCB7cmVjaXBlSW5kZXg6IE51bWJlcih0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldFJlY2lwZUluZGV4KGl0ZW0pKX1dKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKTogYW55IHtcclxuXHRcdC8vdGhpcy5yZWNpcGVzID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRBbGxSZWNpcGVzKCk7XHJcblx0fVxyXG5cdG9uQWRkUmVjaXBlKCl7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVFZGl0JywgeyBlZGl0TW9kZTogJ2NyZWF0ZScgfV0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
