System.register(['angular2/core', './heroes.service', "./heroes-list.component"], function(exports_1, context_1) {
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
    var core_1, heroes_service_1, heroes_list_component_1;
    var HierarchicalDependencyInjectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroes_service_1_1) {
                heroes_service_1 = heroes_service_1_1;
            },
            function (heroes_list_component_1_1) {
                heroes_list_component_1 = heroes_list_component_1_1;
            }],
        execute: function() {
            HierarchicalDependencyInjectionComponent = (function () {
                function HierarchicalDependencyInjectionComponent() {
                }
                HierarchicalDependencyInjectionComponent = __decorate([
                    core_1.Component({
                        template: "\n        <heroes-list>Loading...</heroes-list>\n    ",
                        directives: [heroes_list_component_1.HeroesListComponent],
                        providers: [heroes_service_1.HeroesService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HierarchicalDependencyInjectionComponent);
                return HierarchicalDependencyInjectionComponent;
            }());
            exports_1("HierarchicalDependencyInjectionComponent", HierarchicalDependencyInjectionComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFURDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx1REFFVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQzt3QkFDakMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7NERBQUE7Z0JBR0YsK0NBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELCtGQUVDLENBQUEiLCJmaWxlIjoiaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uL2hpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SGVyb2VzU2VydmljZX0gZnJvbSAnLi9oZXJvZXMuc2VydmljZSc7XHJcbmltcG9ydCB7SGVyb2VzTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vaGVyb2VzLWxpc3QuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGhlcm9lcy1saXN0PkxvYWRpbmcuLi48L2hlcm9lcy1saXN0PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtIZXJvZXNMaXN0Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0hlcm9lc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWVyYXJjaGljYWxEZXBlbmRlbmN5SW5qZWN0aW9uQ29tcG9uZW50IHtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
