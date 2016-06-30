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
//# sourceMappingURL=recipes.component.js.map