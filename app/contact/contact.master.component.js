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
//# sourceMappingURL=contact.master.component.js.map