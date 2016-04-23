System.register(['angular2/core', 'angular2/router', './recipe-book/recipes.component', './shopping-list/shopping-list.component', './my-form/my-form.component', "./di/di-master.compoment", "./data-flow/master.component", "./http-rest/http-rest.master.component", "./contact/contact.master.component", "./structural-directives/structural-directives.component", "./lifecycle-hooks/lifecycle-component", "./jquery/jquery.component", "./wiki-http/wiki-http.main.component", "./hierarchical-dependency-injection/hierarchical-dependency-injection.component", "./bootstrap/bootstrap-main.component", "./attribute-directive/attrubute-directive.app.component", "./bootstrap/bootstrap-second.component", "./bootstrap/bootstrap-third.component", "./template-syntax/template.app.component", "./rx-js/rx-js.component", "./pipe-example/pipe.main.component", "./di/di-data.service"], function(exports_1, context_1) {
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
    var core_1, router_1, recipes_component_1, shopping_list_component_1, my_form_component_1, di_master_compoment_1, master_component_1, http_rest_master_component_1, contact_master_component_1, structural_directives_component_1, lifecycle_component_1, jquery_component_1, wiki_http_main_component_1, hierarchical_dependency_injection_component_1, bootstrap_main_component_1, attrubute_directive_app_component_1, bootstrap_second_component_1, bootstrap_third_component_1, template_app_component_1, rx_js_component_1, pipe_main_component_1, di_data_service_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  \t\t\t<router-outlet></router-outlet>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [di_data_service_1.DataService] // common for DIMasterComponent and HTTPRestMasterComponent
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

//# sourceMappingURL=data:application/json;base64,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Qzs7Z0NBQUE7Z0JBRUYsbUJBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELHVDQUNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIEF1eFJvdXRlfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JlY2lwZXNDb21wb25lbnR9IGZyb20gJy4vcmVjaXBlLWJvb2svcmVjaXBlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdENvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtNeUZvcm1Db21wb25lbnR9IGZyb20gJy4vbXktZm9ybS9teS1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RElNYXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL2RpL2RpLW1hc3Rlci5jb21wb21lbnRcIjtcclxuaW1wb3J0IHtEYXRhRmxvd01hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vZGF0YS1mbG93L21hc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIVFRQUmVzdE1hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vaHR0cC1yZXN0L2h0dHAtcmVzdC5tYXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29udGFjdE1hc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0Lm1hc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdHJ1Y3R1cmFsRGlyZWN0aXZlc0NvbXBvbmVudH0gZnJvbSBcIi4vc3RydWN0dXJhbC1kaXJlY3RpdmVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMaWZlY3ljbGVDb21wb25lbnR9IGZyb20gXCIuL2xpZmVjeWNsZS1ob29rcy9saWZlY3ljbGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SnF1ZXJ5Q29tcG9uZW50fSBmcm9tIFwiLi9qcXVlcnkvanF1ZXJ5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1dpa2lIdHRwTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vd2lraS1odHRwL3dpa2ktaHR0cC5tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hpZXJhcmNoaWNhbERlcGVuZGVuY3lJbmplY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL2hpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qm9vdHN0cmFwTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vYm9vdHN0cmFwL2Jvb3RzdHJhcC1tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F0dHJpYnV0ZURpcmVjdGl2ZUFwcENvbXBvbmVudH0gZnJvbSBcIi4vYXR0cmlidXRlLWRpcmVjdGl2ZS9hdHRydWJ1dGUtZGlyZWN0aXZlLmFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtCb290c3RyYXBTZWNvbmRDb21wb25lbnR9IGZyb20gXCIuL2Jvb3RzdHJhcC9ib290c3RyYXAtc2Vjb25kLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFRoaXJkQ29tcG9uZW50fSBmcm9tIFwiLi9ib290c3RyYXAvYm9vdHN0cmFwLXRoaXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RlbXBsYXRlQXBwQ29tcG9uZW50fSBmcm9tIFwiLi90ZW1wbGF0ZS1zeW50YXgvdGVtcGxhdGUuYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JYSlNDb21wb25lbnR9IGZyb20gXCIuL3J4LWpzL3J4LWpzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1BpcGVNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9waXBlLWV4YW1wbGUvcGlwZS5tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9kaS9kaS1kYXRhLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICBcdFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdIC8vIGNvbW1vbiBmb3IgRElNYXN0ZXJDb21wb25lbnQgYW5kIEhUVFBSZXN0TWFzdGVyQ29tcG9uZW50XHJcblxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6ICcvJywgbmFtZTogJ0Jvb3RzdHJhcC1TZWNvbmQnLCBjb21wb25lbnQ6IEJvb3RzdHJhcFNlY29uZENvbXBvbmVudCwgIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9yZWNpcGVzLy4uLicsIG5hbWU6ICdSZWNpcGVzJywgY29tcG9uZW50OiBSZWNpcGVzQ29tcG9uZW50fSxcclxuXHR7cGF0aDogJy9zaG9wcGluZy1saXN0JywgbmFtZTogJ1Nob3BwaW5nTGlzdCcsIGNvbXBvbmVudDogU2hvcHBpbmdMaXN0Q29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL215LWZvcm0nLCBuYW1lOiAnTXktZm9ybScsIGNvbXBvbmVudDogTXlGb3JtQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2RpLWRlbW8nLCBuYW1lOiAnRGktZGVtbycsIGNvbXBvbmVudDogRElNYXN0ZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvZGF0YS1mbG93JywgbmFtZTogJ0RhdGEtZmxvdycsIGNvbXBvbmVudDogRGF0YUZsb3dNYXN0ZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvaHR0cC1yZXN0JywgbmFtZTogJ0h0dHAtcmVzdCcsIGNvbXBvbmVudDogSFRUUFJlc3RNYXN0ZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvY29udGFjdC8uLi4nLCBuYW1lOiAnQ29udGFjdHMnLCBjb21wb25lbnQ6IENvbnRhY3RNYXN0ZXJDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvc3RydWN0dXJhbCcsIG5hbWU6ICdTdHJ1Y3R1cmFsJywgY29tcG9uZW50OiBTdHJ1Y3R1cmFsRGlyZWN0aXZlc0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9saWZlY3ljbGUnLCBuYW1lOiAnTGlmZWN5Y2xlJywgY29tcG9uZW50OiBMaWZlY3ljbGVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvanF1ZXJ5JywgbmFtZTogJ0pRdWVyeScsIGNvbXBvbmVudDogSnF1ZXJ5Q29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3dpa2ktaHR0cCcsIG5hbWU6ICdXaWtpLUh0dHAnLCBjb21wb25lbnQ6IFdpa2lIdHRwTWFpbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24nLCBuYW1lOiAnSGllcmFyY2hpY2FsLURlcGVuZGVuY3ktSW5qZWN0aW9uJywgY29tcG9uZW50OiBIaWVyYXJjaGljYWxEZXBlbmRlbmN5SW5qZWN0aW9uQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3RlbXBsYXRlLXN5bnRheCcsIG5hbWU6ICdUZW1wbGF0ZS1TeW50YXgnLCBjb21wb25lbnQ6IFRlbXBsYXRlQXBwQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2F0dHJpYnV0ZS1kaXJlY3RpdmUnLCBuYW1lOiAnQXR0cmlidXRlLURpcmVjdGl2ZScsIGNvbXBvbmVudDogQXR0cmlidXRlRGlyZWN0aXZlQXBwQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3J4LWpzJywgbmFtZTogJ1J4LUpzJywgY29tcG9uZW50OiBSWEpTQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3BpcGUtZXhhbXBsZScsIG5hbWU6ICdQaXBlLUV4YW1wbGUnLCBjb21wb25lbnQ6IFBpcGVNYWluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL2Jvb3RzdHJhcCcsIG5hbWU6ICdCb290c3RyYXAnLCBjb21wb25lbnQ6IEJvb3RzdHJhcE1haW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvYm9vdHN0cmFwLXRoaXJkJywgbmFtZTogJ0Jvb3RzdHJhcC1UaGlyZCcsIGNvbXBvbmVudDogQm9vdHN0cmFwVGhpcmRDb21wb25lbnR9XHJcblxyXG5cclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
