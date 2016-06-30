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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var hero_list_component_1 = require('./hero-list.component');
var hero_service_1 = require('./hero.service');
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
                hero_service_1.HeroService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TohComponent);
    return TohComponent;
}());
exports.TohComponent = TohComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC90b2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELG9DQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELDZCQUFrQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBdUJuRDtJQUFBO0lBQTRCLENBQUM7SUFiN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDREQUdYO1lBQ0MsVUFBVSxFQUFFLENBQUMsdUNBQWlCLENBQUM7WUFDL0IsU0FBUyxFQUFHO2dCQUNSLHFCQUFjO2dCQUNkLDBCQUFXO2FBRWQ7U0FDSixDQUFDOztvQkFBQTtJQUMwQixtQkFBQztBQUFELENBQTVCLEFBQTZCLElBQUE7QUFBaEIsb0JBQVksZUFBSSxDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC90b2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCB9ICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBIZXJvTGlzdENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gICAgICAgZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgcHJvdmlkZSB9ICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIEltcG9ydHMgZm9yIGxvYWRpbmcgJiBjb25maWd1cmluZyB0aGUgaW4tbWVtb3J5IHdlYiBhcGlcclxuaW1wb3J0IHsgWEhSQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgSGVyb0RhdGEgfSAgICAgICAgICBmcm9tICcuL2hlcm8tZGF0YSc7XHJcbmltcG9ydCB7SW5NZW1vcnlCYWNrZW5kU2VydmljZX0gZnJvbSBcImFuZ3VsYXIyLWluLW1lbW9yeS13ZWItYXBpL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktdG9oJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGgxPlRvdXIgb2YgSGVyb2VzPC9oMT5cclxuICA8aGVyby1saXN0PjwvaGVyby1saXN0PlxyXG4gIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbSGVyb0xpc3RDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiAgW1xyXG4gICAgICAgIEhUVFBfUFJPVklERVJTLFxyXG4gICAgICAgIEhlcm9TZXJ2aWNlXHJcblxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9oQ29tcG9uZW50IHsgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
