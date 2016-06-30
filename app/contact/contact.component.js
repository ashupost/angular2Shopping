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
var ContactComponent = (function () {
    function ContactComponent() {
        this.contact = {};
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            template: "\n        <div>\n            <div>\n                   <div>      \n                              <label for=\"firstName\">First Name </label>\n                              <input type=\"text\" [(ngModel)]=\"contact.firstName\">\n                   </div>\n                   <div>\n                              <label for=\"firstName\">Last Name</label>\n                              <input type=\"text\" [(ngModel)]=\"contact.lastName\">\n                   </div>\n            </div>\n            <button> Edit </button>\n        </div>\n    ",
            inputs: ['contact'],
            styles: ["\n      label{\n            display: inline-block;\n            width: 140px;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQTJCaEQ7SUFBQTtRQUNXLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTNCRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsc2lCQWNUO1lBQ0gsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ25CLE1BQU0sRUFBRSxDQUFDLDhGQUtOLENBQUM7U0FDTCxDQUFDOzt3QkFBQTtJQUdGLHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx3QkFBZ0IsbUJBRTVCLENBQUEiLCJmaWxlIjoiY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjb250YWN0LmZpcnN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjb250YWN0Lmxhc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24+IEVkaXQgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gIGlucHV0czogWydjb250YWN0J10sXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50ICB7XHJcbiAgICBwdWJsaWMgY29udGFjdCA9IHt9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
