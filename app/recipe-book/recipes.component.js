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
                        template: "\n\t\t\t<div class=\"master\">\n\t\t\t\t<my-recipe-list></my-recipe-list>\n\t\t\t</div>\n\t\t\t<div class=\"detail\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t",
                        providers: [recipe_service_1.RecipeService],
                        directives: [recipe_list_component_1.RecipeListComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['src/css/app.css']
                    }),
                    router_1.RouteConfig([
                        { path: '/RecipeDetail', name: 'RecipeDetail', component: recipe_detail_component_1.RecipeDetailComponent, useAsDefault: true },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxrTEFPVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3dCQUMxQixVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsRUFBRSwwQkFBaUIsQ0FBQzt3QkFDcEQsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQzlCLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDWixFQUFDLElBQUksRUFBRSxlQUFlLEVBQVcsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDNUcsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUksU0FBUyxFQUFFLDJDQUFtQixFQUFDO3FCQUMxRSxDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSZWNpcGVMaXN0Q29tcG9uZW50fSBmcm9tICcuL3JlY2lwZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JlY2lwZURldGFpbENvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVjaXBlRWRpdENvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGUtZWRpdC5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LXJlY2lwZXMnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtYXN0ZXJcIj5cclxuXHRcdFx0XHQ8bXktcmVjaXBlLWxpc3Q+PC9teS1yZWNpcGUtbGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxcIj5cclxuXHRcdFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdGAsXHJcblx0cHJvdmlkZXJzOiBbUmVjaXBlU2VydmljZV0sXHJcblx0ZGlyZWN0aXZlczogW1JlY2lwZUxpc3RDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcclxuXHRzdHlsZVVybHM6IFsnc3JjL2Nzcy9hcHAuY3NzJ11cclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0e3BhdGg6ICcvUmVjaXBlRGV0YWlsJywgICAgICAgICAgbmFtZTogJ1JlY2lwZURldGFpbCcsIGNvbXBvbmVudDogUmVjaXBlRGV0YWlsQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG5cdHtwYXRoOiAnLzplZGl0TW9kZScsIG5hbWU6ICdSZWNpcGVFZGl0JywgICBjb21wb25lbnQ6IFJlY2lwZUVkaXRDb21wb25lbnR9XHJcbl0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjaXBlc0NvbXBvbmVudCB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
