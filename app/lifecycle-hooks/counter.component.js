System.register(['angular2/core', './spy.directive', './logger.service'], function(exports_1, context_1) {
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
    var core_1, spy_directive_1, logger_service_1;
    var MyCounter, CounterParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spy_directive_1_1) {
                spy_directive_1 = spy_directive_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            MyCounter = (function () {
                function MyCounter() {
                    this.changeLog = [];
                }
                MyCounter.prototype.ngOnChanges = function (changes) {
                    // Empty the changeLog whenever counter goes to zero
                    // hint: this is a way to respond programmatically to external value changes.
                    if (this.counter === 0) {
                        this.changeLog.length = 0;
                    }
                    // A change to `counter` is the only change we care about
                    var prop = changes['counter'];
                    var cur = prop.currentValue;
                    var prev = JSON.stringify(prop.previousValue); // first time is {}; after is integer
                    this.changeLog.push("counter: currentValue = " + cur + ", previousValue = " + prev);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MyCounter.prototype, "counter", void 0);
                MyCounter = __decorate([
                    core_1.Component({
                        selector: 'my-counter',
                        template: "\n  <div class=\"counter\">\n    Counter = {{counter}}\n\n    <h5>-- Counter Change Log --</h5>\n    <div *ngFor=\"let chg of changeLog\" my-spy>{{chg}}</div>\n  </div>\n  ",
                        styles: ['.counter {background: LightYellow; padding: 8px; margin-top: 8px}'],
                        directives: [spy_directive_1.Spy]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyCounter);
                return MyCounter;
            }());
            exports_1("MyCounter", MyCounter);
            /***************************************/
            CounterParentComponent = (function () {
                function CounterParentComponent(logger) {
                    this.spyLog = [];
                    this._logger = logger;
                    this.spyLog = logger.logs;
                    this.reset();
                }
                CounterParentComponent.prototype.updateCounter = function () {
                    this.value += 1;
                    this._logger.tick();
                };
                CounterParentComponent.prototype.reset = function () {
                    this._logger.log('-- reset --');
                    this.value = 0;
                    this._logger.tick();
                };
                CounterParentComponent = __decorate([
                    core_1.Component({
                        selector: 'counter-parent',
                        template: "\n   <div class=\"parent\">\n    <h2>Counter Spy</h2>\n\n    <button (click)=\"updateCounter()\">Update counter</button>\n    <button (click)=\"reset()\">Reset Counter</button>\n\n    <my-counter [counter]=\"value\"></my-counter>\n\n    <h4>-- Spy Lifecycle Hook Log --</h4>\n    <div *ngFor=\"let msg of spyLog\">{{msg}}</div>\n   </div>\n  ",
                        styles: ['.parent {background: gold;}'],
                        directives: [MyCounter],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], CounterParentComponent);
                return CounterParentComponent;
            }());
            exports_1("CounterParentComponent", CounterParentComponent);
        }
    }
});
//# sourceMappingURL=counter.component.js.map