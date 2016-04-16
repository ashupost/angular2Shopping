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
                        templateUrl: 'templates/recipe-book/recipe-detail.tpl.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBSUMsK0JBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBVSxPQUFlLEVBQVUsb0JBQXlDO29CQUE1SSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBQ2hLLENBQUM7Z0JBQ0Qsc0NBQU0sR0FBTjtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRTs0QkFDcEMsUUFBUSxFQUFFLE1BQU07NEJBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWTt5QkFDNUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQztnQkFDRCx3Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBRXpDLENBQUM7Z0JBQ0QsbURBQW1CLEdBQW5CO29CQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFDRCx3Q0FBUSxHQUFSO29CQUNDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEtBQUssSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztnQkFFN0YsQ0FBQztnQkE3QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUsOENBQThDO3dCQUMzRCxTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztxQkFDbkMsQ0FBQzs7eUNBQUE7Z0JBMkJGLDRCQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCx5REEwQkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZWNpcGUtYm9vay9yZWNpcGUtZGV0YWlsLnRwbC5odG1sJywvL3JpZ2h0IHNpZGUgcGFuZWwgLCBubyBlZGl0XHJcbiAgICBwcm92aWRlcnM6IFtTaG9wcGluZ0xpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cdHJlY2lwZTogUmVjaXBlO1xyXG5cdHByaXZhdGUgX3JlY2lwZUluZGV4OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcdHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsXHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSkge1xyXG5cdH1cclxuXHRvbkVkaXQoKXtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZUVkaXQnLCB7XHJcblx0XHRcdGVkaXRNb2RlOiAnZWRpdCcsXHJcblx0XHRcdGl0ZW1JbmRleDogdGhpcy5fcmVjaXBlSW5kZXhcclxuXHRcdH1dKVxyXG5cdH1cclxuXHRvbkRlbGV0ZSgpIHtcclxuXHRcdHRoaXMuX3JlY2lwZVNlcnZpY2UuZGVsZXRlUmVjaXBlKCt0aGlzLl9yZWNpcGVJbmRleCk7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnXSk7XHJcblxyXG5cdH1cclxuXHRvbkFkZFRvU2hvcHBpbmdMaXN0KCkge1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRJdGVtcyh0aGlzLnJlY2lwZS5pbmdyZWRpZW50cyk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCk6YW55IHtcclxuXHRcdGxldCBpdGVtSW5kZXggPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3JlY2lwZUluZGV4Jyk7XHJcblx0XHR0aGlzLl9yZWNpcGVJbmRleCA9IGl0ZW1JbmRleDtcclxuXHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUoaXRlbUluZGV4ICE9PSBudWxsID8gK2l0ZW1JbmRleCA6IG51bGwpIHx8IG51bGw7XHJcblxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
