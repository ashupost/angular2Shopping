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
                };
                RecipeListComponent.prototype.onAddRecipe = function () {
                    this._router.navigate(['RecipeEdit', { editMode: 'create' }]);
                };
                RecipeListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-list',
                        template: "\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t<button class=\"btn bg-orange margin\" (click)=\"onAddRecipe()\">Add Recipe Here/Click Image to Update</button>\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li *ngFor=\"#item of recipes\" (click)=\"onSelect(item)\" class=\"list-group-item\">\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<img [src]=\"item.imageUrl\" alt=\"Recipe\" title=\"{{item.imageUrl}}\" class=\"img-rounded\" width=\"120\" height=\"96\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text\">{{item.name}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>    \n    "
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.Router])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFFQyw2QkFBb0IsY0FBNkIsRUFBVSxPQUFlO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUFJLENBQUM7Z0JBQy9FLHNDQUFRLEdBQVIsVUFBUyxJQUFZO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUcsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUFBLGlCQUVDO29CQURBLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkFDRCx5Q0FBVyxHQUFYO29CQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkEzQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsd25CQVlOO3FCQUNKLENBQUM7O3VDQUFBO2dCQWFGLDBCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxxREFZQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1yZWNpcGUtbGlzdCcsIC8vIGxlZnQgc2lkZSBwYW5lbFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBiZy1vcmFuZ2UgbWFyZ2luXCIgKGNsaWNrKT1cIm9uQWRkUmVjaXBlKClcIj5BZGQgUmVjaXBlIEhlcmUvQ2xpY2sgSW1hZ2UgdG8gVXBkYXRlPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsaSAqbmdGb3I9XCIjaXRlbSBvZiByZWNpcGVzXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBbc3JjXT1cIml0ZW0uaW1hZ2VVcmxcIiBhbHQ9XCJSZWNpcGVcIiB0aXRsZT1cInt7aXRlbS5pbWFnZVVybH19XCIgY2xhc3M9XCJpbWctcm91bmRlZFwiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiOTZcIj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dFwiPnt7aXRlbS5uYW1lfX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+ICAgIFxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHJpdmF0ZSByZWNpcGVzOiBSZWNpcGVbXTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XHJcblx0b25TZWxlY3QoaXRlbTogUmVjaXBlKXtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZURldGFpbCcsIHtyZWNpcGVJbmRleDogTnVtYmVyKHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlSW5kZXgoaXRlbSkpfV0pO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOiBhbnkge1xyXG5cdFx0dGhpcy5fcmVjaXBlU2VydmljZS5nZXRBbGxSZWNpcGVzKCkudGhlbihyZWNpcGVzID0+IHRoaXMucmVjaXBlcyA9IHJlY2lwZXMpO1xyXG5cdH1cclxuXHRvbkFkZFJlY2lwZSgpe1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRWRpdCcsIHsgZWRpdE1vZGU6ICdjcmVhdGUnIH1dKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
