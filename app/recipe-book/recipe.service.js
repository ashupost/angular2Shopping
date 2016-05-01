System.register(['angular2/core', '../mock/recipes'], function(exports_1, context_1) {
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
    var core_1, recipes_1;
    var RecipeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipes_1_1) {
                recipes_1 = recipes_1_1;
            }],
        execute: function() {
            RecipeService = (function () {
                function RecipeService() {
                }
                RecipeService.prototype.getAllRecipes = function () {
                    return Promise.resolve(recipes_1.RECIPES);
                };
                RecipeService.prototype.getRecipe = function (index) {
                    return recipes_1.RECIPES[index];
                };
                RecipeService.prototype.getRecipeIndex = function (item) {
                    console.log('RECIPES.indexOf(item)', recipes_1.RECIPES.indexOf(item));
                    return recipes_1.RECIPES.indexOf(item);
                };
                RecipeService.prototype.insertRecipe = function (item) {
                    recipes_1.RECIPES.push(item);
                };
                RecipeService.prototype.deleteRecipe = function (index) {
                    recipes_1.RECIPES.splice(index, 1);
                };
                RecipeService.prototype.updateRecipe = function (index, item) {
                    recipes_1.RECIPES[index] = item;
                };
                RecipeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RecipeService);
                return RecipeService;
            }());
            exports_1("RecipeService", RecipeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUE7Z0JBb0JBLENBQUM7Z0JBbkJBLHFDQUFhLEdBQWI7b0JBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQU8sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUNELGlDQUFTLEdBQVQsVUFBVSxLQUFhO29CQUN0QixNQUFNLENBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRCxzQ0FBYyxHQUFkLFVBQWUsSUFBWTtvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0Qsb0NBQVksR0FBWixVQUFhLElBQVk7b0JBQ3hCLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUNELG9DQUFZLEdBQVosVUFBYSxLQUFhO29CQUN6QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0Qsb0NBQVksR0FBWixVQUFhLEtBQWEsRUFBRSxJQUFZO29CQUN2QyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQztnQkFwQkY7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBcUJiLG9CQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCx5Q0FvQkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcclxuaW1wb3J0IHtSRUNJUEVTfSBmcm9tICcuLi9tb2NrL3JlY2lwZXMnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGVTZXJ2aWNlIHtcclxuXHRnZXRBbGxSZWNpcGVzKCkge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShSRUNJUEVTKTtcclxuXHR9XHJcblx0Z2V0UmVjaXBlKGluZGV4OiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBSRUNJUEVTW2luZGV4XTtcclxuXHR9XHJcblx0Z2V0UmVjaXBlSW5kZXgoaXRlbTogUmVjaXBlKXtcclxuXHRcdGNvbnNvbGUubG9nKCdSRUNJUEVTLmluZGV4T2YoaXRlbSknLFJFQ0lQRVMuaW5kZXhPZihpdGVtKSk7XHJcblx0XHRyZXR1cm4gUkVDSVBFUy5pbmRleE9mKGl0ZW0pO1xyXG5cdH1cclxuXHRpbnNlcnRSZWNpcGUoaXRlbTogUmVjaXBlKXtcclxuXHRcdFJFQ0lQRVMucHVzaChpdGVtKTtcclxuXHR9XHJcblx0ZGVsZXRlUmVjaXBlKGluZGV4OiBudW1iZXIpe1xyXG5cdFx0UkVDSVBFUy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdH1cclxuXHR1cGRhdGVSZWNpcGUoaW5kZXg6IG51bWJlciwgaXRlbTogUmVjaXBlKXtcclxuXHRcdFJFQ0lQRVNbaW5kZXhdID0gaXRlbTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
