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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var recipe_service_1 = require('./recipe.service');
var RecipeEditComponent = (function () {
    function RecipeEditComponent(_routeParams, _recipeService, _formBuilder, _router) {
        this._routeParams = _routeParams;
        this._recipeService = _recipeService;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._editMode = 'create';
        this._submitted = false;
    }
    RecipeEditComponent.prototype.onAddItem = function (itemName, itemAmount) {
        this.myForm.controls['ingredients'].push(new common_1.ControlGroup({
            name: new common_1.Control(itemName, common_1.Validators.required),
            amount: new common_1.Control(itemAmount, common_1.Validators.compose([common_1.Validators.required, hasNumbers]))
        }));
    };
    RecipeEditComponent.prototype.onRemoveItem = function (index) {
        this.myForm.controls['ingredients'].removeAt(index);
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        this.recipe = this.myForm.value;
        if (this._editMode === 'edit') {
            this._recipeService.updateRecipe(this._recipeIndex, this.recipe);
        }
        else {
            this._recipeService.insertRecipe(this.recipe);
        }
        this._submitted = true;
        this.navigateBack();
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    RecipeEditComponent.prototype.navigateBack = function () {
        this._router.navigate(['RecipeDetail', { recipeIndex: this._recipeIndex }]);
    };
    RecipeEditComponent.prototype.ngOnInit = function () {
        this._editMode = this._routeParams.get('editMode');
        var fbRecipeName, fbRecipeImageUrl, fbRecipeContent = '';
        var fbIngredients = new common_1.ControlArray([]);
        if (this._editMode === 'edit') {
            this._recipeIndex = +this._routeParams.get('itemIndex');
            this.recipe = this._recipeService.getRecipe(this._recipeIndex);
            for (var i = 0; i < this.recipe.ingredients.length; i++) {
                fbIngredients.push(new common_1.ControlGroup({
                    name: new common_1.Control(this.recipe.ingredients[i].name, common_1.Validators.required),
                    amount: new common_1.Control(this.recipe.ingredients[i].amount, common_1.Validators.compose([common_1.Validators.required, hasNumbers]))
                }));
                fbRecipeName = this.recipe.name;
                fbRecipeImageUrl = this.recipe.imageUrl;
                fbRecipeContent = this.recipe.content;
            }
        }
        // if editMode = edit | create
        this.myForm = this._formBuilder.group({
            name: [fbRecipeName, common_1.Validators.required],
            imageUrl: [fbRecipeImageUrl],
            content: [fbRecipeContent, common_1.Validators.required],
            ingredients: this._formBuilder.array(fbIngredients.controls)
        });
    };
    RecipeEditComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
        if (this._submitted || this.myForm.pristine) {
            return true;
        }
        return confirm("Sure?");
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/recipe-book/recipe-edit.tpl.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object, recipe_service_1.RecipeService, common_1.FormBuilder, router_1.Router])
    ], RecipeEditComponent);
    return RecipeEditComponent;
    var _a;
}());
exports.RecipeEditComponent = RecipeEditComponent;
function hasNumbers(control) {
    if (!('' + control.value).match('^[0-9]+$')) {
        return { noNumbers: true };
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUEyRSxpQkFBaUIsQ0FBQyxDQUFBO0FBQzdGLHVCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpGLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBSy9DO0lBTUMsNkJBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBVSxZQUF5QixFQUFVLE9BQWU7UUFBNUgsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUh4SSxjQUFTLEdBQUcsUUFBUSxDQUFDO1FBRXJCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFHM0IsQ0FBQztJQUNELHVDQUFTLEdBQVQsVUFBVSxRQUFnQixFQUFFLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBRSxDQUFDLElBQUksQ0FDdkQsSUFBSSxxQkFBWSxDQUNmO1lBQ0MsSUFBSSxFQUFFLElBQUksZ0JBQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEQsTUFBTSxFQUFFLElBQUksZ0JBQU8sQ0FBQyxVQUFVLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3JGLENBQ0QsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUNELDBDQUFZLEdBQVosVUFBYSxLQUFhO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxzQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1B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QUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7U0FDNUQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELGlEQUFtQixHQUFuQixVQUFvQixlQUFxQyxFQUFFLGVBQXFDO1FBQy9GLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDYixDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBeEVGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFdBQVcsRUFBRSw0Q0FBNEM7U0FDNUQsQ0FBQzs7MkJBQUE7SUF1RUYsMEJBQUM7O0FBQUQsQ0F0RUEsQUFzRUMsSUFBQTtBQXRFWSwyQkFBbUIsc0JBc0UvQixDQUFBO0FBRUQsb0JBQW9CLE9BQWdCO0lBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDMUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7QUFDRixDQUFDIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgQ29udHJvbEFycmF5LCBDb250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyLCBDYW5EZWFjdGl2YXRlLCBDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xyXG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZWNpcGUtYm9vay9yZWNpcGUtZWRpdC50cGwuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2lwZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENhbkRlYWN0aXZhdGUge1xyXG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xyXG5cdHJlY2lwZTogUmVjaXBlO1xyXG5cdHByaXZhdGUgX2VkaXRNb2RlID0gJ2NyZWF0ZSc7XHJcblx0cHJpdmF0ZSBfcmVjaXBlSW5kZXg6IG51bWJlcjtcclxuXHRwcml2YXRlIF9zdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe1xyXG5cclxuXHR9XHJcblx0b25BZGRJdGVtKGl0ZW1OYW1lOiBzdHJpbmcsIGl0ZW1BbW91bnQ6IHN0cmluZyl7XHJcblx0XHQoPENvbnRyb2xBcnJheT50aGlzLm15Rm9ybS5jb250cm9sc1snaW5ncmVkaWVudHMnXSkucHVzaChcclxuXHRcdFx0bmV3IENvbnRyb2xHcm91cChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBuZXcgQ29udHJvbChpdGVtTmFtZSxcdFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG5cdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbChpdGVtQW1vdW50LFx0VmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLGhhc051bWJlcnNdKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdClcclxuXHR9XHJcblx0b25SZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcclxuXHRcdCg8Q29udHJvbEFycmF5PnRoaXMubXlGb3JtLmNvbnRyb2xzWydpbmdyZWRpZW50cyddKS5yZW1vdmVBdChpbmRleCk7XHJcblx0fVxyXG5cdG9uU3VibWl0KCl7XHJcblx0XHR0aGlzLnJlY2lwZSA9IHRoaXMubXlGb3JtLnZhbHVlO1xyXG5cdFx0aWYgKHRoaXMuX2VkaXRNb2RlID09PSAnZWRpdCcpe1xyXG5cdFx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLnVwZGF0ZVJlY2lwZSh0aGlzLl9yZWNpcGVJbmRleCwgdGhpcy5yZWNpcGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcmVjaXBlU2VydmljZS5pbnNlcnRSZWNpcGUodGhpcy5yZWNpcGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMubmF2aWdhdGVCYWNrKCk7XHJcblx0fVxyXG5cdG9uQ2FuY2VsKCl7XHJcblx0XHR0aGlzLm5hdmlnYXRlQmFjaygpO1xyXG5cdH1cclxuXHRwcml2YXRlIG5hdmlnYXRlQmFjaygpe1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJywgeyByZWNpcGVJbmRleDogdGhpcy5fcmVjaXBlSW5kZXggfV0pO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLl9lZGl0TW9kZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZWRpdE1vZGUnKTtcclxuXHRcdGxldCBmYlJlY2lwZU5hbWUsIGZiUmVjaXBlSW1hZ2VVcmwsIGZiUmVjaXBlQ29udGVudCA9ICcnO1xyXG5cdFx0bGV0IGZiSW5ncmVkaWVudHM6IENvbnRyb2xBcnJheSA9IG5ldyBDb250cm9sQXJyYXkoW10pO1xyXG5cdFx0aWYodGhpcy5fZWRpdE1vZGUgPT09ICdlZGl0Jyl7XHJcblx0XHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaXRlbUluZGV4Jyk7XHJcblx0XHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUodGhpcy5fcmVjaXBlSW5kZXgpO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjaXBlLmluZ3JlZGllbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRmYkluZ3JlZGllbnRzLnB1c2gobmV3IENvbnRyb2xHcm91cCh7XHJcblx0XHRcdFx0XHRcdFx0bmFtZTogbmV3IENvbnRyb2wodGhpcy5yZWNpcGUuaW5ncmVkaWVudHNbaV0ubmFtZSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcblx0XHRcdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbCh0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5hbW91bnQsXHRWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIGhhc051bWJlcnNdKSlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGZiUmVjaXBlTmFtZSA9IHRoaXMucmVjaXBlLm5hbWU7XHJcblx0XHRcdFx0ZmJSZWNpcGVJbWFnZVVybCA9IHRoaXMucmVjaXBlLmltYWdlVXJsO1xyXG5cdFx0XHRcdGZiUmVjaXBlQ29udGVudCA9IHRoaXMucmVjaXBlLmNvbnRlbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIGlmIGVkaXRNb2RlID0gZWRpdCB8IGNyZWF0ZVxyXG5cdFx0dGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcblx0XHRcdG5hbWU6IFtmYlJlY2lwZU5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRpbWFnZVVybDogW2ZiUmVjaXBlSW1hZ2VVcmxdLCAvLyBub3QgbWFuZGF0b3J5XHJcblx0XHRcdGNvbnRlbnQ6IFtmYlJlY2lwZUNvbnRlbnQsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRpbmdyZWRpZW50czogdGhpcy5fZm9ybUJ1aWxkZXIuYXJyYXkoZmJJbmdyZWRpZW50cy5jb250cm9scylcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyb3V0ZXJDYW5EZWFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXZJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pe1xyXG5cdFx0aWYodGhpcy5fc3VibWl0dGVkIHx8IHRoaXMubXlGb3JtLnByaXN0aW5lKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNvbmZpcm0oXCJTdXJlP1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc051bWJlcnMoY29udHJvbDogQ29udHJvbCk6e1tzOiBzdHJpbmddOmJvb2xlYW59e1xyXG5cdGlmICghKCcnK2NvbnRyb2wudmFsdWUpLm1hdGNoKCdeWzAtOV0rJCcpKXtcclxuXHRcdHJldHVybiB7IG5vTnVtYmVyczogdHJ1ZSB9O1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
