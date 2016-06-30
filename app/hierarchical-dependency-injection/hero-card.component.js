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
var hero_1 = require('./hero');
var HeroCardComponent = (function () {
    function HeroCardComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroCardComponent.prototype, "hero", void 0);
    HeroCardComponent = __decorate([
        core_1.Component({
            selector: 'hero-card',
            template: "\n    <div>\n      <span>Name:</span>\n      <span>{{hero.name}}</span>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroCardComponent);
    return HeroCardComponent;
}());
exports.HeroCardComponent = HeroCardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBVTVCO0lBQUE7SUFFQSxDQUFDO0lBREc7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBVFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLHFGQUlIO1NBQ1YsQ0FBQzs7eUJBQUE7SUFHRix3QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkseUJBQWlCLG9CQUU3QixDQUFBIiwiZmlsZSI6ImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlcm8tY2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4+TmFtZTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnt7aGVyby5uYW1lfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ2FyZENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoZXJvOiBIZXJvO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
