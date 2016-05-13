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
var core_1 = require('angular2/core');
var recipe_service_1 = require('./recipe.service');
var recipe_list_component_1 = require('./recipe-list.component');
var router_1 = require('angular2/router');
var recipe_detail_component_1 = require('./recipe-detail.component');
var recipe_edit_component_1 = require('./recipe-edit.component');
var RecipesComponent = (function () {
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
exports.RecipesComponent = RecipesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0Msc0NBQWtDLHlCQUF5QixDQUFDLENBQUE7QUFDNUQsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFDL0Qsd0NBQW9DLDJCQUEyQixDQUFDLENBQUE7QUFDaEUsc0NBQWtDLHlCQUF5QixDQUFDLENBQUE7QUFxQjVEO0lBQUE7SUFFQSxDQUFDO0lBdEJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxrTEFPVDtZQUNELFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDMUIsVUFBVSxFQUFFLENBQUMsMkNBQW1CLEVBQUUsMEJBQWlCLENBQUM7WUFDcEQsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDOUIsQ0FBQztRQUVELG9CQUFXLENBQUM7WUFDWixFQUFDLElBQUksRUFBRSxlQUFlLEVBQVcsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztZQUM1RyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBSSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7U0FDMUUsQ0FBQzs7d0JBQUE7SUFJRix1QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksd0JBQWdCLG1CQUU1QixDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JlY2lwZUxpc3RDb21wb25lbnR9IGZyb20gJy4vcmVjaXBlLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7UmVjaXBlRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtSZWNpcGVFZGl0Q29tcG9uZW50fSBmcm9tICcuL3JlY2lwZS1lZGl0LmNvbXBvbmVudCc7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktcmVjaXBlcycsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1hc3RlclwiPlxyXG5cdFx0XHRcdDxteS1yZWNpcGUtbGlzdD48L215LXJlY2lwZS1saXN0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImRldGFpbFwiPlxyXG5cdFx0XHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuXHRcdFx0PC9kaXY+XHJcblx0YCxcclxuXHRwcm92aWRlcnM6IFtSZWNpcGVTZXJ2aWNlXSxcclxuXHRkaXJlY3RpdmVzOiBbUmVjaXBlTGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxyXG5cdHN0eWxlVXJsczogWydzcmMvY3NzL2FwcC5jc3MnXVxyXG59KVxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7cGF0aDogJy9SZWNpcGVEZXRhaWwnLCAgICAgICAgICBuYW1lOiAnUmVjaXBlRGV0YWlsJywgY29tcG9uZW50OiBSZWNpcGVEZXRhaWxDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcblx0e3BhdGg6ICcvOmVkaXRNb2RlJywgbmFtZTogJ1JlY2lwZUVkaXQnLCAgIGNvbXBvbmVudDogUmVjaXBlRWRpdENvbXBvbmVudH1cclxuXSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGVzQ29tcG9uZW50IHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
