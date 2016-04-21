System.register(['angular2/core', 'angular2/router', './recipe-book/recipes.component', './shopping-list/shopping-list.component', './my-form/my-form.component', "./di/di-master.compoment", "./data-flow/master.component", "./http-rest/http-rest.master.component", "./contact/contact.master.component", "./structural-directives/structural-directives.component", "./lifecycle-hooks/lifecycle-component", "./jquery/jquery.component", "./wiki-http/wiki-http.main.component", "./hierarchical-dependency-injection/hierarchical-dependency-injection.component", "./bootstrap/bootstrap-main.component", "./attribute-directive/attrubute-directive.app.component", "./bootstrap/bootstrap-second.component", "./bootstrap/bootstrap-third.component", "./template-syntax/template.app.component", "./rx-js/rx-js.component"], function(exports_1, context_1) {
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
    var core_1, router_1, recipes_component_1, shopping_list_component_1, my_form_component_1, di_master_compoment_1, master_component_1, http_rest_master_component_1, contact_master_component_1, structural_directives_component_1, lifecycle_component_1, jquery_component_1, wiki_http_main_component_1, hierarchical_dependency_injection_component_1, bootstrap_main_component_1, attrubute_directive_app_component_1, bootstrap_second_component_1, bootstrap_third_component_1, template_app_component_1, rx_js_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipes_component_1_1) {
                recipes_component_1 = recipes_component_1_1;
            },
            function (shopping_list_component_1_1) {
                shopping_list_component_1 = shopping_list_component_1_1;
            },
            function (my_form_component_1_1) {
                my_form_component_1 = my_form_component_1_1;
            },
            function (di_master_compoment_1_1) {
                di_master_compoment_1 = di_master_compoment_1_1;
            },
            function (master_component_1_1) {
                master_component_1 = master_component_1_1;
            },
            function (http_rest_master_component_1_1) {
                http_rest_master_component_1 = http_rest_master_component_1_1;
            },
            function (contact_master_component_1_1) {
                contact_master_component_1 = contact_master_component_1_1;
            },
            function (structural_directives_component_1_1) {
                structural_directives_component_1 = structural_directives_component_1_1;
            },
            function (lifecycle_component_1_1) {
                lifecycle_component_1 = lifecycle_component_1_1;
            },
            function (jquery_component_1_1) {
                jquery_component_1 = jquery_component_1_1;
            },
            function (wiki_http_main_component_1_1) {
                wiki_http_main_component_1 = wiki_http_main_component_1_1;
            },
            function (hierarchical_dependency_injection_component_1_1) {
                hierarchical_dependency_injection_component_1 = hierarchical_dependency_injection_component_1_1;
            },
            function (bootstrap_main_component_1_1) {
                bootstrap_main_component_1 = bootstrap_main_component_1_1;
            },
            function (attrubute_directive_app_component_1_1) {
                attrubute_directive_app_component_1 = attrubute_directive_app_component_1_1;
            },
            function (bootstrap_second_component_1_1) {
                bootstrap_second_component_1 = bootstrap_second_component_1_1;
            },
            function (bootstrap_third_component_1_1) {
                bootstrap_third_component_1 = bootstrap_third_component_1_1;
            },
            function (template_app_component_1_1) {
                template_app_component_1 = template_app_component_1_1;
            },
            function (rx_js_component_1_1) {
                rx_js_component_1 = rx_js_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <!--\n    <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"active\"><a [routerLink]=\"['Bootstrap-Third']\">Home</a></li>\n                        <li class=\"dropdown\">\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Click me for Menu <span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a [routerLink]=\"['Recipes']\">Recipes</a></li>\n                                <li><a [routerLink]=\"['ShoppingList']\">ShoppingList</a></li>\n                                <li><a [routerLink]=\"['My-form']\">My-form</a></li>\n                                <li><a [routerLink]=\"['Di-demo']\">Dependency-Injection</a></li>\n                                <li><a [routerLink]=\"['Data-flow']\">Data-flow</a></li>\n                                <li><a [routerLink]=\"['Http-rest']\">Http-rest</a></li>\n                                <li><a [routerLink]=\"['Contacts']\">Contact</a></li>\n                                <li><a [routerLink]=\"['Structural']\">Structural</a></li>\n                                <li><a [routerLink]=\"['Lifecycle']\">Lifecycle</a></li>\n                                <li><a [routerLink]=\"['JQuery']\">JQuery</a></li>\n                                <li><a [routerLink]=\"['Wiki-Http']\">Wiki-Http</a></li>\n                                <li><a [routerLink]=\"['Hierarchical-Dependency-Injection']\">Hierarchical-DI</a></li>\n                                <li><a [routerLink]=\"['Bootstrap']\">Bootstrap</a></li>\n                                <li><a [routerLink]=\"['Bootstrap-Second']\">Bootstrap-Second</a></li>\n                                <li><a [routerLink]=\"['Tootstrap-Third']\">Tootstrap-Third</a></li>\n                            </ul>\n                        </li>\n                        <li><a [routerLink]=\"['Attribute-Directive']\">Attribute-Directive</a></li>\n                        <li><a href=\"#\">Page 3</a></li>\n                    </ul>\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n                        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n                    </ul>\n                </div>\n            </div>\n    </nav>\n    -->\n   \n\t\t\t<router-outlet></router-outlet>\n   \t\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Bootstrap-Second', component: bootstrap_second_component_1.BootstrapSecondComponent, useAsDefault: true },
                        { path: '/recipes/...', name: 'Recipes', component: recipes_component_1.RecipesComponent },
                        { path: '/shopping-list', name: 'ShoppingList', component: shopping_list_component_1.ShoppingListComponent },
                        { path: '/my-form', name: 'My-form', component: my_form_component_1.MyFormComponent },
                        { path: '/di-demo', name: 'Di-demo', component: di_master_compoment_1.DIMasterComponent },
                        { path: '/data-flow', name: 'Data-flow', component: master_component_1.DataFlowMasterComponent },
                        { path: '/http-rest', name: 'Http-rest', component: http_rest_master_component_1.HTTPRestMasterComponent },
                        { path: '/contact/...', name: 'Contacts', component: contact_master_component_1.ContactMasterComponent },
                        { path: '/structural', name: 'Structural', component: structural_directives_component_1.StructuralDirectivesComponent },
                        { path: '/lifecycle', name: 'Lifecycle', component: lifecycle_component_1.LifecycleComponent },
                        { path: '/jquery', name: 'JQuery', component: jquery_component_1.JqueryComponent },
                        { path: '/wiki-http', name: 'Wiki-Http', component: wiki_http_main_component_1.WikiHttpMainComponent },
                        { path: '/hierarchical-dependency-injection', name: 'Hierarchical-Dependency-Injection', component: hierarchical_dependency_injection_component_1.HierarchicalDependencyInjectionComponent },
                        { path: '/template-syntax', name: 'Template-Syntax', component: template_app_component_1.TemplateAppComponent },
                        { path: '/attribute-directive', name: 'Attribute-Directive', component: attrubute_directive_app_component_1.AttributeDirectiveAppComponent },
                        { path: '/rx-js', name: 'Rx-Js', component: rx_js_component_1.RXJSComponent },
                        { path: '/bootstrap', name: 'Bootstrap', component: bootstrap_main_component_1.BootstrapMainComponent },
                        { path: '/bootstrap-third', name: 'Bootstrap-Third', component: bootstrap_third_component_1.BootstrapThirdComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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cm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIEF1eFJvdXRlfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JlY2lwZXNDb21wb25lbnR9IGZyb20gJy4vcmVjaXBlLWJvb2svcmVjaXBlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdENvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtNeUZvcm1Db21wb25lbnR9IGZyb20gJy4vbXktZm9ybS9teS1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RElNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2RpL2RpLW1hc3Rlci5jb21wb21lbnRcIjtcclxuaW1wb3J0IHtEYXRhRmxvd01hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vZGF0YS1mbG93L21hc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIVFRQUmVzdE1hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vaHR0cC1yZXN0L2h0dHAtcmVzdC5tYXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29udGFjdE1hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0Lm1hc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdHJ1Y3R1cmFsRGlyZWN0aXZlc0NvbXBvbmVudH0gZnJvbSBcIi4vc3RydWN0dXJhbC1kaXJlY3RpdmVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMaWZlY3ljbGVDb21wb25lbnR9IGZyb20gXCIuL2xpZmVjeWNsZS1ob29rcy9saWZlY3ljbGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SnF1ZXJ5Q29tcG9uZW50fSBmcm9tIFwiLi9qcXVlcnkvanF1ZXJ5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1dpa2lIdHRwTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vd2lraS1odHRwL3dpa2ktaHR0cC5tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hpZXJhcmNoaWNhbERlcGVuZGVuY3lJbmplY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL2hpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qm9vdHN0cmFwTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vYm9vdHN0cmFwL2Jvb3RzdHJhcC1tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F0dHJpYnV0ZURpcmVjdGl2ZUFwcENvbXBvbmVudH0gZnJvbSBcIi4vYXR0cmlidXRlLWRpcmVjdGl2ZS9hdHRydWJ1dGUtZGlyZWN0aXZlLmFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtCb290c3RyYXBTZWNvbmRDb21wb25lbnR9IGZyb20gXCIuL2Jvb3RzdHJhcC9ib290c3RyYXAtc2Vjb25kLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFRoaXJkQ29tcG9uZW50fSBmcm9tIFwiLi9ib290c3RyYXAvYm9vdHN0cmFwLXRoaXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RlbXBsYXRlQXBwQ29tcG9uZW50fSBmcm9tIFwiLi90ZW1wbGF0ZS1zeW50YXgvdGVtcGxhdGUuYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JYSlNDb21wb25lbnR9IGZyb20gXCIuL3J4LWpzL3J4LWpzLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICA8IS0tXHJcbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI215TmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPldlYlNpdGVOYW1lPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJteU5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQm9vdHN0cmFwLVRoaXJkJ11cIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBocmVmPVwiI1wiPkNsaWNrIG1lIGZvciBNZW51IDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1JlY2lwZXMnXVwiPlJlY2lwZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydTaG9wcGluZ0xpc3QnXVwiPlNob3BwaW5nTGlzdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ015LWZvcm0nXVwiPk15LWZvcm08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydEaS1kZW1vJ11cIj5EZXBlbmRlbmN5LUluamVjdGlvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0RhdGEtZmxvdyddXCI+RGF0YS1mbG93PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnSHR0cC1yZXN0J11cIj5IdHRwLXJlc3Q8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydDb250YWN0cyddXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1N0cnVjdHVyYWwnXVwiPlN0cnVjdHVyYWw8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydMaWZlY3ljbGUnXVwiPkxpZmVjeWNsZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0pRdWVyeSddXCI+SlF1ZXJ5PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnV2lraS1IdHRwJ11cIj5XaWtpLUh0dHA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydIaWVyYXJjaGljYWwtRGVwZW5kZW5jeS1JbmplY3Rpb24nXVwiPkhpZXJhcmNoaWNhbC1ESTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0Jvb3RzdHJhcCddXCI+Qm9vdHN0cmFwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQm9vdHN0cmFwLVNlY29uZCddXCI+Qm9vdHN0cmFwLVNlY29uZDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1Rvb3RzdHJhcC1UaGlyZCddXCI+VG9vdHN0cmFwLVRoaXJkPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydBdHRyaWJ1dGUtRGlyZWN0aXZlJ11cIj5BdHRyaWJ1dGUtRGlyZWN0aXZlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBhZ2UgMzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPiBTaWduIFVwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW5cIj48L3NwYW4+IExvZ2luPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICAgLS0+XHJcbiAgIFxyXG5cdFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgIFx0XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG5cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnLycsIG5hbWU6ICdCb290c3RyYXAtU2Vjb25kJywgY29tcG9uZW50OiBCb290c3RyYXBTZWNvbmRDb21wb25lbnQsICB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG4gICAge3BhdGg6ICcvcmVjaXBlcy8uLi4nLCBuYW1lOiAnUmVjaXBlcycsIGNvbXBvbmVudDogUmVjaXBlc0NvbXBvbmVudH0sXHJcblx0e3BhdGg6ICcvc2hvcHBpbmctbGlzdCcsIG5hbWU6ICdTaG9wcGluZ0xpc3QnLCBjb21wb25lbnQ6IFNob3BwaW5nTGlzdENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9teS1mb3JtJywgbmFtZTogJ015LWZvcm0nLCBjb21wb25lbnQ6IE15Rm9ybUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9kaS1kZW1vJywgbmFtZTogJ0RpLWRlbW8nLCBjb21wb25lbnQ6IERJTWFzdGVyQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2RhdGEtZmxvdycsIG5hbWU6ICdEYXRhLWZsb3cnLCBjb21wb25lbnQ6IERhdGFGbG93TWFzdGVyQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2h0dHAtcmVzdCcsIG5hbWU6ICdIdHRwLXJlc3QnLCBjb21wb25lbnQ6IEhUVFBSZXN0TWFzdGVyQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2NvbnRhY3QvLi4uJywgbmFtZTogJ0NvbnRhY3RzJywgY29tcG9uZW50OiBDb250YWN0TWFzdGVyQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3N0cnVjdHVyYWwnLCBuYW1lOiAnU3RydWN0dXJhbCcsIGNvbXBvbmVudDogU3RydWN0dXJhbERpcmVjdGl2ZXNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvbGlmZWN5Y2xlJywgbmFtZTogJ0xpZmVjeWNsZScsIGNvbXBvbmVudDogTGlmZWN5Y2xlQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2pxdWVyeScsIG5hbWU6ICdKUXVlcnknLCBjb21wb25lbnQ6IEpxdWVyeUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy93aWtpLWh0dHAnLCBuYW1lOiAnV2lraS1IdHRwJywgY29tcG9uZW50OiBXaWtpSHR0cE1haW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uJywgbmFtZTogJ0hpZXJhcmNoaWNhbC1EZXBlbmRlbmN5LUluamVjdGlvbicsIGNvbXBvbmVudDogSGllcmFyY2hpY2FsRGVwZW5kZW5jeUluamVjdGlvbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy90ZW1wbGF0ZS1zeW50YXgnLCBuYW1lOiAnVGVtcGxhdGUtU3ludGF4JywgY29tcG9uZW50OiBUZW1wbGF0ZUFwcENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9hdHRyaWJ1dGUtZGlyZWN0aXZlJywgbmFtZTogJ0F0dHJpYnV0ZS1EaXJlY3RpdmUnLCBjb21wb25lbnQ6IEF0dHJpYnV0ZURpcmVjdGl2ZUFwcENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9yeC1qcycsIG5hbWU6ICdSeC1KcycsIGNvbXBvbmVudDogUlhKU0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9ib290c3RyYXAnLCBuYW1lOiAnQm9vdHN0cmFwJywgY29tcG9uZW50OiBCb290c3RyYXBNYWluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2Jvb3RzdHJhcC10aGlyZCcsIG5hbWU6ICdCb290c3RyYXAtVGhpcmQnLCBjb21wb25lbnQ6IEJvb3RzdHJhcFRoaXJkQ29tcG9uZW50fVxyXG5cclxuXHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
