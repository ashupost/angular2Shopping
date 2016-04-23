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
                        template: "\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t<button class=\"btn bg-orange margin\" (click)=\"onAddRecipe()\">Add Recipe Here/Click Image to Update</button>\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li *ngFor=\"#item of recipes\" (click)=\"onSelect(item)\" class=\"list-group-item\">\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<img [src]=\"item.imageUrl\" alt=\"Recipe\" title=\"{{item.imageUrl}}\" class=\"img-rounded\" width=\"120\" height=\"96\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text\">{{item.name}}</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t</div>    \n    "
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.Router])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFHQyw2QkFBb0IsY0FBNkIsRUFBVSxPQUFlO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUixVQUFTLElBQVk7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRyxDQUFDO2dCQUNELHNDQUFRLEdBQVI7b0JBQ0MscURBQXFEO2dCQUN0RCxDQUFDO2dCQUNELHlDQUFXLEdBQVg7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQTlCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxzbUJBWVQ7cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBZ0JGLDBCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxxREFlQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXJlY2lwZS1saXN0JywgLy8gbGVmdCBzaWRlIHBhbmVsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJnLW9yYW5nZSBtYXJnaW5cIiAoY2xpY2spPVwib25BZGRSZWNpcGUoKVwiPkFkZCBSZWNpcGUgSGVyZS9DbGljayBJbWFnZSB0byBVcGRhdGU8L2J1dHRvbj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgcmVjaXBlc1wiIChjbGljayk9XCJvblNlbGVjdChpdGVtKVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBbc3JjXT1cIml0ZW0uaW1hZ2VVcmxcIiBhbHQ9XCJSZWNpcGVcIiB0aXRsZT1cInt7aXRlbS5pbWFnZVVybH19XCIgY2xhc3M9XCJpbWctcm91bmRlZFwiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiOTZcIj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0XCI+e3tpdGVtLm5hbWV9fTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PiAgICBcclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2lwZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByaXZhdGUgcmVjaXBlczogUmVjaXBlW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcblx0XHR0aGlzLnJlY2lwZXMgPSB0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldEFsbFJlY2lwZXMoKTtcclxuXHR9XHJcblx0b25TZWxlY3QoaXRlbTogUmVjaXBlKXtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZURldGFpbCcsIHtyZWNpcGVJbmRleDogTnVtYmVyKHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlSW5kZXgoaXRlbSkpfV0pO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOiBhbnkge1xyXG5cdFx0Ly90aGlzLnJlY2lwZXMgPSB0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldEFsbFJlY2lwZXMoKTtcclxuXHR9XHJcblx0b25BZGRSZWNpcGUoKXtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZUVkaXQnLCB7IGVkaXRNb2RlOiAnY3JlYXRlJyB9XSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
