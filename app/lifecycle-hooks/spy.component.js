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
var logger_service_1 = require('./logger.service');
var spy_directive_1 = require('./spy.directive');
var SpyParentComponent = (function () {
    function SpyParentComponent(_logger) {
        this._logger = _logger;
        this.newName = 'Herbie';
        this.heroes = ['Windstorm', 'Magneta'];
        this.spyLog = _logger.logs;
    }
    SpyParentComponent.prototype.addHero = function () {
        if (this.newName.trim()) {
            this.heroes.push(this.newName.trim());
            this.newName = '';
            this._logger.tick();
        }
    };
    SpyParentComponent.prototype.removeHero = function (hero) {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
        this._logger.tick();
    };
    SpyParentComponent.prototype.reset = function () {
        this._logger.log('-- reset --');
        this.heroes.length = 0;
        this._logger.tick();
    };
    SpyParentComponent = __decorate([
        core_1.Component({
            selector: 'spy-parent',
            template: "\n  <div class=\"parent\">\n    <h2>Spy Directive</h2>\n    <p>\n      <input [(ngModel)]=\"newName\" (keyup.enter)=\"addHero()\" placeholder=\"Hero name\">\n      <button (click)=\"addHero()\">Add Hero</button>\n      <button (click)=\"reset()\">Reset Heroes</button>\n    </p>" +
                "<div *ngFor=\"let hero of heroes\"  my-spy  class=\"heroes\">\n       {{hero}}\n     </div>"
                + "<h4>-- Spy Lifecycle Hook Log --</h4>\n    <div *ngFor=\"let msg of spyLog\">{{msg}}</div>\n   </div>\n  ",
            styles: [
                '.parent {background: khaki;}',
                '.heroes {background: LightYellow; padding: 0 8px}'
            ],
            directives: [spy_directive_1.Spy],
            providers: [logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], SpyParentComponent);
    return SpyParentComponent;
}());
exports.SpyParentComponent = SpyParentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9zcHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFDaEQsOEJBQWtCLGlCQUFpQixDQUFDLENBQUE7QUEwQnBDO0lBS0ksNEJBQW9CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFKekMsWUFBTyxHQUFHLFFBQVEsQ0FBQztRQUNuQixXQUFNLEdBQVksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFJdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFDRCx1Q0FBVSxHQUFWLFVBQVcsSUFBVztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxrQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWhETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsd1JBT0w7Z0JBQ0wsNkZBRVE7a0JBQ04sMkdBR0g7WUFDQyxNQUFNLEVBQUU7Z0JBQ0osOEJBQThCO2dCQUM5QixtREFBbUQ7YUFDdEQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxtQkFBRyxDQUFDO1lBQ2pCLFNBQVMsRUFBRyxDQUFDLDhCQUFhLENBQUM7U0FDOUIsQ0FBQzs7MEJBQUE7SUEwQkYseUJBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLDBCQUFrQixxQkF5QjlCLENBQUEiLCJmaWxlIjoibGlmZWN5Y2xlLWhvb2tzL3NweS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZX0gIGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1NweX0gZnJvbSAnLi9zcHkuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzcHktcGFyZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInBhcmVudFwiPlxyXG4gICAgPGgyPlNweSBEaXJlY3RpdmU8L2gyPlxyXG4gICAgPHA+XHJcbiAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cIm5ld05hbWVcIiAoa2V5dXAuZW50ZXIpPVwiYWRkSGVybygpXCIgcGxhY2Vob2xkZXI9XCJIZXJvIG5hbWVcIj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkSGVybygpXCI+QWRkIEhlcm88L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPlJlc2V0IEhlcm9lczwvYnV0dG9uPlxyXG4gICAgPC9wPmAgK1xyXG4gICAgYDxkaXYgKm5nRm9yPVwibGV0IGhlcm8gb2YgaGVyb2VzXCIgIG15LXNweSAgY2xhc3M9XCJoZXJvZXNcIj5cclxuICAgICAgIHt7aGVyb319XHJcbiAgICAgPC9kaXY+YFxyXG4gICAgKyBgPGg0Pi0tIFNweSBMaWZlY3ljbGUgSG9vayBMb2cgLS08L2g0PlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgbXNnIG9mIHNweUxvZ1wiPnt7bXNnfX08L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgICcucGFyZW50IHtiYWNrZ3JvdW5kOiBraGFraTt9JyxcclxuICAgICAgICAnLmhlcm9lcyB7YmFja2dyb3VuZDogTGlnaHRZZWxsb3c7IHBhZGRpbmc6IDAgOHB4fSdcclxuICAgIF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbU3B5XSxcclxuICAgIHByb3ZpZGVyczogIFtMb2dnZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3B5UGFyZW50Q29tcG9uZW50IHtcclxuICAgIG5ld05hbWUgPSAnSGVyYmllJztcclxuICAgIGhlcm9lczpzdHJpbmdbXSA9IFsnV2luZHN0b3JtJywgJ01hZ25ldGEnXTtcclxuICAgIHNweUxvZzpzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnZXI6TG9nZ2VyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5zcHlMb2cgPSBfbG9nZ2VyLmxvZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGVybygpIHtcclxuICAgICAgICBpZiAodGhpcy5uZXdOYW1lLnRyaW0oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9lcy5wdXNoKHRoaXMubmV3TmFtZS50cmltKCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5ld05hbWUgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLnRpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVIZXJvKGhlcm86c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMuc3BsaWNlKHRoaXMuaGVyb2VzLmluZGV4T2YoaGVybyksIDEpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci50aWNrKCk7XHJcbiAgICB9XHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coJy0tIHJlc2V0IC0tJyk7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl9sb2dnZXIudGljaygpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
