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
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, common_1.FormBuilder, router_1.Router])
                ], RecipeEditComponent);
                return RecipeEditComponent;
            }());
            exports_1("RecipeEditComponent", RecipeEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQWlGQSxvQkFBb0IsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMxQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7WUE1RUQ7Z0JBTUMsNkJBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBVSxZQUF5QixFQUFVLE9BQWU7b0JBQTVILGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBSHhJLGNBQVMsR0FBRyxRQUFRLENBQUM7b0JBRXJCLGVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBRzNCLENBQUM7Z0JBQ0QsdUNBQVMsR0FBVCxVQUFVLFFBQWdCLEVBQUUsVUFBa0I7b0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBRSxDQUFDLElBQUksQ0FDdkQsSUFBSSxxQkFBWSxDQUNmO3dCQUNDLElBQUksRUFBRSxJQUFJLGdCQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNoRCxNQUFNLEVBQUUsSUFBSSxnQkFBTyxDQUFDLFVBQVUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7cUJBQ3JGLENBQ0QsQ0FDRCxDQUFBO2dCQUNGLENBQUM7Z0JBQ0QsMENBQVksR0FBWixVQUFhLEtBQWE7b0JBQ1YsSUFBSSxDQUFD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QVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3pDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQy9DLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO3FCQUM1RCxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFDRCxpREFBbUIsR0FBbkIsVUFBb0IsZUFBcUMsRUFBRSxlQUFxQztvQkFDL0YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2IsQ0FBQztvQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQXhFRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSw0Q0FBNEM7cUJBQzVELENBQUM7O3VDQUFBO2dCQXVFRiwwQkFBQztZQUFELENBdEVBLEFBc0VDLElBQUE7WUF0RUQscURBc0VDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sQXJyYXksIENvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXIsIENhbkRlYWN0aXZhdGUsIENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlY2lwZS1ib29rL3JlY2lwZS1lZGl0LnRwbC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ2FuRGVhY3RpdmF0ZSB7XHJcblx0bXlGb3JtOiBDb250cm9sR3JvdXA7XHJcblx0cmVjaXBlOiBSZWNpcGU7XHJcblx0cHJpdmF0ZSBfZWRpdE1vZGUgPSAnY3JlYXRlJztcclxuXHRwcml2YXRlIF9yZWNpcGVJbmRleDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3N1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7XHJcblxyXG5cdH1cclxuXHRvbkFkZEl0ZW0oaXRlbU5hbWU6IHN0cmluZywgaXRlbUFtb3VudDogc3RyaW5nKXtcclxuXHRcdCg8Q29udHJvbEFycmF5PnRoaXMubXlGb3JtLmNvbnRyb2xzWydpbmdyZWRpZW50cyddKS5wdXNoKFxyXG5cdFx0XHRuZXcgQ29udHJvbEdyb3VwKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IG5ldyBDb250cm9sKGl0ZW1OYW1lLFx0VmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcblx0XHRcdFx0XHRhbW91bnQ6IG5ldyBDb250cm9sKGl0ZW1BbW91bnQsXHRWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsaGFzTnVtYmVyc10pKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KVxyXG5cdH1cclxuXHRvblJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xyXG5cdFx0KDxDb250cm9sQXJyYXk+dGhpcy5teUZvcm0uY29udHJvbHNbJ2luZ3JlZGllbnRzJ10pLnJlbW92ZUF0KGluZGV4KTtcclxuXHR9XHJcblx0b25TdWJtaXQoKXtcclxuXHRcdHRoaXMucmVjaXBlID0gdGhpcy5teUZvcm0udmFsdWU7XHJcblx0XHRpZiAodGhpcy5fZWRpdE1vZGUgPT09ICdlZGl0Jyl7XHJcblx0XHRcdHRoaXMuX3JlY2lwZVNlcnZpY2UudXBkYXRlUmVjaXBlKHRoaXMuX3JlY2lwZUluZGV4LCB0aGlzLnJlY2lwZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLmluc2VydFJlY2lwZSh0aGlzLnJlY2lwZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zdWJtaXR0ZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5uYXZpZ2F0ZUJhY2soKTtcclxuXHR9XHJcblx0b25DYW5jZWwoKXtcclxuXHRcdHRoaXMubmF2aWdhdGVCYWNrKCk7XHJcblx0fVxyXG5cdHByaXZhdGUgbmF2aWdhdGVCYWNrKCl7XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnLCB7IHJlY2lwZUluZGV4OiB0aGlzLl9yZWNpcGVJbmRleCB9XSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCk6YW55IHtcclxuXHRcdHRoaXMuX2VkaXRNb2RlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdlZGl0TW9kZScpO1xyXG5cdFx0bGV0IGZiUmVjaXBlTmFtZSwgZmJSZWNpcGVJbWFnZVVybCwgZmJSZWNpcGVDb250ZW50ID0gJyc7XHJcblx0XHRsZXQgZmJJbmdyZWRpZW50czogQ29udHJvbEFycmF5ID0gbmV3IENvbnRyb2xBcnJheShbXSk7XHJcblx0XHRpZih0aGlzLl9lZGl0TW9kZSA9PT0gJ2VkaXQnKXtcclxuXHRcdFx0dGhpcy5fcmVjaXBlSW5kZXggPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpdGVtSW5kZXgnKTtcclxuXHRcdFx0dGhpcy5yZWNpcGUgPSB0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldFJlY2lwZSh0aGlzLl9yZWNpcGVJbmRleCk7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGZiSW5ncmVkaWVudHMucHVzaChuZXcgQ29udHJvbEdyb3VwKHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBuZXcgQ29udHJvbCh0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5uYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuXHRcdFx0XHRcdFx0XHRhbW91bnQ6IG5ldyBDb250cm9sKHRoaXMucmVjaXBlLmluZ3JlZGllbnRzW2ldLmFtb3VudCxcdFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgaGFzTnVtYmVyc10pKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0ZmJSZWNpcGVOYW1lID0gdGhpcy5yZWNpcGUubmFtZTtcclxuXHRcdFx0XHRmYlJlY2lwZUltYWdlVXJsID0gdGhpcy5yZWNpcGUuaW1hZ2VVcmw7XHJcblx0XHRcdFx0ZmJSZWNpcGVDb250ZW50ID0gdGhpcy5yZWNpcGUuY29udGVudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gaWYgZWRpdE1vZGUgPSBlZGl0IHwgY3JlYXRlXHJcblx0XHR0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdFx0bmFtZTogW2ZiUmVjaXBlTmFtZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdGltYWdlVXJsOiBbZmJSZWNpcGVJbWFnZVVybF0sIC8vIG5vdCBtYW5kYXRvcnlcclxuXHRcdFx0Y29udGVudDogW2ZiUmVjaXBlQ29udGVudCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdGluZ3JlZGllbnRzOiB0aGlzLl9mb3JtQnVpbGRlci5hcnJheShmYkluZ3JlZGllbnRzLmNvbnRyb2xzKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJvdXRlckNhbkRlYWN0aXZhdGUobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbiwgcHJldkluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbil7XHJcblx0XHRpZih0aGlzLl9zdWJtaXR0ZWQgfHwgdGhpcy5teUZvcm0ucHJpc3RpbmUpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY29uZmlybShcIlN1cmU/XCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFzTnVtYmVycyhjb250cm9sOiBDb250cm9sKTp7W3M6IHN0cmluZ106Ym9vbGVhbn17XHJcblx0aWYgKCEoJycrY29udHJvbC52YWx1ZSkubWF0Y2goJ15bMC05XSskJykpe1xyXG5cdFx0cmV0dXJuIHsgbm9OdW1iZXJzOiB0cnVlIH07XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
