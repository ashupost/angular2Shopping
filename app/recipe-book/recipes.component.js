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
var router_1 = require('@angular/router');
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
        __metadata('design:paramtypes', [])
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0Msc0NBQWtDLHlCQUF5QixDQUFDLENBQUE7QUFDNUQsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFnQnJEO0lBQUE7SUFDQSxDQUFDO0lBZkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLGtMQU9UO1lBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUMxQixVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsRUFBRSwwQkFBaUIsQ0FBQztZQUNwRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUM5QixDQUFDOzt3QkFBQTtJQUVGLHVCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSx3QkFBZ0IsbUJBQzVCLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUuc2VydmljZSc7XHJcbmltcG9ydCB7UmVjaXBlTGlzdENvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGUtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9ICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1yZWNpcGVzJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWFzdGVyXCI+XHJcblx0XHRcdFx0PG15LXJlY2lwZS1saXN0PjwvbXktcmVjaXBlLWxpc3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcblx0XHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRgLFxyXG5cdHByb3ZpZGVyczogW1JlY2lwZVNlcnZpY2VdLFxyXG5cdGRpcmVjdGl2ZXM6IFtSZWNpcGVMaXN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXHJcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3MvYXBwLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGVzQ29tcG9uZW50IHtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
