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
                    return recipes_1.RECIPES;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUE7Z0JBb0JBLENBQUM7Z0JBbkJBLHFDQUFhLEdBQWI7b0JBQ0MsTUFBTSxDQUFDLGlCQUFPLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsaUNBQVMsR0FBVCxVQUFVLEtBQWE7b0JBQ3RCLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNELHNDQUFjLEdBQWQsVUFBZSxJQUFZO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzNELE1BQU0sQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFDRCxvQ0FBWSxHQUFaLFVBQWEsSUFBWTtvQkFDeEIsaUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0Qsb0NBQVksR0FBWixVQUFhLEtBQWE7b0JBQ3pCLGlCQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxvQ0FBWSxHQUFaLFVBQWEsS0FBYSxFQUFFLElBQVk7b0JBQ3ZDLGlCQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixDQUFDO2dCQXBCRjtvQkFBQyxpQkFBVSxFQUFFOztpQ0FBQTtnQkFxQmIsb0JBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHlDQW9CQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xyXG5pbXBvcnQge1JFQ0lQRVN9IGZyb20gJy4uL21vY2svcmVjaXBlcyc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlY2lwZVNlcnZpY2Uge1xyXG5cdGdldEFsbFJlY2lwZXMoKSB7XHJcblx0XHRyZXR1cm4gUkVDSVBFUztcclxuXHR9XHJcblx0Z2V0UmVjaXBlKGluZGV4OiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBSRUNJUEVTW2luZGV4XTtcclxuXHR9XHJcblx0Z2V0UmVjaXBlSW5kZXgoaXRlbTogUmVjaXBlKXtcclxuXHRcdGNvbnNvbGUubG9nKCdSRUNJUEVTLmluZGV4T2YoaXRlbSknLFJFQ0lQRVMuaW5kZXhPZihpdGVtKSk7XHJcblx0XHRyZXR1cm4gUkVDSVBFUy5pbmRleE9mKGl0ZW0pO1xyXG5cdH1cclxuXHRpbnNlcnRSZWNpcGUoaXRlbTogUmVjaXBlKXtcclxuXHRcdFJFQ0lQRVMucHVzaChpdGVtKTtcclxuXHR9XHJcblx0ZGVsZXRlUmVjaXBlKGluZGV4OiBudW1iZXIpe1xyXG5cdFx0UkVDSVBFUy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdH1cclxuXHR1cGRhdGVSZWNpcGUoaW5kZXg6IG51bWJlciwgaXRlbTogUmVjaXBlKXtcclxuXHRcdFJFQ0lQRVNbaW5kZXhdID0gaXRlbTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
