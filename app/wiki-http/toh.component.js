System.register(['angular2/core', 'angular2/http', './hero-list.component', './hero.service', 'a2-in-memory-web-api/core', './hero-data'], function(exports_1, context_1) {
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
    var core_1, http_1, hero_list_component_1, hero_service_1, core_2, http_2, core_3, hero_data_1;
    var TohComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (hero_data_1_1) {
                hero_data_1 = hero_data_1_1;
            }],
        execute: function() {
            TohComponent = (function () {
                function TohComponent() {
                }
                TohComponent = __decorate([
                    core_1.Component({
                        selector: 'my-toh',
                        template: "\n  <h1>Tour of Heroes</h1>\n  <hero-list></hero-list>\n  ",
                        directives: [hero_list_component_1.HeroListComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            hero_service_1.HeroService,
                            // in-memory web api providers
                            core_2.provide(http_2.XHRBackend, { useClass: core_3.InMemoryBackendService }),
                            core_2.provide(core_3.SEED_DATA, { useClass: hero_data_1.HeroData }) // in-mem server data
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TohComponent);
                return TohComponent;
            }());
            exports_1("TohComponent", TohComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC90b2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBQUE7Z0JBQTRCLENBQUM7Z0JBZjdCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw0REFHWDt3QkFDQyxVQUFVLEVBQUMsQ0FBQyx1Q0FBaUIsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFOzRCQUNQLHFCQUFjOzRCQUNkLDBCQUFXOzRCQUNYLDhCQUE4Qjs0QkFDOUIsY0FBTyxDQUFDLGlCQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQXNCLEVBQUUsQ0FBQzs0QkFDekQsY0FBTyxDQUFDLGdCQUFTLEVBQUcsRUFBRSxRQUFRLEVBQUUsb0JBQVEsRUFBRSxDQUFDLENBQUMscUJBQXFCO3lCQUNwRTtxQkFDSixDQUFDOztnQ0FBQTtnQkFDMEIsbUJBQUM7WUFBRCxDQUE1QixBQUE2QixJQUFBO1lBQTdCLHVDQUE2QixDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC90b2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50fSAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCB7SGVyb30gICAgICAgICAgICAgIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7SGVyb0xpc3RDb21wb25lbnR9IGZyb20gJy4vaGVyby1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGVyb1NlcnZpY2V9ICAgICAgIGZyb20gJy4vaGVyby5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7cHJvdmlkZX0gICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1hIUkJhY2tlbmR9ICAgICAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbi8vIGluLW1lbW9yeSB3ZWIgYXBpIGltcG9ydHNcclxuaW1wb3J0IHtJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlLCBTRUVEX0RBVEF9ICAgICAgICAgZnJvbSAnYTItaW4tbWVtb3J5LXdlYi1hcGkvY29yZSc7XHJcbmltcG9ydCB7SGVyb0RhdGF9ICAgICAgICAgIGZyb20gJy4vaGVyby1kYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS10b2gnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8aDE+VG91ciBvZiBIZXJvZXM8L2gxPlxyXG4gIDxoZXJvLWxpc3Q+PC9oZXJvLWxpc3Q+XHJcbiAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W0hlcm9MaXN0Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEhUVFBfUFJPVklERVJTLFxyXG4gICAgICAgIEhlcm9TZXJ2aWNlLFxyXG4gICAgICAgIC8vIGluLW1lbW9yeSB3ZWIgYXBpIHByb3ZpZGVyc1xyXG4gICAgICAgIHByb3ZpZGUoWEhSQmFja2VuZCwgeyB1c2VDbGFzczogSW5NZW1vcnlCYWNrZW5kU2VydmljZSB9KSwgLy8gaW4tbWVtIHNlcnZlclxyXG4gICAgICAgIHByb3ZpZGUoU0VFRF9EQVRBLCAgeyB1c2VDbGFzczogSGVyb0RhdGEgfSkgLy8gaW4tbWVtIHNlcnZlciBkYXRhXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2hDb21wb25lbnQgeyB9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
