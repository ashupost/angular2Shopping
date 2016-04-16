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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBSUksNkJBQW9CLGNBQW9DO29CQUFwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7b0JBSDlDLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztvQkFDcEMsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO2dCQUVnQixDQUFDO2dCQUc1RCxzQkFBSSxxQ0FBSTt5QkFLUjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDekMsQ0FBQzt5QkFQRCxVQUFVLElBQVU7d0JBQ2pCLDZDQUE2Qzt3QkFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLENBQUM7OzttQkFBQTtnQkFNRCxxQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQXRCRDtvQkFBQyxhQUFNLEVBQUU7O3FFQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBSVQ7b0JBQUMsWUFBSyxFQUFFOzs7K0RBQUE7Z0JBcEJaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFFBQVEsRUFBRSx1T0FRSDtxQkFDVixDQUFDOzt1Q0FBQTtnQkEwQkYsMEJBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELHFEQXdCQyxDQUFBIiwiZmlsZSI6ImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSZXN0b3JlU2VydmljZX0gZnJvbSAnLi9yZXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0hlcm99IGZyb20gJy4vaGVybyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGVyby1lZGl0b3InLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVzdG9yZVNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuPk5hbWU6PC9zcGFuPlxyXG4gICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJoZXJvLm5hbWVcIi8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25TYXZlZCgpXCI+c2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2FuY2VsZWQoKVwiPmNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvRWRpdG9yQ29tcG9uZW50IHtcclxuICAgIEBPdXRwdXQoKSBjYW5jZWxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SGVybz4oKTtcclxuICAgIEBPdXRwdXQoKSBzYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SGVybz4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3RvcmVTZXJ2aWNlOiBSZXN0b3JlU2VydmljZTxIZXJvPikge31cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGhlcm8gKGhlcm86IEhlcm8pIHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGVybz1cIixKU09OLnN0cmluZ2lmeShoZXJvKSk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlU2VydmljZS5zZXRJdGVtKGhlcm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZXJvICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXN0b3JlU2VydmljZS5nZXRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYXZlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlZC5uZXh0KHRoaXMucmVzdG9yZVNlcnZpY2UuZ2V0SXRlbSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbGVkICgpIHtcclxuICAgICAgICB0aGlzLmhlcm8gPSB0aGlzLnJlc3RvcmVTZXJ2aWNlLnJlc3RvcmVJdGVtKCk7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxlZC5uZXh0KHRoaXMuaGVybyk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
