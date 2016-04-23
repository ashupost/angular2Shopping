System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
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
    var core_1, logger_service_1;
    var nextId, Spy;
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
            // Spy on any element to which it is applied.
            // Usage: <div my-spy>...</div>
            Spy = (function () {
                function Spy(_logger) {
                    this._logger = _logger;
                }
                Spy.prototype.ngOnInit = function () { this._logIt("onInit"); };
                Spy.prototype.ngOnDestroy = function () { this._logIt("onDestroy"); };
                Spy.prototype._logIt = function (msg) {
                    this._logger.log("Spy #" + nextId++ + " " + msg);
                };
                Spy = __decorate([
                    core_1.Directive({ selector: '[my-spy]' }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], Spy);
                return Spy;
            }());
            exports_1("Spy", Spy);
        }
    }
});
//# sourceMappingURL=spy.directive.js.map