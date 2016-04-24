System.register(['angular2/core', 'angular2/router', './recipe-book/recipes.component', './shopping-list/shopping-list.component', './my-form/my-form.component', "./di/di-master.compoment", "./data-flow/master.component", "./http-rest/http-rest.master.component", "./contact/contact.master.component", "./structural-directives/structural-directives.component", "./lifecycle-hooks/lifecycle-component", "./jquery/jquery.component", "./wiki-http/wiki-http.main.component", "./hierarchical-dependency-injection/hierarchical-dependency-injection.component", "./bootstrap/bootstrap-main.component", "./attribute-directive/attrubute-directive.app.component", "./bootstrap/bootstrap-second.component", "./bootstrap/bootstrap-third.component", "./template-syntax/template.app.component", "./rx-js/rx-js.component", "./pipe-example/pipe.main.component", "./di/di-data.service", "./host-listener/host-listener.component", "./query-list/query.container"], function(exports_1, context_1) {
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
    var core_1, router_1, recipes_component_1, shopping_list_component_1, my_form_component_1, di_master_compoment_1, master_component_1, http_rest_master_component_1, contact_master_component_1, structural_directives_component_1, lifecycle_component_1, jquery_component_1, wiki_http_main_component_1, hierarchical_dependency_injection_component_1, bootstrap_main_component_1, attrubute_directive_app_component_1, bootstrap_second_component_1, bootstrap_third_component_1, template_app_component_1, rx_js_component_1, pipe_main_component_1, di_data_service_1, host_listener_component_1, query_container_1;
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
            },
            function (di_data_service_1_1) {
                di_data_service_1 = di_data_service_1_1;
            },
            function (host_listener_component_1_1) {
                host_listener_component_1 = host_listener_component_1_1;
            },
            function (query_container_1_1) {
                query_container_1 = query_container_1_1;
            }],
        execute: function() {
            // moduleName is not set in some module loaders; set it explicitly
            if (!__moduleName) {
                __moduleName = "http://" + location.host + "/" + location.pathname + "/app/";
            }
            //console.log(`The __moduleName is ${__moduleName} `);
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-app',
                        template: "\n           <p><a [routerLink]=\"['Recipes']\">Recipes</a></p>\n  \t\t\t<router-outlet></router-outlet>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [di_data_service_1.DataService] // common for DIMasterComponent and HTTPRestMasterComponent
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Bootstrap-Second', component: bootstrap_second_component_1.BootstrapSecondComponent },
                        { path: '/recipes/...', name: 'Recipes', component: recipes_component_1.RecipesComponent },
                        { path: '/shopping-list', name: 'ShoppingList', component: shopping_list_component_1.ShoppingListComponent },
                        { path: '/my-form', name: 'My-form', component: my_form_component_1.MyFormComponent },
                        { path: '/di-demo', name: 'Di-demo', component: di_master_compoment_1.DIMasterComponent, useAsDefault: true },
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
                        { path: '/host-listener', name: 'HostListener-Example', component: host_listener_component_1.HostListenerComponent },
                        { path: '/q', name: 'QueryAppComponent-Example', component: query_container_1.QueryContainer },
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

//# sourceMappingURL=data:application/json;base64,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QUFFLHVDQUFpQixFQUFDO3dCQUMzRSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUM7d0JBQzFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUM7d0JBQ3hGLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFFLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUM7cUJBRzFGLENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBBdXhSb3V0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZWNpcGVzQ29tcG9uZW50fSBmcm9tICcuL3JlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RDb21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TXlGb3JtQ29tcG9uZW50fSBmcm9tICcuL215LWZvcm0vbXktZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RJTWFzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9kaS9kaS1tYXN0ZXIuY29tcG9tZW50XCI7XHJcbmltcG9ydCB7RGF0YUZsb3dNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2RhdGEtZmxvdy9tYXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SFRUUFJlc3RNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2h0dHAtcmVzdC9odHRwLXJlc3QubWFzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbnRhY3RNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC5tYXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RydWN0dXJhbERpcmVjdGl2ZXNDb21wb25lbnR9IGZyb20gXCIuL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGlmZWN5Y2xlQ29tcG9uZW50fSBmcm9tIFwiLi9saWZlY3ljbGUtaG9va3MvbGlmZWN5Y2xlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0pxdWVyeUNvbXBvbmVudH0gZnJvbSBcIi4vanF1ZXJ5L2pxdWVyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXaWtpSHR0cE1haW5Db21wb25lbnR9IGZyb20gXCIuL3dpa2ktaHR0cC93aWtpLWh0dHAubWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIaWVyYXJjaGljYWxEZXBlbmRlbmN5SW5qZWN0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24vaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Jvb3RzdHJhcE1haW5Db21wb25lbnR9IGZyb20gXCIuL2Jvb3RzdHJhcC9ib290c3RyYXAtbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVBcHBDb21wb25lbnR9IGZyb20gXCIuL2F0dHJpYnV0ZS1kaXJlY3RpdmUvYXR0cnVidXRlLWRpcmVjdGl2ZS5hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qm9vdHN0cmFwU2Vjb25kQ29tcG9uZW50fSBmcm9tIFwiLi9ib290c3RyYXAvYm9vdHN0cmFwLXNlY29uZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtCb290c3RyYXBUaGlyZENvbXBvbmVudH0gZnJvbSBcIi4vYm9vdHN0cmFwL2Jvb3RzdHJhcC10aGlyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUZW1wbGF0ZUFwcENvbXBvbmVudH0gZnJvbSBcIi4vdGVtcGxhdGUtc3ludGF4L3RlbXBsYXRlLmFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSWEpTQ29tcG9uZW50fSBmcm9tIFwiLi9yeC1qcy9yeC1qcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQaXBlTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vcGlwZS1leGFtcGxlL3BpcGUubWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vZGkvZGktZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SG9zdExpc3RlbmVyQ29tcG9uZW50fSBmcm9tIFwiLi9ob3N0LWxpc3RlbmVyL2hvc3QtbGlzdGVuZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQge1F1ZXJ5Q29udGFpbmVyfSBmcm9tIFwiLi9xdWVyeS1saXN0L3F1ZXJ5LmNvbnRhaW5lclwiO1xyXG5cclxuLy8gTGV0IFR5cGVTY3JpcHQga25vdyBhYm91dCB0aGUgc3BlY2lhbCBTeXN0ZW1KUyBfX21vZHVsZU5hbWUgdmFyaWFibGVcclxuZGVjbGFyZSB2YXIgX19tb2R1bGVOYW1lOiBzdHJpbmc7XHJcbi8vIG1vZHVsZU5hbWUgaXMgbm90IHNldCBpbiBzb21lIG1vZHVsZSBsb2FkZXJzOyBzZXQgaXQgZXhwbGljaXRseVxyXG5pZiAoIV9fbW9kdWxlTmFtZSkge1xyXG4gICAgX19tb2R1bGVOYW1lID0gYGh0dHA6Ly8ke2xvY2F0aW9uLmhvc3R9LyR7bG9jYXRpb24ucGF0aG5hbWV9L2FwcC9gO1xyXG59XHJcbi8vY29uc29sZS5sb2coYFRoZSBfX21vZHVsZU5hbWUgaXMgJHtfX21vZHVsZU5hbWV9IGApO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBfX21vZHVsZU5hbWUsXHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgIDxwPjxhIFtyb3V0ZXJMaW5rXT1cIlsnUmVjaXBlcyddXCI+UmVjaXBlczwvYT48L3A+XHJcbiAgXHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXSAvLyBjb21tb24gZm9yIERJTWFzdGVyQ29tcG9uZW50IGFuZCBIVFRQUmVzdE1hc3RlckNvbXBvbmVudFxyXG5cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL2hvbWUnLCBuYW1lOiAnQm9vdHN0cmFwLVNlY29uZCcsIGNvbXBvbmVudDogQm9vdHN0cmFwU2Vjb25kQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3JlY2lwZXMvLi4uJywgbmFtZTogJ1JlY2lwZXMnLCBjb21wb25lbnQ6IFJlY2lwZXNDb21wb25lbnR9LFxyXG5cdHtwYXRoOiAnL3Nob3BwaW5nLWxpc3QnLCBuYW1lOiAnU2hvcHBpbmdMaXN0JywgY29tcG9uZW50OiBTaG9wcGluZ0xpc3RDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvbXktZm9ybScsIG5hbWU6ICdNeS1mb3JtJywgY29tcG9uZW50OiBNeUZvcm1Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvZGktZGVtbycsIG5hbWU6ICdEaS1kZW1vJywgY29tcG9uZW50OiBESU1hc3RlckNvbXBvbmVudCwgIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9kYXRhLWZsb3cnLCBuYW1lOiAnRGF0YS1mbG93JywgY29tcG9uZW50OiBEYXRhRmxvd01hc3RlckNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9odHRwLXJlc3QnLCBuYW1lOiAnSHR0cC1yZXN0JywgY29tcG9uZW50OiBIVFRQUmVzdE1hc3RlckNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9jb250YWN0Ly4uLicsIG5hbWU6ICdDb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdE1hc3RlckNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9zdHJ1Y3R1cmFsJywgbmFtZTogJ1N0cnVjdHVyYWwnLCBjb21wb25lbnQ6IFN0cnVjdHVyYWxEaXJlY3RpdmVzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2xpZmVjeWNsZScsIG5hbWU6ICdMaWZlY3ljbGUnLCBjb21wb25lbnQ6IExpZmVjeWNsZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9qcXVlcnknLCBuYW1lOiAnSlF1ZXJ5JywgY29tcG9uZW50OiBKcXVlcnlDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvd2lraS1odHRwJywgbmFtZTogJ1dpa2ktSHR0cCcsIGNvbXBvbmVudDogV2lraUh0dHBNYWluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2hpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbicsIG5hbWU6ICdIaWVyYXJjaGljYWwtRGVwZW5kZW5jeS1JbmplY3Rpb24nLCBjb21wb25lbnQ6IEhpZXJhcmNoaWNhbERlcGVuZGVuY3lJbmplY3Rpb25Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvdGVtcGxhdGUtc3ludGF4JywgbmFtZTogJ1RlbXBsYXRlLVN5bnRheCcsIGNvbXBvbmVudDogVGVtcGxhdGVBcHBDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvYXR0cmlidXRlLWRpcmVjdGl2ZScsIG5hbWU6ICdBdHRyaWJ1dGUtRGlyZWN0aXZlJywgY29tcG9uZW50OiBBdHRyaWJ1dGVEaXJlY3RpdmVBcHBDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvcngtanMnLCBuYW1lOiAnUngtSnMnLCBjb21wb25lbnQ6IFJYSlNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvcGlwZS1leGFtcGxlJywgbmFtZTogJ1BpcGUtRXhhbXBsZScsIGNvbXBvbmVudDogUGlwZU1haW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvYm9vdHN0cmFwJywgbmFtZTogJ0Jvb3RzdHJhcCcsIGNvbXBvbmVudDogQm9vdHN0cmFwTWFpbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9ob3N0LWxpc3RlbmVyJywgbmFtZTogJ0hvc3RMaXN0ZW5lci1FeGFtcGxlJywgY29tcG9uZW50OiBIb3N0TGlzdGVuZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvcScsIG5hbWU6ICdRdWVyeUFwcENvbXBvbmVudC1FeGFtcGxlJywgY29tcG9uZW50OiBRdWVyeUNvbnRhaW5lcn0sXHJcbiAgICB7cGF0aDogJy9ib290c3RyYXAtdGhpcmQnLCBuYW1lOiAnQm9vdHN0cmFwLVRoaXJkJywgY29tcG9uZW50OiBCb290c3RyYXBUaGlyZENvbXBvbmVudH1cclxuXHJcblxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
