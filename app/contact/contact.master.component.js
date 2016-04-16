System.register(['angular2/core', 'angular2/router', "./new-contact.component", "./old-contact.component"], function(exports_1, context_1) {
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
    var core_1, router_1, new_contact_component_1, old_contact_component_1;
    var ContactMasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (old_contact_component_1_1) {
                old_contact_component_1 = old_contact_component_1_1;
            }],
        execute: function() {
            ContactMasterComponent = (function () {
                function ContactMasterComponent() {
                }
                ContactMasterComponent = __decorate([
                    core_1.Component({
                        template: "\n    \t<header>\n    \t\t<nav>\n    \t\t\t<ul>\n    \t\t\t\t<li><a [routerLink]=\"['MainContacts']\">OLD CONTACT | </a></li>\n    \t\t\t\t<li><a [routerLink]=\"['Newcontacts']\">| NEW CONTACT</a></li>\n    \t\t\t</ul>\n    \t\t</nav>\n    \t</header>\n    \t<div class=\"main\">\n\t\t\t<router-outlet></router-outlet>\n    \t</div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['src/css/app.css']
                    }),
                    router_1.RouteConfig([
                        { path: '/con', name: 'MainContacts', component: old_contact_component_1.OldContactComponent, useAsDefault: true },
                        { path: '/new', name: 'Newcontacts', component: new_contact_component_1.NewContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ContactMasterComponent);
                return ContactMasterComponent;
            }());
            exports_1("ContactMasterComponent", ContactMasterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5tYXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO2dCQUNBLENBQUM7Z0JBdkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG9WQVlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDakMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUN4RixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7cUJBRW5FLENBQUM7OzBDQUFBO2dCQUVGLDZCQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCwyREFDQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3QvY29udGFjdC5tYXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtOZXdDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9uZXctY29udGFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPbGRDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9vbGQtY29udGFjdC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIFx0PGhlYWRlcj5cclxuICAgIFx0XHQ8bmF2PlxyXG4gICAgXHRcdFx0PHVsPlxyXG4gICAgXHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydNYWluQ29udGFjdHMnXVwiPk9MRCBDT05UQUNUIHwgPC9hPjwvbGk+XHJcbiAgICBcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ05ld2NvbnRhY3RzJ11cIj58IE5FVyBDT05UQUNUPC9hPjwvbGk+XHJcbiAgICBcdFx0XHQ8L3VsPlxyXG4gICAgXHRcdDwvbmF2PlxyXG4gICAgXHQ8L2hlYWRlcj5cclxuICAgIFx0PGRpdiBjbGFzcz1cIm1haW5cIj5cclxuXHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgXHQ8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvYXBwLmNzcyddXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0e3BhdGg6ICcvY29uJywgbmFtZTogJ01haW5Db250YWN0cycsIGNvbXBvbmVudDogT2xkQ29udGFjdENvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuXHR7cGF0aDogJy9uZXcnLCBuYW1lOiAnTmV3Y29udGFjdHMnLCBjb21wb25lbnQ6IE5ld0NvbnRhY3RDb21wb25lbnR9XHJcblxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdE1hc3RlckNvbXBvbmVudCB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
