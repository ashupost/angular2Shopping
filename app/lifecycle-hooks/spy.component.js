System.register(['angular2/core', './logger.service', './spy.directive'], function(exports_1, context_1) {
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
    var core_1, logger_service_1, spy_directive_1;
    var SpyParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (spy_directive_1_1) {
                spy_directive_1 = spy_directive_1_1;
            }],
        execute: function() {
            SpyParentComponent = (function () {
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
                            "<div *ngFor=\"#hero of heroes\"  my-spy  class=\"heroes\">\n       {{hero}}\n     </div>"
                            + "<h4>-- Spy Lifecycle Hook Log --</h4>\n    <div *ngFor=\"#msg of spyLog\">{{msg}}</div>\n   </div>\n  ",
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
            exports_1("SpyParentComponent", SpyParentComponent);
        }
    }
});
//# sourceMappingURL=spy.component.js.map