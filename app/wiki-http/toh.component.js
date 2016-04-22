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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC90b2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBQUE7Z0JBQTRCLENBQUM7Z0JBZjdCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw0REFHWDt3QkFDQyxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFHOzRCQUNSLHFCQUFjOzRCQUNkLDBCQUFXOzRCQUNYLDhCQUE4Qjs0QkFDOUIsY0FBTyxDQUFDLGlCQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQXNCLEVBQUUsQ0FBQzs0QkFDekQsY0FBTyxDQUFDLGdCQUFTLEVBQUcsRUFBRSxRQUFRLEVBQUUsb0JBQVEsRUFBRSxDQUFDLENBQUMscUJBQXFCO3lCQUNwRTtxQkFDSixDQUFDOztnQ0FBQTtnQkFDMEIsbUJBQUM7WUFBRCxDQUE1QixBQUE2QixJQUFBO1lBQTdCLHVDQUE2QixDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC90b2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCB9ICAgICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBIZXJvTGlzdENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gICAgICAgZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgcHJvdmlkZSB9ICAgICAgICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgWEhSQmFja2VuZCB9ICAgICAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbi8vIGluLW1lbW9yeSB3ZWIgYXBpIGltcG9ydHNcclxuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kU2VydmljZSxcclxuICAgIFNFRURfREFUQSB9ICAgICAgICAgZnJvbSAnYTItaW4tbWVtb3J5LXdlYi1hcGkvY29yZSc7XHJcbmltcG9ydCB7IEhlcm9EYXRhIH0gICAgICAgICAgZnJvbSAnLi9oZXJvLWRhdGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXRvaCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxoMT5Ub3VyIG9mIEhlcm9lczwvaDE+XHJcbiAgPGhlcm8tbGlzdD48L2hlcm8tbGlzdD5cclxuICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0hlcm9MaXN0Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogIFtcclxuICAgICAgICBIVFRQX1BST1ZJREVSUyxcclxuICAgICAgICBIZXJvU2VydmljZSxcclxuICAgICAgICAvLyBpbi1tZW1vcnkgd2ViIGFwaSBwcm92aWRlcnNcclxuICAgICAgICBwcm92aWRlKFhIUkJhY2tlbmQsIHsgdXNlQ2xhc3M6IEluTWVtb3J5QmFja2VuZFNlcnZpY2UgfSksIC8vIGluLW1lbSBzZXJ2ZXJcclxuICAgICAgICBwcm92aWRlKFNFRURfREFUQSwgIHsgdXNlQ2xhc3M6IEhlcm9EYXRhIH0pIC8vIGluLW1lbSBzZXJ2ZXIgZGF0YVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9oQ29tcG9uZW50IHsgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
