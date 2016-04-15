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
                        template: "\n  <div class=\"counter\">\n    Counter = {{counter}}\n\n    <h5>-- Counter Change Log --</h5>\n    <div *ngFor=\"#chg of changeLog\" my-spy>{{chg}}</div>\n  </div>\n  ",
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
                        template: "\n   <div class=\"parent\">\n    <h2>Counter Spy</h2>\n\n    <button (click)=\"updateCounter()\">Update counter</button>\n    <button (click)=\"reset()\">Reset Counter</button>\n\n    <my-counter [counter]=\"value\"></my-counter>\n\n    <h4>-- Spy Lifecycle Hook Log --</h4>\n    <div *ngFor=\"#msg of spyLog\">{{msg}}</div>\n   </div>\n  ",
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
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFBQTtvQkFFSSxjQUFTLEdBQVksRUFBRSxDQUFDO2dCQWlCNUIsQ0FBQztnQkFmRywrQkFBVyxHQUFYLFVBQVksT0FBK0M7b0JBRXZELG9EQUFvRDtvQkFDcEQsNkVBQTZFO29CQUM3RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztvQkFFRCx5REFBeUQ7b0JBQ3pELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7b0JBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDZCQUEyQixHQUFHLDBCQUFxQixJQUFNLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFoQkQ7b0JBQUMsWUFBSyxFQUFFOzswREFBQTtnQkFkWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsMktBT1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsbUVBQW1FLENBQUM7d0JBQzdFLFVBQVUsRUFBQyxDQUFDLG1CQUFHLENBQUM7cUJBQ25CLENBQUM7OzZCQUFBO2dCQW9CRixnQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsaUNBbUJDLENBQUE7WUFFRCx5Q0FBeUM7WUFxQnpDO2dCQU1JLGdDQUFZLE1BQW9CO29CQUpoQyxXQUFNLEdBQVksRUFBRSxDQUFDO29CQUtqQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsOENBQWEsR0FBYjtvQkFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxzQ0FBSyxHQUFMO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQXhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxxVkFZWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzt3QkFDdkMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUN2QixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM3QixDQUFDOzswQ0FBQTtnQkF1QkYsNkJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELDJEQXNCQyxDQUFBOzs7O0FBSUQ7Ozs7R0FJRyIsImZpbGUiOiJsaWZlY3ljbGUtaG9va3MvY291bnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LFxyXG4gICAgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsXHJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge1NweX0gZnJvbSAnLi9zcHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSAgZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktY291bnRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJjb3VudGVyXCI+XHJcbiAgICBDb3VudGVyID0ge3tjb3VudGVyfX1cclxuXHJcbiAgICA8aDU+LS0gQ291bnRlciBDaGFuZ2UgTG9nIC0tPC9oNT5cclxuICAgIDxkaXYgKm5nRm9yPVwiI2NoZyBvZiBjaGFuZ2VMb2dcIiBteS1zcHk+e3tjaGd9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFsnLmNvdW50ZXIge2JhY2tncm91bmQ6IExpZ2h0WWVsbG93OyBwYWRkaW5nOiA4cHg7IG1hcmdpbi10b3A6IDhweH0nXSxcclxuICAgIGRpcmVjdGl2ZXM6W1NweV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15Q291bnRlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBjb3VudGVyOiBudW1iZXI7XHJcbiAgICBjaGFuZ2VMb2c6c3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xyXG5cclxuICAgICAgICAvLyBFbXB0eSB0aGUgY2hhbmdlTG9nIHdoZW5ldmVyIGNvdW50ZXIgZ29lcyB0byB6ZXJvXHJcbiAgICAgICAgLy8gaGludDogdGhpcyBpcyBhIHdheSB0byByZXNwb25kIHByb2dyYW1tYXRpY2FsbHkgdG8gZXh0ZXJuYWwgdmFsdWUgY2hhbmdlcy5cclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9nLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBIGNoYW5nZSB0byBgY291bnRlcmAgaXMgdGhlIG9ubHkgY2hhbmdlIHdlIGNhcmUgYWJvdXRcclxuICAgICAgICBsZXQgcHJvcCA9IGNoYW5nZXNbJ2NvdW50ZXInXTtcclxuICAgICAgICBsZXQgY3VyID0gcHJvcC5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgbGV0IHByZXYgPSBKU09OLnN0cmluZ2lmeShwcm9wLnByZXZpb3VzVmFsdWUpOyAvLyBmaXJzdCB0aW1lIGlzIHt9OyBhZnRlciBpcyBpbnRlZ2VyXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VMb2cucHVzaChgY291bnRlcjogY3VycmVudFZhbHVlID0gJHtjdXJ9LCBwcmV2aW91c1ZhbHVlID0gJHtwcmV2fWApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb3VudGVyLXBhcmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICA8ZGl2IGNsYXNzPVwicGFyZW50XCI+XHJcbiAgICA8aDI+Q291bnRlciBTcHk8L2gyPlxyXG5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cInVwZGF0ZUNvdW50ZXIoKVwiPlVwZGF0ZSBjb3VudGVyPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+UmVzZXQgQ291bnRlcjwvYnV0dG9uPlxyXG5cclxuICAgIDxteS1jb3VudGVyIFtjb3VudGVyXT1cInZhbHVlXCI+PC9teS1jb3VudGVyPlxyXG5cclxuICAgIDxoND4tLSBTcHkgTGlmZWN5Y2xlIEhvb2sgTG9nIC0tPC9oND5cclxuICAgIDxkaXYgKm5nRm9yPVwiI21zZyBvZiBzcHlMb2dcIj57e21zZ319PC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFsnLnBhcmVudCB7YmFja2dyb3VuZDogZ29sZDt9J10sXHJcbiAgICBkaXJlY3RpdmVzOiBbTXlDb3VudGVyXSxcclxuICAgIHByb3ZpZGVyczogW0xvZ2dlclNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyUGFyZW50Q29tcG9uZW50IHtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBzcHlMb2c6c3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9sb2dnZXI6TG9nZ2VyU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6TG9nZ2VyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuc3B5TG9nID0gbG9nZ2VyLmxvZ3M7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvdW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSArPSAxO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci50aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKCctLSByZXNldCAtLScpO1xyXG4gICAgICAgIHRoaXMudmFsdWU9MDtcclxuICAgICAgICB0aGlzLl9sb2dnZXIudGljaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qXHJcbiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG4gY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
