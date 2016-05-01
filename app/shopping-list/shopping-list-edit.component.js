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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFFQyxtQ0FBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO2dCQUFHLENBQUM7Z0JBQ2pFLDRDQUFRLEdBQVIsVUFBUyxJQUFnQjtvQkFDeEIsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJOzs0QkFFdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FDbkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQzs7NEJBRXpCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QsNENBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7Z0JBckNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLHk2QkFnQlQ7d0JBQ0osTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUV0QixDQUFDOzs2Q0FBQTtnQkFpQkYsZ0NBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELGlFQWdCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tICcuLi9zaGFyZWQvaW5ncmVkaWVudCc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1zaG9wcGluZy1saXN0LWVkaXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuXHRcdDxoMT57e2luZ3JlZGllbnQgPT09IG51bGwgPyAnQWRkJyA6ICdFZGl0JyB9fSBJdGVtIDwvaDE+XHJcblx0XHQ8Zm9ybSBpZD1cInNob3BwaW5nLWxpc3QtYWRkXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0PGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaXRlbS1uYW1lXCIgW25nTW9kZWxdPVwiaW5ncmVkaWVudD8ubmFtZVwiIHJlcXVpcmVkIG5nQ29udHJvbD1cIm5hbWVcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwiaXRlbS1hbW91bnRcIj5hbW91bnQ8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaXRlbS1hbW91bnRcIiByZXF1aXJlZCByZXF1aXJlZCBbbmdNb2RlbF09XCJpbmdyZWRpZW50Py5hbW91bnRcIiBuZ0NvbnRyb2w9XCJhbW91bnRcIj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYmctb3JhbmdlIG1hcmdpblwiIHR5cGU9XCJzdWJtaXRcIj57e2luZ3JlZGllbnQgPT09IG51bGwgPyAnQWRkJyA6ICdFZGl0JyB9fSBJdGVtPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYmctcmVkIG1hcmdpblwiIHR5cGU9XCJzdWJtaXRcIiAqbmdJZj1cImluZ3JlZGllbnQgIT09IG51bGxcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZSBJdGVtPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Zvcm0+ICAgIFxyXG4gICAgYCxcclxuXHRpbnB1dHM6IFsnaW5ncmVkaWVudCddXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudCB7XHJcblx0aW5ncmVkaWVudDogSW5ncmVkaWVudDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxyXG5cdG9uU3VibWl0KGl0ZW06IEluZ3JlZGllbnQpIHtcclxuXHRcdHRoaXMuaW5ncmVkaWVudCAhPT0gbnVsbFxyXG5cdFx0XHQ/XHJcblx0XHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UudXBkYXRlSXRlbShcclxuXHRcdFx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEluZGV4T2ZJdGVtKFxyXG5cdFx0XHRcdFx0dGhpcy5pbmdyZWRpZW50KSwgaXRlbSlcclxuXHRcdFx0OlxyXG5cdFx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEl0ZW0oaXRlbSk7XHJcblx0fVxyXG5cdG9uRGVsZXRlKCkge1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5kZWxldGVJdGVtKHRoaXMuaW5ncmVkaWVudCk7XHJcblx0XHR0aGlzLmluZ3JlZGllbnQgPSBudWxsO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
