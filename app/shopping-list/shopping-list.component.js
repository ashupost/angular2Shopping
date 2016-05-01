System.register(['angular2/core', './shopping-list-edit.component', '../shared/shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_edit_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_edit_component_1_1) {
                shopping_list_edit_component_1 = shopping_list_edit_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListServie) {
                    this._shoppingListServie = _shoppingListServie;
                    this.selectedItem = null;
                }
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.shoppingList = this._shoppingListServie.getAllItems();
                };
                ShoppingListComponent.prototype.onSelectItem = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onAddItem = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        directives: [shopping_list_edit_component_1.ShoppingListEditComponent],
                        providers: [shopping_list_service_1.ShoppingListService],
                        template: "\n\t\t\t<h1>Shopping List</h1>\n\t\t\t<my-shopping-list-edit [ingredient]=\"selectedItem\"></my-shopping-list-edit>\n\t\t\t<div class=\"list\">\n\t\t\t\t<button class=\"btn bg-orange margin\" (click)=\"onAddItem()\">Add New Item</button>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"let item of shoppingList\" (click)=\"onSelectItem(item)\">{{item.name}} {{item.amount}}</li>\n\t\t\t\t</ul>\n\t\t\t</div>    \n    "
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBR0MsK0JBQW9CLG1CQUF3QztvQkFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkFENUQsaUJBQVksR0FBZSxJQUFJLENBQUM7Z0JBQytCLENBQUM7Z0JBRWhFLHdDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzVELENBQUM7Z0JBQ0QsNENBQVksR0FBWixVQUFhLElBQWdCO29CQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCx5Q0FBUyxHQUFUO29CQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQTNCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFVBQVUsRUFBRSxDQUFDLHdEQUF5QixDQUFDO3dCQUN2QyxTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQzt3QkFDN0IsUUFBUSxFQUFFLHlaQVNUO3FCQUNKLENBQUM7O3lDQUFBO2dCQWVGLDRCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCx5REFjQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50fSBmcm9tICcuL3Nob3BwaW5nLWxpc3QtZWRpdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gJy4uL3NoYXJlZC9pbmdyZWRpZW50JztcclxuXHJcbkBDb21wb25lbnQoeyAvLyBOTyBTRUxFQ1RPUiBCRUNBVVNFIElUIElTIEEgUk9VVEVcclxuXHRkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cdFx0XHQ8aDE+U2hvcHBpbmcgTGlzdDwvaDE+XHJcblx0XHRcdDxteS1zaG9wcGluZy1saXN0LWVkaXQgW2luZ3JlZGllbnRdPVwic2VsZWN0ZWRJdGVtXCI+PC9teS1zaG9wcGluZy1saXN0LWVkaXQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBiZy1vcmFuZ2UgbWFyZ2luXCIgKGNsaWNrKT1cIm9uQWRkSXRlbSgpXCI+QWRkIE5ldyBJdGVtPC9idXR0b24+XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0PGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNob3BwaW5nTGlzdFwiIChjbGljayk9XCJvblNlbGVjdEl0ZW0oaXRlbSlcIj57e2l0ZW0ubmFtZX19IHt7aXRlbS5hbW91bnR9fTwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+ICAgIFxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cdHNob3BwaW5nTGlzdDogSW5ncmVkaWVudFtdO1xyXG5cdHNlbGVjdGVkSXRlbTogSW5ncmVkaWVudCA9IG51bGw7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmllOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLnNob3BwaW5nTGlzdCA9IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpZS5nZXRBbGxJdGVtcygpO1xyXG5cdH1cclxuXHRvblNlbGVjdEl0ZW0oaXRlbTogSW5ncmVkaWVudCl7XHJcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcblx0fVxyXG5cdG9uQWRkSXRlbSgpe1xyXG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
