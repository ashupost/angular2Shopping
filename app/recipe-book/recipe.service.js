"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var recipes_1 = require('../mock/recipes');
var RecipeService = (function () {
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
exports.RecipeService = RecipeService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsd0JBQXNCLGlCQUFpQixDQUFDLENBQUE7QUFFeEM7SUFBQTtJQW9CQSxDQUFDO0lBbkJBLHFDQUFhLEdBQWI7UUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELGlDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3RCLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxzQ0FBYyxHQUFkLFVBQWUsSUFBWTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvQ0FBWSxHQUFaLFVBQWEsSUFBWTtRQUN4QixpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0Qsb0NBQVksR0FBWixVQUFhLEtBQWE7UUFDekIsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvQ0FBWSxHQUFaLFVBQWEsS0FBYSxFQUFFLElBQVk7UUFDdkMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQXBCRjtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBcUJiLG9CQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxxQkFBYSxnQkFvQnpCLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7UkVDSVBFU30gZnJvbSAnLi4vbW9jay9yZWNpcGVzJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlU2VydmljZSB7XHJcblx0Z2V0QWxsUmVjaXBlcygpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoUkVDSVBFUyk7XHJcblx0fVxyXG5cdGdldFJlY2lwZShpbmRleDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gUkVDSVBFU1tpbmRleF07XHJcblx0fVxyXG5cdGdldFJlY2lwZUluZGV4KGl0ZW06IFJlY2lwZSl7XHJcblx0XHRjb25zb2xlLmxvZygnUkVDSVBFUy5pbmRleE9mKGl0ZW0pJyxSRUNJUEVTLmluZGV4T2YoaXRlbSkpO1xyXG5cdFx0cmV0dXJuIFJFQ0lQRVMuaW5kZXhPZihpdGVtKTtcclxuXHR9XHJcblx0aW5zZXJ0UmVjaXBlKGl0ZW06IFJlY2lwZSl7XHJcblx0XHRSRUNJUEVTLnB1c2goaXRlbSk7XHJcblx0fVxyXG5cdGRlbGV0ZVJlY2lwZShpbmRleDogbnVtYmVyKXtcclxuXHRcdFJFQ0lQRVMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHR9XHJcblx0dXBkYXRlUmVjaXBlKGluZGV4OiBudW1iZXIsIGl0ZW06IFJlY2lwZSl7XHJcblx0XHRSRUNJUEVTW2luZGV4XSA9IGl0ZW07XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
