System.register(['angular2/core', 'angular2/router', './recipe-book/recipes.component', './shopping-list/shopping-list.component', './my-form/my-form.component', "./di/di-master.compoment", "./data-flow/master.component", "./http-rest/http-rest.master.component", "./contact/contact.master.component", "./structural-directives/structural-directives.component", "./lifecycle-hooks/lifecycle-component", "./jquery/jquery.component", "./wiki-http/wiki-http.main.component", "./hierarchical-dependency-injection/hierarchical-dependency-injection.component", "./bootstrap/bootstrap-main.component", "./attribute-directive/attrubute-directive.app.component", "./bootstrap/bootstrap-second.component", "./bootstrap/bootstrap-third.component"], function(exports_1, context_1) {
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
    var core_1, router_1, recipes_component_1, shopping_list_component_1, my_form_component_1, di_master_compoment_1, master_component_1, http_rest_master_component_1, contact_master_component_1, structural_directives_component_1, lifecycle_component_1, jquery_component_1, wiki_http_main_component_1, hierarchical_dependency_injection_component_1, bootstrap_main_component_1, attrubute_directive_app_component_1, bootstrap_second_component_1, bootstrap_third_component_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"active\"><a [routerLink]=\"['Bootstrap-Third']\">Home</a></li>\n                        <li class=\"dropdown\">\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Click me for Menu <span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a [routerLink]=\"['Recipes']\">Recipes</a></li>\n                                <li><a [routerLink]=\"['ShoppingList']\">ShoppingList</a></li>\n                                <li><a [routerLink]=\"['My-form']\">My-form</a></li>\n                                <li><a [routerLink]=\"['Di-demo']\">Dependency-Injection</a></li>\n                                <li><a [routerLink]=\"['Data-flow']\">Data-flow</a></li>\n                                <li><a [routerLink]=\"['Http-rest']\">Http-rest</a></li>\n                                <li><a [routerLink]=\"['Contacts']\">Contact</a></li>\n                                <li><a [routerLink]=\"['Structural']\">Structural</a></li>\n                                <li><a [routerLink]=\"['Lifecycle']\">Lifecycle</a></li>\n                                <li><a [routerLink]=\"['JQuery']\">JQuery</a></li>\n                                <li><a [routerLink]=\"['Wiki-Http']\">Wiki-Http</a></li>\n                                <li><a [routerLink]=\"['Hierarchical-Dependency-Injection']\">Hierarchical-DI</a></li>\n                                <li><a [routerLink]=\"['Bootstrap']\">Bootstrap</a></li>\n                                <li><a [routerLink]=\"['Bootstrap-Second']\">Bootstrap-Second</a></li>\n                            </ul>\n                        </li>\n                        <li><a [routerLink]=\"['Attribute-Directive']\">Attribute-Directive</a></li>\n                        <li><a href=\"#\">Page 3</a></li>\n                    </ul>\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n                        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n                    </ul>\n                </div>\n            </div>\n    </nav>\n\n    \t\n    \t\n   \t<div class=\"main\">\n\t\t\t<router-outlet></router-outlet>\n   \t</div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
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
                        { path: '/bootstrap', name: 'Bootstrap', component: bootstrap_main_component_1.BootstrapMainComponent },
                        { path: '/attribute-directive', name: 'Attribute-Directive', component: attrubute_directive_app_component_1.AttributeDirectiveAppComponent },
                        { path: '/bootstrap-second', name: 'Bootstrap-Second', component: bootstrap_second_component_1.BootstrapSecondComponent, useAsDefault: true },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2RkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkEzRUQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHkvRkFpRFQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBRWxDLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7d0JBQ3ZFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFDO3dCQUM3RSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUNBQWUsRUFBQzt3QkFDL0QsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFDO3dCQUNqRSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsMENBQXVCLEVBQUM7d0JBQzNFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxvREFBdUIsRUFBQzt3QkFDM0UsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFDO3dCQUMzRSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsK0RBQTZCLEVBQUM7d0JBQ25GLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQzt3QkFDdEUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7d0JBQzdELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnREFBcUIsRUFBQzt3QkFDekUsRUFBQyxJQUFJLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLFNBQVMsRUFBRSxzRkFBd0MsRUFBQzt3QkFDNUksRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFDO3dCQUMxRSxFQUFDLElBQUksRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLGtFQUE4QixFQUFDO3dCQUN0RyxFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLHFEQUF3QixFQUFHLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQy9HLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUM7cUJBRTFGLENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBBdXhSb3V0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGVzQ29tcG9uZW50fSBmcm9tICcuL3JlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RDb21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TXlGb3JtQ29tcG9uZW50fSBmcm9tICcuL215LWZvcm0vbXktZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RJTWFzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9kaS9kaS1tYXN0ZXIuY29tcG9tZW50XCI7XHJcbmltcG9ydCB7RGF0YUZsb3dNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2RhdGEtZmxvdy9tYXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SFRUUFJlc3RNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2h0dHAtcmVzdC9odHRwLXJlc3QubWFzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbnRhY3RNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC5tYXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RydWN0dXJhbERpcmVjdGl2ZXNDb21wb25lbnR9IGZyb20gXCIuL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGlmZWN5Y2xlQ29tcG9uZW50fSBmcm9tIFwiLi9saWZlY3ljbGUtaG9va3MvbGlmZWN5Y2xlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0pxdWVyeUNvbXBvbmVudH0gZnJvbSBcIi4vanF1ZXJ5L2pxdWVyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXaWtpSHR0cE1haW5Db21wb25lbnR9IGZyb20gXCIuL3dpa2ktaHR0cC93aWtpLWh0dHAubWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIaWVyYXJjaGljYWxEZXBlbmRlbmN5SW5qZWN0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24vaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Jvb3RzdHJhcE1haW5Db21wb25lbnR9IGZyb20gXCIuL2Jvb3RzdHJhcC9ib290c3RyYXAtbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVBcHBDb21wb25lbnR9IGZyb20gXCIuL2F0dHJpYnV0ZS1kaXJlY3RpdmUvYXR0cnVidXRlLWRpcmVjdGl2ZS5hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qm9vdHN0cmFwU2Vjb25kQ29tcG9uZW50fSBmcm9tIFwiLi9ib290c3RyYXAvYm9vdHN0cmFwLXNlY29uZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtCb290c3RyYXBUaGlyZENvbXBvbmVudH0gZnJvbSBcIi4vYm9vdHN0cmFwL2Jvb3RzdHJhcC10aGlyZC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbXlOYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+V2ViU2l0ZU5hbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm15TmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+PGEgW3JvdXRlckxpbmtdPVwiWydCb290c3RyYXAtVGhpcmQnXVwiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGhyZWY9XCIjXCI+Q2xpY2sgbWUgZm9yIE1lbnUgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnUmVjaXBlcyddXCI+UmVjaXBlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1Nob3BwaW5nTGlzdCddXCI+U2hvcHBpbmdMaXN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnTXktZm9ybSddXCI+TXktZm9ybTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0RpLWRlbW8nXVwiPkRlcGVuZGVuY3ktSW5qZWN0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnRGF0YS1mbG93J11cIj5EYXRhLWZsb3c8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydIdHRwLXJlc3QnXVwiPkh0dHAtcmVzdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbnRhY3RzJ11cIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU3RydWN0dXJhbCddXCI+U3RydWN0dXJhbDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0xpZmVjeWNsZSddXCI+TGlmZWN5Y2xlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnSlF1ZXJ5J11cIj5KUXVlcnk8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydXaWtpLUh0dHAnXVwiPldpa2ktSHR0cDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0hpZXJhcmNoaWNhbC1EZXBlbmRlbmN5LUluamVjdGlvbiddXCI+SGllcmFyY2hpY2FsLURJPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQm9vdHN0cmFwJ11cIj5Cb290c3RyYXA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydCb290c3RyYXAtU2Vjb25kJ11cIj5Cb290c3RyYXAtU2Vjb25kPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydBdHRyaWJ1dGUtRGlyZWN0aXZlJ11cIj5BdHRyaWJ1dGUtRGlyZWN0aXZlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBhZ2UgMzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPiBTaWduIFVwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW5cIj48L3NwYW4+IExvZ2luPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG5cclxuICAgIFx0XHJcbiAgICBcdFxyXG4gICBcdDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcblx0XHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgXHQ8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcblxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6ICcvcmVjaXBlcy8uLi4nLCBuYW1lOiAnUmVjaXBlcycsIGNvbXBvbmVudDogUmVjaXBlc0NvbXBvbmVudH0sXHJcblx0e3BhdGg6ICcvc2hvcHBpbmctbGlzdCcsIG5hbWU6ICdTaG9wcGluZ0xpc3QnLCBjb21wb25lbnQ6IFNob3BwaW5nTGlzdENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9teS1mb3JtJywgbmFtZTogJ015LWZvcm0nLCBjb21wb25lbnQ6IE15Rm9ybUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9kaS1kZW1vJywgbmFtZTogJ0RpLWRlbW8nLCBjb21wb25lbnQ6IERJTWFzdGVyQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2RhdGEtZmxvdycsIG5hbWU6ICdEYXRhLWZsb3cnLCBjb21wb25lbnQ6IERhdGFGbG93TWFzdGVyQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2h0dHAtcmVzdCcsIG5hbWU6ICdIdHRwLXJlc3QnLCBjb21wb25lbnQ6IEhUVFBSZXN0TWFzdGVyQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2NvbnRhY3QvLi4uJywgbmFtZTogJ0NvbnRhY3RzJywgY29tcG9uZW50OiBDb250YWN0TWFzdGVyQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3N0cnVjdHVyYWwnLCBuYW1lOiAnU3RydWN0dXJhbCcsIGNvbXBvbmVudDogU3RydWN0dXJhbERpcmVjdGl2ZXNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvbGlmZWN5Y2xlJywgbmFtZTogJ0xpZmVjeWNsZScsIGNvbXBvbmVudDogTGlmZWN5Y2xlQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2pxdWVyeScsIG5hbWU6ICdKUXVlcnknLCBjb21wb25lbnQ6IEpxdWVyeUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy93aWtpLWh0dHAnLCBuYW1lOiAnV2lraS1IdHRwJywgY29tcG9uZW50OiBXaWtpSHR0cE1haW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uJywgbmFtZTogJ0hpZXJhcmNoaWNhbC1EZXBlbmRlbmN5LUluamVjdGlvbicsIGNvbXBvbmVudDogSGllcmFyY2hpY2FsRGVwZW5kZW5jeUluamVjdGlvbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9ib290c3RyYXAnLCBuYW1lOiAnQm9vdHN0cmFwJywgY29tcG9uZW50OiBCb290c3RyYXBNYWluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2F0dHJpYnV0ZS1kaXJlY3RpdmUnLCBuYW1lOiAnQXR0cmlidXRlLURpcmVjdGl2ZScsIGNvbXBvbmVudDogQXR0cmlidXRlRGlyZWN0aXZlQXBwQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2Jvb3RzdHJhcC1zZWNvbmQnLCBuYW1lOiAnQm9vdHN0cmFwLVNlY29uZCcsIGNvbXBvbmVudDogQm9vdHN0cmFwU2Vjb25kQ29tcG9uZW50LCAgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuICAgIHtwYXRoOiAnL2Jvb3RzdHJhcC10aGlyZCcsIG5hbWU6ICdCb290c3RyYXAtVGhpcmQnLCBjb21wb25lbnQ6IEJvb3RzdHJhcFRoaXJkQ29tcG9uZW50fVxyXG5cclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
