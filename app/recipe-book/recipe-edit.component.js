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
        if (!('' + control.value).match('\\d+')) {
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
                        amount: new common_1.Control(itemAmount, common_1.Validators.compose([
                            common_1.Validators.required,
                            hasNumbers
                        ]))
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
                    var fbRecipeName = '';
                    var fbRecipeImageUrl = '';
                    var fbRecipeContent = '';
                    var fbIngredients = new common_1.ControlArray([]);
                    if (this._editMode === 'edit') {
                        this._recipeIndex = +this._routeParams.get('itemIndex');
                        this.recipe = this._recipeService.getRecipe(this._recipeIndex);
                        for (var i = 0; i < this.recipe.ingredients.length; i++) {
                            fbIngredients.push(new common_1.ControlGroup({
                                name: new common_1.Control(this.recipe.ingredients[i].name, common_1.Validators.required),
                                amount: new common_1.Control(this.recipe.ingredients[i].amount, common_1.Validators.compose([
                                    common_1.Validators.required,
                                    hasNumbers
                                ]))
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQXlHQSxvQkFBb0IsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN0QyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7WUFwR0Q7Z0JBTUMsNkJBQ1MsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsT0FBZTtvQkFIZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQVBoQixjQUFTLEdBQUcsUUFBUSxDQUFDO29CQUVyQixlQUFVLEdBQUcsS0FBSyxDQUFDO2dCQU14QixDQUFDO2dCQUNKLHVDQUFTLEdBQVQsVUFBVSxRQUFnQixFQUFFLFVBQWtCO29CQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxJQUFJLENBQ3ZELElBQUkscUJBQVksQ0FDZjt3QkFDQyxJQUFJLEVBQUUsSUFBSSxnQkFBTyxDQUNoQixRQUFRLEVBQ1IsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JCLE1BQU0sRUFBRSxJQUFJLGdCQUFPLENBQ2xCLFVBQVUsRUFDVixtQkFBVSxDQUFDLE9BQU8sQ0FBQzs0QkFDbEIsbUJBQVUsQ0FBQyxRQUFROzRCQUNuQixVQUFVO3lCQUNWLENBQUMsQ0FBQztxQkFDSixDQUNELENBQ0QsQ0FBQTtnQkFDRixDQUFDO2dCQUNELDBDQUFZLEdBQVosVUFBYSxLQUFhO29CQUVWLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xFLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvQyxDQUFDO29CQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ08sMENBQVksR0FBcEI7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ25ELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7b0JBQzFCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxhQUFhLEdBQWlCLElBQUkscUJBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFdkQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQSxDQUFDO3dCQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUMvRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDOzRCQUN4RCxhQUFhLENBQUMsSUFBSSxDQUNqQixJQUFJLHFCQUFZLENBQ2Y7Z0NBQ0MsSUFBSSxFQUFFLElBQUksZ0JBQU8sQ0FDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUMvQixtQkFBVSxDQUFDLFFBQVEsQ0FBQztnQ0FDckIsTUFBTSxFQUFFLElBQUksZ0JBQU8sQ0FDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUNqQyxtQkFBVSxDQUFDLE9BQU8sQ0FBQztvQ0FDbEIsbUJBQVUsQ0FBQyxRQUFRO29DQUNuQixVQUFVO2lDQUVWLENBQUMsQ0FBQzs2QkFDSixDQUNELENBQ0QsQ0FBQzs0QkFDRixZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2hDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOzRCQUN4QyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0YsQ0FBQztvQkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNyQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3pDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO3FCQUM1RCxDQUFDLENBQUE7Z0JBQ0gsQ0FBQztnQkFDRCxpREFBbUIsR0FBbkIsVUFBb0IsZUFBcUMsRUFBRSxlQUFxQztvQkFDL0YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2IsQ0FBQztvQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQWhHRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSw0Q0FBNEM7cUJBQzVELENBQUM7O3VDQUFBO2dCQStGRiwwQkFBQztZQUFELENBOUZBLEFBOEZDLElBQUE7WUE5RkQscURBOEZDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sQXJyYXksIENvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXIsIENhbkRlYWN0aXZhdGUsIENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSAnLi4vc2hhcmVkL3JlY2lwZSc7XHJcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlY2lwZS1ib29rL3JlY2lwZS1lZGl0LnRwbC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ2FuRGVhY3RpdmF0ZSB7XHJcblx0bXlGb3JtOiBDb250cm9sR3JvdXA7XHJcblx0cmVjaXBlOiBSZWNpcGU7XHJcblx0cHJpdmF0ZSBfZWRpdE1vZGUgPSAnY3JlYXRlJztcclxuXHRwcml2YXRlIF9yZWNpcGVJbmRleDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3N1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxyXG5cdFx0cHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcblx0KSB7fVxyXG5cdG9uQWRkSXRlbShpdGVtTmFtZTogc3RyaW5nLCBpdGVtQW1vdW50OiBzdHJpbmcpe1xyXG5cdFx0KDxDb250cm9sQXJyYXk+dGhpcy5teUZvcm0uY29udHJvbHNbJ2luZ3JlZGllbnRzJ10pLnB1c2goXHJcblx0XHRcdG5ldyBDb250cm9sR3JvdXAoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogbmV3IENvbnRyb2woXHJcblx0XHRcdFx0XHRcdGl0ZW1OYW1lLFxyXG5cdFx0XHRcdFx0XHRWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuXHRcdFx0XHRcdGFtb3VudDogbmV3IENvbnRyb2woXHJcblx0XHRcdFx0XHRcdGl0ZW1BbW91bnQsXHJcblx0XHRcdFx0XHRcdFZhbGlkYXRvcnMuY29tcG9zZShbXHJcblx0XHRcdFx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuXHRcdFx0XHRcdFx0XHRoYXNOdW1iZXJzXHJcblx0XHRcdFx0XHRcdF0pKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KVxyXG5cdH1cclxuXHRvblJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xyXG5cclxuXHRcdCg8Q29udHJvbEFycmF5PnRoaXMubXlGb3JtLmNvbnRyb2xzWydpbmdyZWRpZW50cyddKS5yZW1vdmVBdChpbmRleCk7XHJcblx0fVxyXG5cdG9uU3VibWl0KCl7XHJcblx0XHR0aGlzLnJlY2lwZSA9IHRoaXMubXlGb3JtLnZhbHVlO1xyXG5cdFx0aWYgKHRoaXMuX2VkaXRNb2RlID09PSAnZWRpdCcpe1xyXG5cdFx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLnVwZGF0ZVJlY2lwZSh0aGlzLl9yZWNpcGVJbmRleCwgdGhpcy5yZWNpcGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcmVjaXBlU2VydmljZS5pbnNlcnRSZWNpcGUodGhpcy5yZWNpcGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMubmF2aWdhdGVCYWNrKCk7XHJcblx0fVxyXG5cdG9uQ2FuY2VsKCl7XHJcblx0XHR0aGlzLm5hdmlnYXRlQmFjaygpO1xyXG5cdH1cclxuXHRwcml2YXRlIG5hdmlnYXRlQmFjaygpe1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJywgeyByZWNpcGVJbmRleDogdGhpcy5fcmVjaXBlSW5kZXggfV0pO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLl9lZGl0TW9kZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnZWRpdE1vZGUnKTtcclxuXHRcdGxldCBmYlJlY2lwZU5hbWUgPSAnJztcclxuXHRcdGxldCBmYlJlY2lwZUltYWdlVXJsID0gJyc7XHJcblx0XHRsZXQgZmJSZWNpcGVDb250ZW50ID0gJyc7XHJcblx0XHRsZXQgZmJJbmdyZWRpZW50czogQ29udHJvbEFycmF5ID0gbmV3IENvbnRyb2xBcnJheShbXSk7XHJcblxyXG5cdFx0aWYodGhpcy5fZWRpdE1vZGUgPT09ICdlZGl0Jyl7XHJcblx0XHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaXRlbUluZGV4Jyk7XHJcblx0XHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUodGhpcy5fcmVjaXBlSW5kZXgpO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjaXBlLmluZ3JlZGllbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRmYkluZ3JlZGllbnRzLnB1c2goXHJcblx0XHRcdFx0XHRuZXcgQ29udHJvbEdyb3VwKFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bmFtZTogbmV3IENvbnRyb2woXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcblx0XHRcdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbChcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVjaXBlLmluZ3JlZGllbnRzW2ldLmFtb3VudCxcclxuXHRcdFx0XHRcdFx0XHRcdFZhbGlkYXRvcnMuY29tcG9zZShbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhc051bWJlcnNcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRdKSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0ZmJSZWNpcGVOYW1lID0gdGhpcy5yZWNpcGUubmFtZTtcclxuXHRcdFx0XHRmYlJlY2lwZUltYWdlVXJsID0gdGhpcy5yZWNpcGUuaW1hZ2VVcmw7XHJcblx0XHRcdFx0ZmJSZWNpcGVDb250ZW50ID0gdGhpcy5yZWNpcGUuY29udGVudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcblx0XHRcdG5hbWU6IFtmYlJlY2lwZU5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRpbWFnZVVybDogW2ZiUmVjaXBlSW1hZ2VVcmxdLFxyXG5cdFx0XHRjb250ZW50OiBbZmJSZWNpcGVDb250ZW50XSxcclxuXHRcdFx0aW5ncmVkaWVudHM6IHRoaXMuX2Zvcm1CdWlsZGVyLmFycmF5KGZiSW5ncmVkaWVudHMuY29udHJvbHMpXHJcblx0XHR9KVxyXG5cdH1cclxuXHRyb3V0ZXJDYW5EZWFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXZJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pe1xyXG5cdFx0aWYodGhpcy5fc3VibWl0dGVkIHx8IHRoaXMubXlGb3JtLnByaXN0aW5lKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNvbmZpcm0oXCJTdXJlP1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc051bWJlcnMoY29udHJvbDogQ29udHJvbCk6e1tzOiBzdHJpbmddOmJvb2xlYW59e1xyXG5cdGlmICghKCcnK2NvbnRyb2wudmFsdWUpLm1hdGNoKCdcXFxcZCsnKSl7XHJcblx0XHRyZXR1cm4geyBub051bWJlcnM6IHRydWUgfTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
