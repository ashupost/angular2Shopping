System.register(['angular2/core', 'angular2/common', 'angular2/router', './recipe.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, recipe_service_1;
    var RecipeEditComponent;
    function hasNumbers(control) {
        if (!('' + control.value).match('^[0-9]+$')) {
            return { noNumbers: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipeEditComponent = (function () {
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
                    this.myForm = this._formBuilder.group({
                        name: [fbRecipeName, common_1.Validators.required],
                        imageUrl: [fbRecipeImageUrl],
                        content: [fbRecipeContent],
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
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, common_1.FormBuilder, router_1.Router])
                ], RecipeEditComponent);
                return RecipeEditComponent;
            }());
            exports_1("RecipeEditComponent", RecipeEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQWdGQSxvQkFBb0IsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMxQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7WUEzRUQ7Z0JBTUMsNkJBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBVSxZQUF5QixFQUFVLE9BQWU7b0JBQTVILGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBSHhJLGNBQVMsR0FBRyxRQUFRLENBQUM7b0JBRXJCLGVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBRzNCLENBQUM7Z0JBQ0QsdUNBQVMsR0FBVCxVQUFVLFFBQWdCLEVBQUUsVUFBa0I7b0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBRSxDQUFDLElBQUksQ0FDdkQsSUFBSSxxQkFBWSxDQUNmO3dCQUNDLElBQUksRUFBRSxJQUFJLGdCQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNoRCxNQUFNLEVBQUUsSUFBSSxnQkFBTyxDQUFDLFVBQVUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7cUJBQ3JGLENBQ0QsQ0FDRCxDQUFBO2dCQUNGLENBQUM7Z0JBQ0QsMENBQVksR0FBWixVQUFhLEtBQWE7b0JBQ1YsSUFBSSxDQUFD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QUFDO3dCQUN6QyxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDNUIsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUMxQixXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztxQkFDNUQsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBQ0QsaURBQW1CLEdBQW5CLFVBQW9CLGVBQXFDLEVBQUUsZUFBcUM7b0JBQy9GLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNiLENBQUM7b0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkF2RUY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUsNENBQTRDO3FCQUM1RCxDQUFDOzt1Q0FBQTtnQkFzRUYsMEJBQUM7WUFBRCxDQXJFQSxBQXFFQyxJQUFBO1lBckVELHFEQXFFQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgQ29udHJvbEFycmF5LCBDb250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyLCBDYW5EZWFjdGl2YXRlLCBDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xyXG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZWNpcGUtYm9vay9yZWNpcGUtZWRpdC50cGwuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2lwZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENhbkRlYWN0aXZhdGUge1xyXG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xyXG5cdHJlY2lwZTogUmVjaXBlO1xyXG5cdHByaXZhdGUgX2VkaXRNb2RlID0gJ2NyZWF0ZSc7XHJcblx0cHJpdmF0ZSBfcmVjaXBlSW5kZXg6IG51bWJlcjtcclxuXHRwcml2YXRlIF9zdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe1xyXG5cclxuXHR9XHJcblx0b25BZGRJdGVtKGl0ZW1OYW1lOiBzdHJpbmcsIGl0ZW1BbW91bnQ6IHN0cmluZyl7XHJcblx0XHQoPENvbnRyb2xBcnJheT50aGlzLm15Rm9ybS5jb250cm9sc1snaW5ncmVkaWVudHMnXSkucHVzaChcclxuXHRcdFx0bmV3IENvbnRyb2xHcm91cChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBuZXcgQ29udHJvbChpdGVtTmFtZSxcdFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG5cdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbChpdGVtQW1vdW50LFx0VmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLGhhc051bWJlcnNdKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdClcclxuXHR9XHJcblx0b25SZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcclxuXHRcdCg8Q29udHJvbEFycmF5PnRoaXMubXlGb3JtLmNvbnRyb2xzWydpbmdyZWRpZW50cyddKS5yZW1vdmVBdChpbmRleCk7XHJcblx0fVxyXG5cdG9uU3VibWl0KCl7XHJcblx0XHR0aGlzLnJlY2lwZSA9IHRoaXMubXlGb3JtLnZhbHVlO1xyXG5cdFx0aWYgKHRoaXMuX2VkaXRNb2RlID09PSAnZWRpdCcpe1xyXG5cdFx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLnVwZGF0ZVJlY2lwZSh0aGlzLl9yZWNpcGVJbmRleCwgdGhpcy5yZWNpcGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcmVjaXBlU2VydmljZS5pbnNlcnRSZWNpcGUodGhpcy5yZWNpcGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMubmF2aWdhdGVCYWNrKCk7XHJcblx0fVxyXG5cdG9uQ2FuY2VsKCl7XHJcblx0XHR0aGlzLm5hdmlnYXRlQmFjaygpO1xyXG5cdH1cclxuXHRwcml2YXRlIG5hdmlnYXRlQmFjaygpe1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJywgeyByZWNpcGVJbmRleDogdGhpcy5fcmVjaXBlSW5kZXggfV0pO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLl9lZGl0TW9kZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZWRpdE1vZGUnKTtcclxuXHRcdGxldCBmYlJlY2lwZU5hbWUsIGZiUmVjaXBlSW1hZ2VVcmwsIGZiUmVjaXBlQ29udGVudCA9ICcnO1xyXG5cdFx0bGV0IGZiSW5ncmVkaWVudHM6IENvbnRyb2xBcnJheSA9IG5ldyBDb250cm9sQXJyYXkoW10pO1xyXG5cdFx0aWYodGhpcy5fZWRpdE1vZGUgPT09ICdlZGl0Jyl7XHJcblx0XHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaXRlbUluZGV4Jyk7XHJcblx0XHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUodGhpcy5fcmVjaXBlSW5kZXgpO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjaXBlLmluZ3JlZGllbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRmYkluZ3JlZGllbnRzLnB1c2gobmV3IENvbnRyb2xHcm91cCh7XHJcblx0XHRcdFx0XHRcdFx0bmFtZTogbmV3IENvbnRyb2wodGhpcy5yZWNpcGUuaW5ncmVkaWVudHNbaV0ubmFtZSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcblx0XHRcdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbCh0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5hbW91bnQsXHRWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIGhhc051bWJlcnNdKSlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGZiUmVjaXBlTmFtZSA9IHRoaXMucmVjaXBlLm5hbWU7XHJcblx0XHRcdFx0ZmJSZWNpcGVJbWFnZVVybCA9IHRoaXMucmVjaXBlLmltYWdlVXJsO1xyXG5cdFx0XHRcdGZiUmVjaXBlQ29udGVudCA9IHRoaXMucmVjaXBlLmNvbnRlbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMubXlGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBbZmJSZWNpcGVOYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuXHRcdFx0aW1hZ2VVcmw6IFtmYlJlY2lwZUltYWdlVXJsXSxcclxuXHRcdFx0Y29udGVudDogW2ZiUmVjaXBlQ29udGVudF0sXHJcblx0XHRcdGluZ3JlZGllbnRzOiB0aGlzLl9mb3JtQnVpbGRlci5hcnJheShmYkluZ3JlZGllbnRzLmNvbnRyb2xzKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJvdXRlckNhbkRlYWN0aXZhdGUobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldkluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbil7XHJcblx0XHRpZih0aGlzLl9zdWJtaXR0ZWQgfHwgdGhpcy5teUZvcm0ucHJpc3RpbmUpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY29uZmlybShcIlN1cmU/XCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFzTnVtYmVycyhjb250cm9sOiBDb250cm9sKTp7W3M6IHN0cmluZ106Ym9vbGVhbn17XHJcblx0aWYgKCEoJycrY29udHJvbC52YWx1ZSkubWF0Y2goJ15bMC05XSskJykpe1xyXG5cdFx0cmV0dXJuIHsgbm9OdW1iZXJzOiB0cnVlIH07XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
