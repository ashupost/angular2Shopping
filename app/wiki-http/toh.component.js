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
var http_1 = require('angular2/http');
var hero_list_component_1 = require('./hero-list.component');
var hero_service_1 = require('./hero.service');
var core_2 = require('angular2/core');
var http_2 = require('angular2/http');
// in-memory web api imports
var core_3 = require('a2-in-memory-web-api/core');
var hero_data_1 = require('./hero-data');
var TohComponent = (function () {
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
exports.TohComponent = TohComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC90b2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELG9DQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELDZCQUFrQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRW5ELHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsNEJBQTRCO0FBQzVCLHFCQUM2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELDBCQUFrQyxhQUFhLENBQUMsQ0FBQTtBQWlCaEQ7SUFBQTtJQUE0QixDQUFDO0lBZjdCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw0REFHWDtZQUNDLFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBRztnQkFDUixxQkFBYztnQkFDZCwwQkFBVztnQkFDWCw4QkFBOEI7Z0JBQzlCLGNBQU8sQ0FBQyxpQkFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLDZCQUFzQixFQUFFLENBQUM7Z0JBQ3pELGNBQU8sQ0FBQyxnQkFBUyxFQUFHLEVBQUUsUUFBUSxFQUFFLG9CQUFRLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjthQUNwRTtTQUNKLENBQUM7O29CQUFBO0lBQzBCLG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixvQkFBWSxlQUFJLENBQUEiLCJmaWxlIjoid2lraS1odHRwL3RvaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCB7IEhlcm9MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9oZXJvLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSAgICAgICBmcm9tICcuL2hlcm8uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBwcm92aWRlIH0gICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBYSFJCYWNrZW5kIH0gICAgICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuLy8gaW4tbWVtb3J5IHdlYiBhcGkgaW1wb3J0c1xyXG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgU0VFRF9EQVRBIH0gICAgICAgICBmcm9tICdhMi1pbi1tZW1vcnktd2ViLWFwaS9jb3JlJztcclxuaW1wb3J0IHsgSGVyb0RhdGEgfSAgICAgICAgICBmcm9tICcuL2hlcm8tZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktdG9oJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGgxPlRvdXIgb2YgSGVyb2VzPC9oMT5cclxuICA8aGVyby1saXN0PjwvaGVyby1saXN0PlxyXG4gIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbSGVyb0xpc3RDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiAgW1xyXG4gICAgICAgIEhUVFBfUFJPVklERVJTLFxyXG4gICAgICAgIEhlcm9TZXJ2aWNlLFxyXG4gICAgICAgIC8vIGluLW1lbW9yeSB3ZWIgYXBpIHByb3ZpZGVyc1xyXG4gICAgICAgIHByb3ZpZGUoWEhSQmFja2VuZCwgeyB1c2VDbGFzczogSW5NZW1vcnlCYWNrZW5kU2VydmljZSB9KSwgLy8gaW4tbWVtIHNlcnZlclxyXG4gICAgICAgIHByb3ZpZGUoU0VFRF9EQVRBLCAgeyB1c2VDbGFzczogSGVyb0RhdGEgfSkgLy8gaW4tbWVtIHNlcnZlciBkYXRhXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2hDb21wb25lbnQgeyB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
