System.register(['angular2/core', 'angular2/router', './recipe-book/recipes.component', './shopping-list/shopping-list.component', './my-form/my-form.component', "./di/di-master.compoment", "./data-flow/master.component", "./http-rest/http-rest.master.component", "./contact/contact.master.component", "./structural-directives/structural-directives.component", "./lifecycle-hooks/lifecycle-component", "./jquery/jquery.component", "./wiki-http/wiki-http.main.component", "./hierarchical-dependency-injection/hierarchical-dependency-injection.component", "./bootstrap/bootstrap-main.component", "./attribute-directive/attrubute-directive.app.component", "./bootstrap/bootstrap-second.component", "./bootstrap/bootstrap-third.component", "./template-syntax/template.app.component", "./rx-js/rx-js.component", "./pipe-example/pipe.main.component"], function(exports_1, context_1) {
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
    var core_1, router_1, recipes_component_1, shopping_list_component_1, my_form_component_1, di_master_compoment_1, master_component_1, http_rest_master_component_1, contact_master_component_1, structural_directives_component_1, lifecycle_component_1, jquery_component_1, wiki_http_main_component_1, hierarchical_dependency_injection_component_1, bootstrap_main_component_1, attrubute_directive_app_component_1, bootstrap_second_component_1, bootstrap_third_component_1, template_app_component_1, rx_js_component_1, pipe_main_component_1;
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
            },
            function (pipe_main_component_1_1) {
                pipe_main_component_1 = pipe_main_component_1_1;
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
                        { path: '/pipe-example', name: 'Pipe-Example', component: pipe_main_component_1.PipeMainComponent },
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

//# sourceMappingURL=data:application/json;base64,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dUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgQXV4Um91dGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7UmVjaXBlc0NvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGUtYm9vay9yZWNpcGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0Q29tcG9uZW50fSBmcm9tICcuL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge015Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9teS1mb3JtL215LWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHtESU1hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vZGkvZGktbWFzdGVyLmNvbXBvbWVudFwiO1xyXG5pbXBvcnQge0RhdGFGbG93TWFzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9kYXRhLWZsb3cvbWFzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hUVFBSZXN0TWFzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9odHRwLXJlc3QvaHR0cC1yZXN0Lm1hc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb250YWN0TWFzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0L2NvbnRhY3QubWFzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N0cnVjdHVyYWxEaXJlY3RpdmVzQ29tcG9uZW50fSBmcm9tIFwiLi9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMvc3RydWN0dXJhbC1kaXJlY3RpdmVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xpZmVjeWNsZUNvbXBvbmVudH0gZnJvbSBcIi4vbGlmZWN5Y2xlLWhvb2tzL2xpZmVjeWNsZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtKcXVlcnlDb21wb25lbnR9IGZyb20gXCIuL2pxdWVyeS9qcXVlcnkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7V2lraUh0dHBNYWluQ29tcG9uZW50fSBmcm9tIFwiLi93aWtpLWh0dHAvd2lraS1odHRwLm1haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SGllcmFyY2hpY2FsRGVwZW5kZW5jeUluamVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uL2hpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtCb290c3RyYXBNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9ib290c3RyYXAvYm9vdHN0cmFwLW1haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXR0cmlidXRlRGlyZWN0aXZlQXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hdHRyaWJ1dGUtZGlyZWN0aXZlL2F0dHJ1YnV0ZS1kaXJlY3RpdmUuYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFNlY29uZENvbXBvbmVudH0gZnJvbSBcIi4vYm9vdHN0cmFwL2Jvb3RzdHJhcC1zZWNvbmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qm9vdHN0cmFwVGhpcmRDb21wb25lbnR9IGZyb20gXCIuL2Jvb3RzdHJhcC9ib290c3RyYXAtdGhpcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGVtcGxhdGVBcHBDb21wb25lbnR9IGZyb20gXCIuL3RlbXBsYXRlLXN5bnRheC90ZW1wbGF0ZS5hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UlhKU0NvbXBvbmVudH0gZnJvbSBcIi4vcngtanMvcngtanMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UGlwZU1haW5Db21wb25lbnR9IGZyb20gXCIuL3BpcGUtZXhhbXBsZS9waXBlLm1haW4uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgIDwhLS1cclxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbXlOYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+V2ViU2l0ZU5hbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm15TmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+PGEgW3JvdXRlckxpbmtdPVwiWydCb290c3RyYXAtVGhpcmQnXVwiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGhyZWY9XCIjXCI+Q2xpY2sgbWUgZm9yIE1lbnUgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnUmVjaXBlcyddXCI+UmVjaXBlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1Nob3BwaW5nTGlzdCddXCI+U2hvcHBpbmdMaXN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnTXktZm9ybSddXCI+TXktZm9ybTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0RpLWRlbW8nXVwiPkRlcGVuZGVuY3ktSW5qZWN0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnRGF0YS1mbG93J11cIj5EYXRhLWZsb3c8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydIdHRwLXJlc3QnXVwiPkh0dHAtcmVzdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbnRhY3RzJ11cIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU3RydWN0dXJhbCddXCI+U3RydWN0dXJhbDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0xpZmVjeWNsZSddXCI+TGlmZWN5Y2xlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnSlF1ZXJ5J11cIj5KUXVlcnk8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydXaWtpLUh0dHAnXVwiPldpa2ktSHR0cDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0hpZXJhcmNoaWNhbC1EZXBlbmRlbmN5LUluamVjdGlvbiddXCI+SGllcmFyY2hpY2FsLURJPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQm9vdHN0cmFwJ11cIj5Cb290c3RyYXA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydCb290c3RyYXAtU2Vjb25kJ11cIj5Cb290c3RyYXAtU2Vjb25kPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnVG9vdHN0cmFwLVRoaXJkJ11cIj5Ub290c3RyYXAtVGhpcmQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0F0dHJpYnV0ZS1EaXJlY3RpdmUnXVwiPkF0dHJpYnV0ZS1EaXJlY3RpdmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UGFnZSAzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcIj48L3NwYW4+IFNpZ24gVXA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblwiPjwvc3Bhbj4gTG9naW48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgICAtLT5cclxuICAgXHJcblx0XHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgXHRcclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcblxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6ICcvJywgbmFtZTogJ0Jvb3RzdHJhcC1TZWNvbmQnLCBjb21wb25lbnQ6IEJvb3RzdHJhcFNlY29uZENvbXBvbmVudCwgIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9yZWNpcGVzLy4uLicsIG5hbWU6ICdSZWNpcGVzJywgY29tcG9uZW50OiBSZWNpcGVzQ29tcG9uZW50fSxcclxuXHR7cGF0aDogJy9zaG9wcGluZy1saXN0JywgbmFtZTogJ1Nob3BwaW5nTGlzdCcsIGNvbXBvbmVudDogU2hvcHBpbmdMaXN0Q29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL215LWZvcm0nLCBuYW1lOiAnTXktZm9ybScsIGNvbXBvbmVudDogTXlGb3JtQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2RpLWRlbW8nLCBuYW1lOiAnRGktZGVtbycsIGNvbXBvbmVudDogRElNYXN0ZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvZGF0YS1mbG93JywgbmFtZTogJ0RhdGEtZmxvdycsIGNvbXBvbmVudDogRGF0YUZsb3dNYXN0ZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvaHR0cC1yZXN0JywgbmFtZTogJ0h0dHAtcmVzdCcsIGNvbXBvbmVudDogSFRUUFJlc3RNYXN0ZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvY29udGFjdC8uLi4nLCBuYW1lOiAnQ29udGFjdHMnLCBjb21wb25lbnQ6IENvbnRhY3RNYXN0ZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvc3RydWN0dXJhbCcsIG5hbWU6ICdTdHJ1Y3R1cmFsJywgY29tcG9uZW50OiBTdHJ1Y3R1cmFsRGlyZWN0aXZlc0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9saWZlY3ljbGUnLCBuYW1lOiAnTGlmZWN5Y2xlJywgY29tcG9uZW50OiBMaWZlY3ljbGVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvanF1ZXJ5JywgbmFtZTogJ0pRdWVyeScsIGNvbXBvbmVudDogSnF1ZXJ5Q29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3dpa2ktaHR0cCcsIG5hbWU6ICdXaWtpLUh0dHAnLCBjb21wb25lbnQ6IFdpa2lIdHRwTWFpbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24nLCBuYW1lOiAnSGllcmFyY2hpY2FsLURlcGVuZGVuY3ktSW5qZWN0aW9uJywgY29tcG9uZW50OiBIaWVyYXJjaGljYWxEZXBlbmRlbmN5SW5qZWN0aW9uQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3RlbXBsYXRlLXN5bnRheCcsIG5hbWU6ICdUZW1wbGF0ZS1TeW50YXgnLCBjb21wb25lbnQ6IFRlbXBsYXRlQXBwQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2F0dHJpYnV0ZS1kaXJlY3RpdmUnLCBuYW1lOiAnQXR0cmlidXRlLURpcmVjdGl2ZScsIGNvbXBvbmVudDogQXR0cmlidXRlRGlyZWN0aXZlQXBwQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3J4LWpzJywgbmFtZTogJ1J4LUpzJywgY29tcG9uZW50OiBSWEpTQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3BpcGUtZXhhbXBsZScsIG5hbWU6ICdQaXBlLUV4YW1wbGUnLCBjb21wb25lbnQ6IFBpcGVNYWluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2Jvb3RzdHJhcCcsIG5hbWU6ICdCb290c3RyYXAnLCBjb21wb25lbnQ6IEJvb3RzdHJhcE1haW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvYm9vdHN0cmFwLXRoaXJkJywgbmFtZTogJ0Jvb3RzdHJhcC1UaGlyZCcsIGNvbXBvbmVudDogQm9vdHN0cmFwVGhpcmRDb21wb25lbnR9XHJcblxyXG5cclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
