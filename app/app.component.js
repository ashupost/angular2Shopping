System.register(['angular2/core', 'angular2/router', './recipe-book/recipes.component', './shopping-list/shopping-list.component', './my-form/my-form.component', "./di/di-master.compoment", "./data-flow/master.component", "./http-rest/http-rest.master.component", "./contact/contact.master.component", "./structural-directives/structural-directives.component", "./lifecycle-hooks/lifecycle-component", "./jquery/jquery.component", "./wiki-http/wiki-http.main.component", "./hierarchical-dependency-injection/hierarchical-dependency-injection.component", "./bootstrap/bootstrap-main.component", "./attribute-directive/attrubute-directive.app.component", "./bootstrap/bootstrap-second.component", "./bootstrap/bootstrap-third.component", "./template-syntax/template.app.component", "./rx-js/rx-js.component", "./pipe-example/pipe.main.component", "./di/di-data.service", "./host-listener/host-listener.component", "./index/index.component", "./query-list/query.container"], function(exports_1, context_1) {
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
    var core_1, router_1, recipes_component_1, shopping_list_component_1, my_form_component_1, di_master_compoment_1, master_component_1, http_rest_master_component_1, contact_master_component_1, structural_directives_component_1, lifecycle_component_1, jquery_component_1, wiki_http_main_component_1, hierarchical_dependency_injection_component_1, bootstrap_main_component_1, attrubute_directive_app_component_1, bootstrap_second_component_1, bootstrap_third_component_1, template_app_component_1, rx_js_component_1, pipe_main_component_1, di_data_service_1, host_listener_component_1, index_component_1, query_container_1;
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
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
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
                        template: "\n           <my-index>Loading.....</my-index>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES, index_component_1.IndexComponent],
                        providers: [di_data_service_1.DataService] // common for DIMasterComponent and HTTPRestMasterComponent
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Bootstrap-Second', component: bootstrap_second_component_1.BootstrapSecondComponent, useAsDefault: true },
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
                        { path: '/host-listener', name: 'HostListener-Example', component: host_listener_component_1.HostListenerComponent },
                        { path: '/queryapp', name: 'QueryAppComponent', component: query_container_1.QueryContainer },
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

//# sourceMappingURL=data:application/json;base64,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QWMsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUM7d0JBQzNFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBQzt3QkFDMUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQzt3QkFDeEYsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQzt3QkFDekUsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBQztxQkFHMUYsQ0FBQzs7Z0NBQUE7Z0JBRUYsbUJBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELHVDQUNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIEF1eFJvdXRlfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JlY2lwZXNDb21wb25lbnR9IGZyb20gJy4vcmVjaXBlLWJvb2svcmVjaXBlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdENvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtNeUZvcm1Db21wb25lbnR9IGZyb20gJy4vbXktZm9ybS9teS1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RElNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2RpL2RpLW1hc3Rlci5jb21wb21lbnRcIjtcclxuaW1wb3J0IHtEYXRhRmxvd01hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vZGF0YS1mbG93L21hc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIVFRQUmVzdE1hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vaHR0cC1yZXN0L2h0dHAtcmVzdC5tYXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29udGFjdE1hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0Lm1hc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdHJ1Y3R1cmFsRGlyZWN0aXZlc0NvbXBvbmVudH0gZnJvbSBcIi4vc3RydWN0dXJhbC1kaXJlY3RpdmVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMaWZlY3ljbGVDb21wb25lbnR9IGZyb20gXCIuL2xpZmVjeWNsZS1ob29rcy9saWZlY3ljbGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SnF1ZXJ5Q29tcG9uZW50fSBmcm9tIFwiLi9qcXVlcnkvanF1ZXJ5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1dpa2lIdHRwTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vd2lraS1odHRwL3dpa2ktaHR0cC5tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hpZXJhcmNoaWNhbERlcGVuZGVuY3lJbmplY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL2hpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qm9vdHN0cmFwTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vYm9vdHN0cmFwL2Jvb3RzdHJhcC1tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F0dHJpYnV0ZURpcmVjdGl2ZUFwcENvbXBvbmVudH0gZnJvbSBcIi4vYXR0cmlidXRlLWRpcmVjdGl2ZS9hdHRydWJ1dGUtZGlyZWN0aXZlLmFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtCb290c3RyYXBTZWNvbmRDb21wb25lbnR9IGZyb20gXCIuL2Jvb3RzdHJhcC9ib290c3RyYXAtc2Vjb25kLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFRoaXJkQ29tcG9uZW50fSBmcm9tIFwiLi9ib290c3RyYXAvYm9vdHN0cmFwLXRoaXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RlbXBsYXRlQXBwQ29tcG9uZW50fSBmcm9tIFwiLi90ZW1wbGF0ZS1zeW50YXgvdGVtcGxhdGUuYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JYSlNDb21wb25lbnR9IGZyb20gXCIuL3J4LWpzL3J4LWpzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1BpcGVNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9waXBlLWV4YW1wbGUvcGlwZS5tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9kaS9kaS1kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIb3N0TGlzdGVuZXJDb21wb25lbnR9IGZyb20gXCIuL2hvc3QtbGlzdGVuZXIvaG9zdC1saXN0ZW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtJbmRleENvbXBvbmVudH0gZnJvbSBcIi4vaW5kZXgvaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UXVlcnlDb250YWluZXJ9IGZyb20gXCIuL3F1ZXJ5LWxpc3QvcXVlcnkuY29udGFpbmVyXCI7XHJcblxyXG4vLyBMZXQgVHlwZVNjcmlwdCBrbm93IGFib3V0IHRoZSBzcGVjaWFsIFN5c3RlbUpTIF9fbW9kdWxlTmFtZSB2YXJpYWJsZVxyXG5kZWNsYXJlIHZhciBfX21vZHVsZU5hbWU6IHN0cmluZztcclxuLy8gbW9kdWxlTmFtZSBpcyBub3Qgc2V0IGluIHNvbWUgbW9kdWxlIGxvYWRlcnM7IHNldCBpdCBleHBsaWNpdGx5XHJcbmlmICghX19tb2R1bGVOYW1lKSB7XHJcbiAgICBfX21vZHVsZU5hbWUgPSBgaHR0cDovLyR7bG9jYXRpb24uaG9zdH0vJHtsb2NhdGlvbi5wYXRobmFtZX0vYXBwL2A7XHJcbn1cclxuLy9jb25zb2xlLmxvZyhgVGhlIF9fbW9kdWxlTmFtZSBpcyAke19fbW9kdWxlTmFtZX0gYCk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IF9fbW9kdWxlTmFtZSxcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgPG15LWluZGV4PkxvYWRpbmcuLi4uLjwvbXktaW5kZXg+XHJcbiAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEluZGV4Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXSAvLyBjb21tb24gZm9yIERJTWFzdGVyQ29tcG9uZW50IGFuZCBIVFRQUmVzdE1hc3RlckNvbXBvbmVudFxyXG5cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL2hvbWUnLCBuYW1lOiAnQm9vdHN0cmFwLVNlY29uZCcsIGNvbXBvbmVudDogQm9vdHN0cmFwU2Vjb25kQ29tcG9uZW50LCAgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuICAgIHtwYXRoOiAnL3JlY2lwZXMvLi4uJywgbmFtZTogJ1JlY2lwZXMnLCBjb21wb25lbnQ6IFJlY2lwZXNDb21wb25lbnR9LFxyXG5cdHtwYXRoOiAnL3Nob3BwaW5nLWxpc3QnLCBuYW1lOiAnU2hvcHBpbmdMaXN0JywgY29tcG9uZW50OiBTaG9wcGluZ0xpc3RDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvbXktZm9ybScsIG5hbWU6ICdNeS1mb3JtJywgY29tcG9uZW50OiBNeUZvcm1Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvZGktZGVtbycsIG5hbWU6ICdEaS1kZW1vJywgY29tcG9uZW50OiBESU1hc3RlckNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9kYXRhLWZsb3cnLCBuYW1lOiAnRGF0YS1mbG93JywgY29tcG9uZW50OiBEYXRhRmxvd01hc3RlckNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9odHRwLXJlc3QnLCBuYW1lOiAnSHR0cC1yZXN0JywgY29tcG9uZW50OiBIVFRQUmVzdE1hc3RlckNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9jb250YWN0Ly4uLicsIG5hbWU6ICdDb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdE1hc3RlckNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9zdHJ1Y3R1cmFsJywgbmFtZTogJ1N0cnVjdHVyYWwnLCBjb21wb25lbnQ6IFN0cnVjdHVyYWxEaXJlY3RpdmVzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2xpZmVjeWNsZScsIG5hbWU6ICdMaWZlY3ljbGUnLCBjb21wb25lbnQ6IExpZmVjeWNsZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9qcXVlcnknLCBuYW1lOiAnSlF1ZXJ5JywgY29tcG9uZW50OiBKcXVlcnlDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvd2lraS1odHRwJywgbmFtZTogJ1dpa2ktSHR0cCcsIGNvbXBvbmVudDogV2lraUh0dHBNYWluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2hpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbicsIG5hbWU6ICdIaWVyYXJjaGljYWwtRGVwZW5kZW5jeS1JbmplY3Rpb24nLCBjb21wb25lbnQ6IEhpZXJhcmNoaWNhbERlcGVuZGVuY3lJbmplY3Rpb25Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvdGVtcGxhdGUtc3ludGF4JywgbmFtZTogJ1RlbXBsYXRlLVN5bnRheCcsIGNvbXBvbmVudDogVGVtcGxhdGVBcHBDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvYXR0cmlidXRlLWRpcmVjdGl2ZScsIG5hbWU6ICdBdHRyaWJ1dGUtRGlyZWN0aXZlJywgY29tcG9uZW50OiBBdHRyaWJ1dGVEaXJlY3RpdmVBcHBDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvcngtanMnLCBuYW1lOiAnUngtSnMnLCBjb21wb25lbnQ6IFJYSlNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvcGlwZS1leGFtcGxlJywgbmFtZTogJ1BpcGUtRXhhbXBsZScsIGNvbXBvbmVudDogUGlwZU1haW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvYm9vdHN0cmFwJywgbmFtZTogJ0Jvb3RzdHJhcCcsIGNvbXBvbmVudDogQm9vdHN0cmFwTWFpbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9ob3N0LWxpc3RlbmVyJywgbmFtZTogJ0hvc3RMaXN0ZW5lci1FeGFtcGxlJywgY29tcG9uZW50OiBIb3N0TGlzdGVuZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvcXVlcnlhcHAnLCBuYW1lOiAnUXVlcnlBcHBDb21wb25lbnQnLCBjb21wb25lbnQ6IFF1ZXJ5Q29udGFpbmVyfSxcclxuICAgIHtwYXRoOiAnL2Jvb3RzdHJhcC10aGlyZCcsIG5hbWU6ICdCb290c3RyYXAtVGhpcmQnLCBjb21wb25lbnQ6IEJvb3RzdHJhcFRoaXJkQ29tcG9uZW50fVxyXG5cclxuXHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
