System.register(['angular2/core', '../shared/shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                }
                ShoppingListEditComponent.prototype.onSubmit = function (item) {
                    this.ingredient !== null
                        ?
                            this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item)
                        :
                            this._shoppingListService.insertItem(item);
                };
                ShoppingListEditComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.ingredient);
                    this.ingredient = null;
                };
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list-edit',
                        template: "\n\t\t<h1>{{ingredient === null ? 'Add' : 'Edit' }} Item </h1>\n\t\t<form id=\"shopping-list-add\" (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"item-name\">Name</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"item-name\" [ngModel]=\"ingredient?.name\" required ngControl=\"name\">\n\t\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"item-amount\">amount</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"item-amount\" required required [ngModel]=\"ingredient?.amount\" ngControl=\"amount\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t<button class=\"btn bg-orange margin\" type=\"submit\">{{ingredient === null ? 'Add' : 'Edit' }} Item</button>\n\t\t\t<button class=\"btn bg-red margin\" type=\"submit\" *ngIf=\"ingredient !== null\" (click)=\"onDelete()\">Delete Item</button>\n\t\t\t\t</div>\n\t\t</form>    \n    ",
                        inputs: ['ingredient']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            }());
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});
//# sourceMappingURL=shopping-list-edit.component.js.map