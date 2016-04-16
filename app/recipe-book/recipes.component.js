System.register(['angular2/core', './recipe.service', './recipe-list.component', 'angular2/router', './recipe-detail.component', './recipe-edit.component'], function(exports_1, context_1) {
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
    var core_1, recipe_service_1, recipe_list_component_1, router_1, recipe_detail_component_1, recipe_edit_component_1;
    var RecipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (recipe_list_component_1_1) {
                recipe_list_component_1 = recipe_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_detail_component_1_1) {
                recipe_detail_component_1 = recipe_detail_component_1_1;
            },
            function (recipe_edit_component_1_1) {
                recipe_edit_component_1 = recipe_edit_component_1_1;
            }],
        execute: function() {
            RecipesComponent = (function () {
                function RecipesComponent() {
                }
                RecipesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipes',
                        templateUrl: 'templates/recipe-book/recipe.tpl.html',
                        providers: [recipe_service_1.RecipeService],
                        directives: [recipe_list_component_1.RecipeListComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['src/css/app.css']
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'RecipeDetail', component: recipe_detail_component_1.RecipeDetailComponent, useAsDefault: true },
                        { path: '/:editMode', name: 'RecipeEdit', component: recipe_edit_component_1.RecipeEditComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RecipesComponent);
                return RecipesComponent;
            }());
            exports_1("RecipesComponent", RecipesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBZkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsWUFBWTt3QkFDdEIsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQzt3QkFDMUIsVUFBVSxFQUFFLENBQUMsMkNBQW1CLEVBQUUsMEJBQWlCLENBQUM7d0JBQ3BELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO3FCQUM5QixDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1osRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFXLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2hHLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFJLFNBQVMsRUFBRSwyQ0FBbUIsRUFBQztxQkFDMUUsQ0FBQzs7b0NBQUE7Z0JBSUYsdUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELCtDQUVDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUuc2VydmljZSc7XHJcbmltcG9ydCB7UmVjaXBlTGlzdENvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGUtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGVEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vcmVjaXBlLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlY2lwZUVkaXRDb21wb25lbnR9IGZyb20gJy4vcmVjaXBlLWVkaXQuY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1yZWNpcGVzJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZWNpcGUtYm9vay9yZWNpcGUudHBsLmh0bWwnLFxyXG5cdHByb3ZpZGVyczogW1JlY2lwZVNlcnZpY2VdLFxyXG5cdGRpcmVjdGl2ZXM6IFtSZWNpcGVMaXN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXHJcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3MvYXBwLmNzcyddXHJcbn0pXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG5cdHtwYXRoOiAnLycsICAgICAgICAgIG5hbWU6ICdSZWNpcGVEZXRhaWwnLCBjb21wb25lbnQ6IFJlY2lwZURldGFpbENvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuXHR7cGF0aDogJy86ZWRpdE1vZGUnLCBuYW1lOiAnUmVjaXBlRWRpdCcsICAgY29tcG9uZW50OiBSZWNpcGVFZGl0Q29tcG9uZW50fVxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY2lwZXNDb21wb25lbnQge1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
