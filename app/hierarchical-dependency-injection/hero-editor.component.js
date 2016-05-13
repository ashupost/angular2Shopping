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
var restore_service_1 = require('./restore.service');
var hero_1 = require('./hero');
var HeroEditorComponent = (function () {
    function HeroEditorComponent(restoreService) {
        this.restoreService = restoreService;
        this.canceled = new core_1.EventEmitter();
        this.saved = new core_1.EventEmitter();
    }
    Object.defineProperty(HeroEditorComponent.prototype, "hero", {
        get: function () {
            return this.restoreService.getItem();
        },
        set: function (hero) {
            console.log("hero=", JSON.stringify(hero));
            this.restoreService.setItem(hero);
        },
        enumerable: true,
        configurable: true
    });
    HeroEditorComponent.prototype.onSaved = function () {
        this.saved.next(this.restoreService.getItem());
    };
    HeroEditorComponent.prototype.onCanceled = function () {
        this.hero = this.restoreService.restoreItem();
        this.canceled.next(this.hero);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroEditorComponent.prototype, "canceled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroEditorComponent.prototype, "saved", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero), 
        __metadata('design:paramtypes', [hero_1.Hero])
    ], HeroEditorComponent.prototype, "hero", null);
    HeroEditorComponent = __decorate([
        core_1.Component({
            selector: 'hero-editor',
            providers: [restore_service_1.RestoreService],
            template: "\n    <div>\n      <span>Name:</span>\n      <input [(ngModel)]=\"hero.name\"/>\n      <div>\n        <button (click)=\"onSaved()\">save</button>\n        <button (click)=\"onCanceled()\">cancel</button>\n      </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [restore_service_1.RestoreService])
    ], HeroEditorComponent);
    return HeroEditorComponent;
}());
exports.HeroEditorComponent = HeroEditorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCxxQkFBbUIsUUFBUSxDQUFDLENBQUE7QUFnQjVCO0lBSUksNkJBQW9CLGNBQW9DO1FBQXBDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUg5QyxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7UUFDcEMsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO0lBRWdCLENBQUM7SUFHNUQsc0JBQUkscUNBQUk7YUFLUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLENBQUM7YUFQRCxVQUFVLElBQVU7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBTUQscUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsd0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXRCRDtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7c0RBQUE7SUFJVDtRQUFDLFlBQUssRUFBRTs7O21EQUFBO0lBcEJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsUUFBUSxFQUFFLHVPQVFIO1NBQ1YsQ0FBQzs7MkJBQUE7SUEwQkYsMEJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLDJCQUFtQixzQkF3Qi9CLENBQUEiLCJmaWxlIjoiaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uL2hlcm8tZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1Jlc3RvcmVTZXJ2aWNlfSBmcm9tICcuL3Jlc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoZXJvLWVkaXRvcicsXHJcbiAgICBwcm92aWRlcnM6IFtSZXN0b3JlU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4+TmFtZTo8L3NwYW4+XHJcbiAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImhlcm8ubmFtZVwiLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblNhdmVkKClcIj5zYXZlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DYW5jZWxlZCgpXCI+Y2FuY2VsPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm9FZGl0b3JDb21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIGNhbmNlbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxIZXJvPigpO1xyXG4gICAgQE91dHB1dCgpIHNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxIZXJvPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdG9yZVNlcnZpY2U6IFJlc3RvcmVTZXJ2aWNlPEhlcm8+KSB7fVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgaGVybyAoaGVybzogSGVybykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVybz1cIixKU09OLnN0cmluZ2lmeShoZXJvKSk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlU2VydmljZS5zZXRJdGVtKGhlcm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZXJvICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN0b3JlU2VydmljZS5nZXRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYXZlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlZC5uZXh0KHRoaXMucmVzdG9yZVNlcnZpY2UuZ2V0SXRlbSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbGVkICgpIHtcclxuICAgICAgICB0aGlzLmhlcm8gPSB0aGlzLnJlc3RvcmVTZXJ2aWNlLnJlc3RvcmVJdGVtKCk7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxlZC5uZXh0KHRoaXMuaGVybyk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
