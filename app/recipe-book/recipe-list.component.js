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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFFQyw2QkFBb0IsY0FBNkIsRUFBVSxPQUFlO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUFJLENBQUM7Z0JBQy9FLHNDQUFRLEdBQVIsVUFBUyxJQUFZO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUcsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUFBLGlCQUVDO29CQURBLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBQ0QseUNBQVcsR0FBWDtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBM0JGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLHduQkFZTjtxQkFDSixDQUFDOzt1Q0FBQTtnQkFhRiwwQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQscURBWUMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktcmVjaXBlLWxpc3QnLCAvLyBsZWZ0IHNpZGUgcGFuZWxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYmctb3JhbmdlIG1hcmdpblwiIChjbGljayk9XCJvbkFkZFJlY2lwZSgpXCI+QWRkIFJlY2lwZSBIZXJlL0NsaWNrIEltYWdlIHRvIFVwZGF0ZTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgcmVjaXBlc1wiIChjbGljayk9XCJvblNlbGVjdChpdGVtKVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgW3NyY109XCJpdGVtLmltYWdlVXJsXCIgYWx0PVwiUmVjaXBlXCIgdGl0bGU9XCJ7e2l0ZW0uaW1hZ2VVcmx9fVwiIGNsYXNzPVwiaW1nLXJvdW5kZWRcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjk2XCI+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHRcIj57e2l0ZW0ubmFtZX19PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PiAgICBcclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2lwZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByaXZhdGUgcmVjaXBlczogUmVjaXBlW107XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cdG9uU2VsZWN0KGl0ZW06IFJlY2lwZSl7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnLCB7cmVjaXBlSW5kZXg6IE51bWJlcih0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldFJlY2lwZUluZGV4KGl0ZW0pKX1dKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKTogYW55IHtcclxuXHRcdHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0QWxsUmVjaXBlcygpLnRoZW4oKHJlY2lwZXM6UmVjaXBlW10pID0+IHRoaXMucmVjaXBlcyA9IHJlY2lwZXMpO1xyXG5cdH1cclxuXHRvbkFkZFJlY2lwZSgpe1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRWRpdCcsIHsgZWRpdE1vZGU6ICdjcmVhdGUnIH1dKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
