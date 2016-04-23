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
                }
                RecipeListComponent.prototype.onSelect = function (item) {
                    this._router.navigate(['RecipeDetail', { recipeIndex: Number(this._recipeService.getRecipeIndex(item)) }]);
                };
                RecipeListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._recipeService.getAllRecipes().then(function (recipes) { return _this.recipes = recipes; });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFHQyw2QkFBb0IsY0FBNkIsRUFBVSxPQUFlO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUUxRSxDQUFDO2dCQUNELHNDQUFRLEdBQVIsVUFBUyxJQUFZO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUcsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUpBLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztvQkFHNUUscURBQXFEO2dCQUN0RCxDQUFDO2dCQUNELHlDQUFXLEdBQVg7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQWxDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxzbUJBWU47cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBb0JGLDBCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCxxREFtQkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktcmVjaXBlLWxpc3QnLCAvLyBsZWZ0IHNpZGUgcGFuZWxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJnLW9yYW5nZSBtYXJnaW5cIiAoY2xpY2spPVwib25BZGRSZWNpcGUoKVwiPkFkZCBSZWNpcGUgSGVyZS9DbGljayBJbWFnZSB0byBVcGRhdGU8L2J1dHRvbj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgcmVjaXBlc1wiIChjbGljayk9XCJvblNlbGVjdChpdGVtKVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBbc3JjXT1cIml0ZW0uaW1hZ2VVcmxcIiBhbHQ9XCJSZWNpcGVcIiB0aXRsZT1cInt7aXRlbS5pbWFnZVVybH19XCIgY2xhc3M9XCJpbWctcm91bmRlZFwiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiOTZcIj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0XCI+e3tpdGVtLm5hbWV9fTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PiAgICBcclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2lwZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByaXZhdGUgcmVjaXBlczogUmVjaXBlW107XHJcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcblx0fVxyXG5cdG9uU2VsZWN0KGl0ZW06IFJlY2lwZSl7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnLCB7cmVjaXBlSW5kZXg6IE51bWJlcih0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldFJlY2lwZUluZGV4KGl0ZW0pKX1dKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKTogYW55IHtcclxuXHJcblx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldEFsbFJlY2lwZXMoKS50aGVuKHJlY2lwZXMgPT4gdGhpcy5yZWNpcGVzID0gcmVjaXBlcyk7XHJcblxyXG5cclxuXHRcdC8vdGhpcy5yZWNpcGVzID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRBbGxSZWNpcGVzKCk7XHJcblx0fVxyXG5cdG9uQWRkUmVjaXBlKCl7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVFZGl0JywgeyBlZGl0TW9kZTogJ2NyZWF0ZScgfV0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
