"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var hero_1 = require('./hero');
var nextHeroDetailId = 1;
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
        // This component make a request but it can't actually delete a hero.
        this.deleteRequest = new core_1.EventEmitter();
        this.hero = new hero_1.Hero('', 'Zzzzzzzz'); // default sleeping hero
        // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
        // Public Domain terms of use: http://www.wpclipart.com/terms.html
        this.heroImageUrl = 'dist/img/avatar.png';
        this.lineThrough = '';
        this.prefix = '';
    }
    HeroDetailComponent.prototype.delete = function () {
        this.deleteRequest.emit(this.hero);
        this.lineThrough = this.lineThrough ? '' : 'line-through';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "prefix", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            inputs: ['hero'],
            outputs: ['deleteRequest'],
            styles: ['button { margin-left: 8px} div {margin: 8px 0} img {height:24px}'],
            template: "\n  <div>\n    <img src=\"{{heroImageUrl}}\">\n    <span [style.text-decoration]=\"lineThrough\">\n      {{prefix}} {{hero?.fullName}}\n    </span>\n    <button (click)=\"delete()\">Delete</button>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
var BigHeroDetailComponent = (function (_super) {
    __extends(BigHeroDetailComponent, _super);
    function BigHeroDetailComponent() {
        _super.apply(this, arguments);
        this.deleteRequest = new core_1.EventEmitter();
    }
    BigHeroDetailComponent.prototype.delete = function () {
        this.deleteRequest.emit(this.hero);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], BigHeroDetailComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BigHeroDetailComponent.prototype, "deleteRequest", void 0);
    BigHeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'big-hero-detail',
            template: "\n  <div style=\"border: 1px solid black; padding:3px\">\n    <img src=\"{{heroImageUrl}}\" style=\"float:left; margin-right:8px;\">\n    <div><b>{{hero?.fullName}}</b></div>\n    <div>First: {{hero?.firstName}}</div>\n    <div>Last: {{hero?.lastName}}</div>\n    <div>Birthdate: {{hero?.birthdate | date:'longDate'}}</div>\n    <div>Web: <a href=\"{{hero?.url}}\" target=\"_blank\">{{hero?.url}}</a></div>\n    <div>Rate/hr: {{hero?.rate | currency:'EUR'}}</div>\n    <br clear=\"all\">\n    <button (click)=\"delete()\">Delete</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BigHeroDetailComponent);
    return BigHeroDetailComponent;
}(HeroDetailComponent));
exports.BigHeroDetailComponent = BigHeroDetailComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXN5bnRheC9oZXJvLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBRXJFLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUU1QixJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQWdCekI7SUFBQTtRQUVJLHFFQUFxRTtRQUNyRSxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO1FBT3pDLFNBQUksR0FBUyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDOUQsc0ZBQXNGO1FBQ3RGLGtFQUFrRTtRQUNsRSxpQkFBWSxHQUFHLHFCQUFxQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ1IsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBWEcsb0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLGNBQWMsQ0FBQztJQUM5RCxDQUFDO0lBT0Q7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBN0JaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNoQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDMUIsTUFBTSxFQUFDLENBQUMsa0VBQWtFLENBQUM7WUFDM0UsUUFBUSxFQUFFLGlOQU9MO1NBQ1IsQ0FBQzs7MkJBQUE7SUFpQkYsMEJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLDJCQUFtQixzQkFnQi9CLENBQUE7QUFrQkQ7SUFBNEMsMENBQW1CO0lBQS9EO1FBQTRDLDhCQUFtQjtRQUdqRCxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO0lBS3ZELENBQUM7SUFIRyx1Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFMRDtRQUFDLFlBQUssRUFBRTs7d0RBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7aUVBQUE7SUFuQmI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUseWlCQVlYO1NBQ0YsQ0FBQzs7OEJBQUE7SUFTRiw2QkFBQztBQUFELENBUkEsQUFRQyxDQVIyQyxtQkFBbUIsR0FROUQ7QUFSWSw4QkFBc0IseUJBUWxDLENBQUE7QUFHRDs7OztHQUlHIiwiZmlsZSI6InRlbXBsYXRlLXN5bnRheC9oZXJvLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuXHJcbmxldCBuZXh0SGVyb0RldGFpbElkID0gMTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoZXJvLWRldGFpbCcsXHJcbiAgICBpbnB1dHM6IFsnaGVybyddLFxyXG4gICAgb3V0cHV0czogWydkZWxldGVSZXF1ZXN0J10sXHJcbiAgICBzdHlsZXM6WydidXR0b24geyBtYXJnaW4tbGVmdDogOHB4fSBkaXYge21hcmdpbjogOHB4IDB9IGltZyB7aGVpZ2h0OjI0cHh9J10sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXY+XHJcbiAgICA8aW1nIHNyYz1cInt7aGVyb0ltYWdlVXJsfX1cIj5cclxuICAgIDxzcGFuIFtzdHlsZS50ZXh0LWRlY29yYXRpb25dPVwibGluZVRocm91Z2hcIj5cclxuICAgICAge3twcmVmaXh9fSB7e2hlcm8/LmZ1bGxOYW1lfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZSgpXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb0RldGFpbENvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gVGhpcyBjb21wb25lbnQgbWFrZSBhIHJlcXVlc3QgYnV0IGl0IGNhbid0IGFjdHVhbGx5IGRlbGV0ZSBhIGhlcm8uXHJcbiAgICBkZWxldGVSZXF1ZXN0ID0gbmV3IEV2ZW50RW1pdHRlcjxIZXJvPigpO1xyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVJlcXVlc3QuZW1pdCh0aGlzLmhlcm8pO1xyXG4gICAgICAgIHRoaXMubGluZVRocm91Z2ggPSB0aGlzLmxpbmVUaHJvdWdoID8gJycgOiAnbGluZS10aHJvdWdoJztcclxuICAgIH1cclxuXHJcbiAgICBoZXJvOiBIZXJvID0gbmV3IEhlcm8oJycsJ1p6enp6enp6Jyk7IC8vIGRlZmF1bHQgc2xlZXBpbmcgaGVyb1xyXG4gICAgLy8gaGVyb0ltYWdlVXJsID0gJ2h0dHA6Ly93d3cud3BjbGlwYXJ0LmNvbS9jYXJ0b29uL3Blb3BsZS9oZXJvL2hlcm9fc2lsaG91dHRlX1QucG5nJztcclxuICAgIC8vIFB1YmxpYyBEb21haW4gdGVybXMgb2YgdXNlOiBodHRwOi8vd3d3LndwY2xpcGFydC5jb20vdGVybXMuaHRtbFxyXG4gICAgaGVyb0ltYWdlVXJsID0gJ2Rpc3QvaW1nL2F2YXRhci5wbmcnO1xyXG4gICAgbGluZVRocm91Z2ggPSAnJztcclxuICAgIEBJbnB1dCgpIHByZWZpeCA9ICcnO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYmlnLWhlcm8tZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBwYWRkaW5nOjNweFwiPlxyXG4gICAgPGltZyBzcmM9XCJ7e2hlcm9JbWFnZVVybH19XCIgc3R5bGU9XCJmbG9hdDpsZWZ0OyBtYXJnaW4tcmlnaHQ6OHB4O1wiPlxyXG4gICAgPGRpdj48Yj57e2hlcm8/LmZ1bGxOYW1lfX08L2I+PC9kaXY+XHJcbiAgICA8ZGl2PkZpcnN0OiB7e2hlcm8/LmZpcnN0TmFtZX19PC9kaXY+XHJcbiAgICA8ZGl2Pkxhc3Q6IHt7aGVybz8ubGFzdE5hbWV9fTwvZGl2PlxyXG4gICAgPGRpdj5CaXJ0aGRhdGU6IHt7aGVybz8uYmlydGhkYXRlIHwgZGF0ZTonbG9uZ0RhdGUnfX08L2Rpdj5cclxuICAgIDxkaXY+V2ViOiA8YSBocmVmPVwie3toZXJvPy51cmx9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7aGVybz8udXJsfX08L2E+PC9kaXY+XHJcbiAgICA8ZGl2PlJhdGUvaHI6IHt7aGVybz8ucmF0ZSB8IGN1cnJlbmN5OidFVVInfX08L2Rpdj5cclxuICAgIDxiciBjbGVhcj1cImFsbFwiPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKClcIj5EZWxldGU8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCaWdIZXJvRGV0YWlsQ29tcG9uZW50IGV4dGVuZHMgSGVyb0RldGFpbENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgIGhlcm86IEhlcm87XHJcbiAgICBAT3V0cHV0KCkgZGVsZXRlUmVxdWVzdCA9IG5ldyBFdmVudEVtaXR0ZXI8SGVybz4oKTtcclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVSZXF1ZXN0LmVtaXQodGhpcy5oZXJvKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG4gY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
