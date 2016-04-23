System.register(['angular2/core', './restore.service', './hero'], function(exports_1, context_1) {
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
    var core_1, restore_service_1, hero_1;
    var HeroEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restore_service_1_1) {
                restore_service_1 = restore_service_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            HeroEditorComponent = (function () {
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
                        // console.log("hero=",JSON.stringify(hero));
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
            exports_1("HeroEditorComponent", HeroEditorComponent);
        }
    }
});
//# sourceMappingURL=hero-editor.component.js.map