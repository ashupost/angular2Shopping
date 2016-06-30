"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var heroes_service_1 = require('./heroes.service');
var heroes_list_component_1 = require("./heroes-list.component");
var HierarchicalDependencyInjectionComponent = (function () {
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
exports.HierarchicalDependencyInjectionComponent = HierarchicalDependencyInjectionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0Msc0NBQWtDLHlCQUF5QixDQUFDLENBQUE7QUFTNUQ7SUFBQTtJQUVBLENBQUM7SUFURDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdURBRVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzdCLENBQUM7O2dEQUFBO0lBR0YsK0NBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGdEQUF3QywyQ0FFcEQsQ0FBQSIsImZpbGUiOiJoaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24vaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIZXJvZXNTZXJ2aWNlfSBmcm9tICcuL2hlcm9lcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtIZXJvZXNMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9oZXJvZXMtbGlzdC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aGVyb2VzLWxpc3Q+TG9hZGluZy4uLjwvaGVyb2VzLWxpc3Q+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0hlcm9lc0xpc3RDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbSGVyb2VzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZXJhcmNoaWNhbERlcGVuZGVuY3lJbmplY3Rpb25Db21wb25lbnQge1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
