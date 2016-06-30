System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, logger_service_1;
    var nextId, PeekABoo, PeekABooComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            nextId = 1;
            PeekABoo = (function () {
                function PeekABoo(_logger) {
                    this._logger = _logger;
                }
                // implement OnInit's `ngOnInit` method
                PeekABoo.prototype.ngOnInit = function () { this._logIt("OnInit"); };
                PeekABoo.prototype._logIt = function (msg) {
                    this._logger.log("#" + nextId++ + " " + msg);
                };
                return PeekABoo;
            }());
            exports_1("PeekABoo", PeekABoo);
            PeekABooComponent = (function (_super) {
                __extends(PeekABooComponent, _super);
                function PeekABooComponent(logger) {
                    _super.call(this, logger);
                    this._verb = 'initialized';
                    var is = this.name ? 'is' : 'is not';
                    this._logIt("name " + is + " known at construction");
                }
                // only called for/if there is an @input variable set by parent.
                PeekABooComponent.prototype.ngOnChanges = function (changes) {
                    var changesMsgs = [];
                    for (var propName in changes) {
                        if (propName === 'name') {
                            var name_1 = changes['name'].currentValue;
                            changesMsgs.push("name " + this._verb + " to \"" + name_1 + "\"");
                        }
                        else {
                            changesMsgs.push(propName + ' ' + this._verb);
                        }
                    }
                    this._logIt("OnChanges: " + changesMsgs.join('; '));
                    this._verb = 'changed'; // next time it will be a change
                };
                // Beware! Called frequently!
                // Called in every change detection cycle anywhere on the page
                PeekABooComponent.prototype.ngDoCheck = function () { this._logIt("DoCheck"); };
                PeekABooComponent.prototype.ngAfterContentInit = function () { this._logIt("AfterContentInit"); };
                // Beware! Called frequently!
                // Called in every change detection cycle anywhere on the page
                PeekABooComponent.prototype.ngAfterContentChecked = function () { this._logIt("AfterContentChecked"); };
                PeekABooComponent.prototype.ngAfterViewInit = function () { this._logIt("AfterViewInit"); };
                // Beware! Called frequently!
                // Called in every change detection cycle anywhere on the page
                PeekABooComponent.prototype.ngAfterViewChecked = function () { this._logIt("AfterViewChecked"); };
                PeekABooComponent.prototype.ngOnDestroy = function () { this._logIt("OnDestroy"); };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PeekABooComponent.prototype, "name", void 0);
                PeekABooComponent = __decorate([
                    core_1.Component({
                        selector: 'peek-a-boo',
                        template: '<p>Now you see my hero, {{name}}</p>',
                        styles: ['p {background: LightYellow; padding: 8px}']
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], PeekABooComponent);
                return PeekABooComponent;
            }(PeekABoo));
            exports_1("PeekABooComponent", PeekABooComponent);
        }
    }
});
//# sourceMappingURL=peek-a-boo.component.js.map