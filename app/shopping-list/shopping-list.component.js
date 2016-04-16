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
                        templateUrl: 'templates/shopping-list/shopping-list.tpl.html',
                        directives: [shopping_list_edit_component_1.ShoppingListEditComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHQywrQkFBb0IsbUJBQXdDO29CQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUQ1RCxpQkFBWSxHQUFlLElBQUksQ0FBQztnQkFDK0IsQ0FBQztnQkFFaEUsd0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCw0Q0FBWSxHQUFaLFVBQWEsSUFBZ0I7b0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUNELHlDQUFTLEdBQVQ7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBbEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLGdEQUFnRDt3QkFDN0QsVUFBVSxFQUFFLENBQUMsd0RBQXlCLENBQUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNuQyxDQUFDOzt5Q0FBQTtnQkFlRiw0QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQseURBY0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0LWVkaXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tICcuLi9zaGFyZWQvaW5ncmVkaWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHsgLy8gTk8gU0VMRUNUT1IgQkVDQVVTRSBJVCBJUyBBIFJPVVRFXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QudHBsLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRzaG9wcGluZ0xpc3Q6IEluZ3JlZGllbnRbXTtcclxuXHRzZWxlY3RlZEl0ZW06IEluZ3JlZGllbnQgPSBudWxsO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpZTogU2hvcHBpbmdMaXN0U2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKTphbnkge1xyXG5cdFx0dGhpcy5zaG9wcGluZ0xpc3QgPSB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWUuZ2V0QWxsSXRlbXMoKTtcclxuXHR9XHJcblx0b25TZWxlY3RJdGVtKGl0ZW06IEluZ3JlZGllbnQpe1xyXG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG5cdH1cclxuXHRvbkFkZEl0ZW0oKXtcclxuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
