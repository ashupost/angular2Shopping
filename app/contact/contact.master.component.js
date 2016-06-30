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
var router_1 = require('@angular/router');
var ContactMasterComponent = (function () {
    function ContactMasterComponent() {
    }
    ContactMasterComponent = __decorate([
        core_1.Component({
            template: "\n    \t<header>\n    \t\t<nav>\n    \t\t\t<ul>\n    \t\t\t\t<li><a [routerLink]=\"['MainContacts']\">OLD CONTACT | </a></li>\n    \t\t\t\t<li><a [routerLink]=\"['Newcontacts']\">| NEW CONTACT</a></li>\n    \t\t\t</ul>\n    \t\t</nav>\n    \t</header>\n    \t<div class=\"main\">\n\t\t\t<router-outlet></router-outlet>\n    \t</div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styleUrls: ['src/css/app.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ContactMasterComponent);
    return ContactMasterComponent;
}());
exports.ContactMasterComponent = ContactMasterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5tYXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFvQm5EO0lBQUE7SUFDQSxDQUFDO0lBbkJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvVkFZVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1NBQ2pDLENBQUM7OzhCQUFBO0lBR0YsNkJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLDhCQUFzQix5QkFDbEMsQ0FBQSIsImZpbGUiOiJjb250YWN0L2NvbnRhY3QubWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBcdDxoZWFkZXI+XHJcbiAgICBcdFx0PG5hdj5cclxuICAgIFx0XHRcdDx1bD5cclxuICAgIFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnTWFpbkNvbnRhY3RzJ11cIj5PTEQgQ09OVEFDVCB8IDwvYT48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydOZXdjb250YWN0cyddXCI+fCBORVcgQ09OVEFDVDwvYT48L2xpPlxyXG4gICAgXHRcdFx0PC91bD5cclxuICAgIFx0XHQ8L25hdj5cclxuICAgIFx0PC9oZWFkZXI+XHJcbiAgICBcdDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcblx0XHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIFx0PC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2FwcC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RNYXN0ZXJDb21wb25lbnQge1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
