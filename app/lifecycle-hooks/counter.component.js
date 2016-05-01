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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFBQTtvQkFFSSxjQUFTLEdBQVksRUFBRSxDQUFDO2dCQWlCNUIsQ0FBQztnQkFmRywrQkFBVyxHQUFYLFVBQVksT0FBK0M7b0JBRXZELG9EQUFvRDtvQkFDcEQsNkVBQTZFO29CQUM3RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztvQkFFRCx5REFBeUQ7b0JBQ3pELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7b0JBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDZCQUEyQixHQUFHLDBCQUFxQixJQUFNLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFoQkQ7b0JBQUMsWUFBSyxFQUFFOzswREFBQTtnQkFkWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsOEtBT1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsbUVBQW1FLENBQUM7d0JBQzdFLFVBQVUsRUFBQyxDQUFDLG1CQUFHLENBQUM7cUJBQ25CLENBQUM7OzZCQUFBO2dCQW9CRixnQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsaUNBbUJDLENBQUE7WUFFRCx5Q0FBeUM7WUFxQnpDO2dCQU1JLGdDQUFZLE1BQW9CO29CQUpoQyxXQUFNLEdBQVksRUFBRSxDQUFDO29CQUtqQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsOENBQWEsR0FBYjtvQkFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxzQ0FBSyxHQUFMO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQXhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSx3VkFZWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzt3QkFDdkMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUN2QixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM3QixDQUFDOzswQ0FBQTtnQkF1QkYsNkJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELDJEQXNCQyxDQUFBIiwiZmlsZSI6ImxpZmVjeWNsZS1ob29rcy9jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsXHJcbiAgICBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSxcclxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7U3B5fSBmcm9tICcuL3NweS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2V9ICBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1jb3VudGVyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImNvdW50ZXJcIj5cclxuICAgIENvdW50ZXIgPSB7e2NvdW50ZXJ9fVxyXG5cclxuICAgIDxoNT4tLSBDb3VudGVyIENoYW5nZSBMb2cgLS08L2g1PlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgY2hnIG9mIGNoYW5nZUxvZ1wiIG15LXNweT57e2NoZ319PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogWycuY291bnRlciB7YmFja2dyb3VuZDogTGlnaHRZZWxsb3c7IHBhZGRpbmc6IDhweDsgbWFyZ2luLXRvcDogOHB4fSddLFxyXG4gICAgZGlyZWN0aXZlczpbU3B5XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlDb3VudGVyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvdW50ZXI6IG51bWJlcjtcclxuICAgIGNoYW5nZUxvZzpzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XHJcblxyXG4gICAgICAgIC8vIEVtcHR5IHRoZSBjaGFuZ2VMb2cgd2hlbmV2ZXIgY291bnRlciBnb2VzIHRvIHplcm9cclxuICAgICAgICAvLyBoaW50OiB0aGlzIGlzIGEgd2F5IHRvIHJlc3BvbmQgcHJvZ3JhbW1hdGljYWxseSB0byBleHRlcm5hbCB2YWx1ZSBjaGFuZ2VzLlxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMb2cubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEEgY2hhbmdlIHRvIGBjb3VudGVyYCBpcyB0aGUgb25seSBjaGFuZ2Ugd2UgY2FyZSBhYm91dFxyXG4gICAgICAgIGxldCBwcm9wID0gY2hhbmdlc1snY291bnRlciddO1xyXG4gICAgICAgIGxldCBjdXIgPSBwcm9wLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBsZXQgcHJldiA9IEpTT04uc3RyaW5naWZ5KHByb3AucHJldmlvdXNWYWx1ZSk7IC8vIGZpcnN0IHRpbWUgaXMge307IGFmdGVyIGlzIGludGVnZXJcclxuICAgICAgICB0aGlzLmNoYW5nZUxvZy5wdXNoKGBjb3VudGVyOiBjdXJyZW50VmFsdWUgPSAke2N1cn0sIHByZXZpb3VzVmFsdWUgPSAke3ByZXZ9YCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXItcGFyZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgIDxkaXYgY2xhc3M9XCJwYXJlbnRcIj5cclxuICAgIDxoMj5Db3VudGVyIFNweTwvaDI+XHJcblxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwidXBkYXRlQ291bnRlcigpXCI+VXBkYXRlIGNvdW50ZXI8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cInJlc2V0KClcIj5SZXNldCBDb3VudGVyPC9idXR0b24+XHJcblxyXG4gICAgPG15LWNvdW50ZXIgW2NvdW50ZXJdPVwidmFsdWVcIj48L215LWNvdW50ZXI+XHJcblxyXG4gICAgPGg0Pi0tIFNweSBMaWZlY3ljbGUgSG9vayBMb2cgLS08L2g0PlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgbXNnIG9mIHNweUxvZ1wiPnt7bXNnfX08L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogWycucGFyZW50IHtiYWNrZ3JvdW5kOiBnb2xkO30nXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtNeUNvdW50ZXJdLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2VyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50ZXJQYXJlbnRDb21wb25lbnQge1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIHNweUxvZzpzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2xvZ2dlcjpMb2dnZXJTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjpMb2dnZXJTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5zcHlMb2cgPSBsb2dnZXIubG9ncztcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ291bnRlcigpIHtcclxuICAgICAgICB0aGlzLnZhbHVlICs9IDE7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLnRpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coJy0tIHJlc2V0IC0tJyk7XHJcbiAgICAgICAgdGhpcy52YWx1ZT0wO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci50aWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
