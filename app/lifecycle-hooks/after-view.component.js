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
    var ChildViewComponent, AfterViewComponent, AfterViewParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            //////////////////
            ChildViewComponent = (function () {
                function ChildViewComponent() {
                    this.hero = 'Magneta';
                }
                ChildViewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-child',
                        template: '<input [(ngModel)]="hero">'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildViewComponent);
                return ChildViewComponent;
            }());
            exports_1("ChildViewComponent", ChildViewComponent);
            //////////////////////
            AfterViewComponent = (function () {
                function AfterViewComponent(_logger) {
                    this._logger = _logger;
                    this._prevHero = '';
                    this.comment = '';
                    this._logIt('AfterView constructor');
                }
                AfterViewComponent.prototype.ngAfterViewInit = function () {
                    // viewChild is set after the view has been initialized
                    this._logIt('AfterViewInit');
                    this._doSomething();
                };
                AfterViewComponent.prototype.ngAfterViewChecked = function () {
                    // viewChild is updated after the view has been checked
                    if (this._prevHero === this.viewChild.hero) {
                        this._logIt('AfterViewChecked (no change)');
                    }
                    else {
                        this._prevHero = this.viewChild.hero;
                        this._logIt('AfterViewChecked');
                        this._doSomething();
                    }
                };
                // This surrogate for real business logic sets the `comment`
                AfterViewComponent.prototype._doSomething = function () {
                    var _this = this;
                    var c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
                    if (c !== this.comment) {
                        // Wait a tick because the component's view has already been checked
                        setTimeout(function () { return _this.comment = c; }, 0);
                    }
                };
                AfterViewComponent.prototype._logIt = function (method) {
                    var vc = this.viewChild;
                    var message = method + ": " + (vc ? vc.hero : 'no') + " child view";
                    this._logger.log(message);
                };
                __decorate([
                    core_1.ViewChild(ChildViewComponent), 
                    __metadata('design:type', ChildViewComponent)
                ], AfterViewComponent.prototype, "viewChild", void 0);
                AfterViewComponent = __decorate([
                    core_1.Component({
                        selector: 'after-view',
                        template: "\n    <div>-- child view begins --</div>\n      <my-child></my-child>\n    <div>-- child view ends --</div>"
                            + "\n    <p *ngIf=\"comment\" class=\"comment\">\n      {{comment}}\n    </p>\n  ",
                        directives: [ChildViewComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterViewComponent);
                return AfterViewComponent;
            }());
            exports_1("AfterViewComponent", AfterViewComponent);
            //////////////
            AfterViewParentComponent = (function () {
                function AfterViewParentComponent(logger) {
                    this.show = true;
                    this.logs = logger.logs;
                }
                AfterViewParentComponent.prototype.reset = function () {
                    var _this = this;
                    this.logs.length = 0;
                    // quickly remove and reload AfterViewComponent which recreates it
                    this.show = false;
                    setTimeout(function () { return _this.show = true; }, 0);
                };
                AfterViewParentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-view-parent',
                        template: "\n  <div class=\"parent\">\n    <h2>AfterView</h2>\n\n    <after-view  *ngIf=\"show\"></after-view>\n\n    <h4>-- AfterView Logs --</h4>\n    <p><button (click)=\"reset()\">Reset</button></p>\n    <div *ngFor=\"#msg of logs\">{{msg}}</div>\n  </div>\n  ",
                        styles: ['.parent {background: burlywood}'],
                        providers: [logger_service_1.LoggerService],
                        directives: [AfterViewComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterViewParentComponent);
                return AfterViewParentComponent;
            }());
            exports_1("AfterViewParentComponent", AfterViewParentComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9hZnRlci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLGtCQUFrQjtZQUtsQjtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsU0FBUyxDQUFDO2dCQUNyQixDQUFDO2dCQU5EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSw0QkFBNEI7cUJBQ3pDLENBQUM7O3NDQUFBO2dCQUdGLHlCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxtREFFQyxDQUFBO1lBRUQsc0JBQXNCO1lBZXRCO2dCQU1JLDRCQUFvQixPQUFxQjtvQkFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztvQkFMakMsY0FBUyxHQUFHLEVBQUUsQ0FBQztvQkEwQnZCLFlBQU8sR0FBRyxFQUFFLENBQUM7b0JBcEJULElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCw0Q0FBZSxHQUFmO29CQUNJLHVEQUF1RDtvQkFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUVELCtDQUFrQixHQUFsQjtvQkFDSSx1REFBdUQ7b0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7b0JBQ2hELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0wsQ0FBQztnQkFJRCw0REFBNEQ7Z0JBQ3BELHlDQUFZLEdBQXBCO29CQUFBLGlCQU1DO29CQUxHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO29CQUNwRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLG9FQUFvRTt3QkFDcEUsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDMUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVPLG1DQUFNLEdBQWQsVUFBZSxNQUFhO29CQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUN4QixJQUFJLE9BQU8sR0FBTSxNQUFNLFdBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUMsSUFBSSxpQkFBYSxDQUFBO29CQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkF0Q0Q7b0JBQUMsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs7cUVBQUE7Z0JBbEJsQztvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsNkdBR3VCOzhCQUMvQixnRkFJSDt3QkFFQyxVQUFVLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDbkMsQ0FBQzs7c0NBQUE7Z0JBNkNGLHlCQUFDO1lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtZQTVDRCxtREE0Q0MsQ0FBQTtZQUVELGNBQWM7WUFrQmQ7Z0JBSUksa0NBQVksTUFBb0I7b0JBRmhDLFNBQUksR0FBRyxJQUFJLENBQUM7b0JBR1IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELHdDQUFLLEdBQUw7b0JBQUEsaUJBS0M7b0JBSkcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO29CQUNuQixrRUFBa0U7b0JBQ2xFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNsQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN6QyxDQUFDO2dCQTlCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSwrUEFVWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzt3QkFDM0MsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQzt3QkFDekIsVUFBVSxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQ25DLENBQUM7OzRDQUFBO2dCQWVGLCtCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCwrREFjQyxDQUFBOzs7O0FBR0Q7Ozs7R0FJRyIsImZpbGUiOiJsaWZlY3ljbGUtaG9va3MvYWZ0ZXItdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2V9ICBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktY2hpbGQnLFxyXG4gICAgdGVtcGxhdGU6ICc8aW5wdXQgWyhuZ01vZGVsKV09XCJoZXJvXCI+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hpbGRWaWV3Q29tcG9uZW50IHtcclxuICAgIGhlcm8gPSAnTWFnbmV0YSc7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmdGVyLXZpZXcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+LS0gY2hpbGQgdmlldyBiZWdpbnMgLS08L2Rpdj5cclxuICAgICAgPG15LWNoaWxkPjwvbXktY2hpbGQ+XHJcbiAgICA8ZGl2Pi0tIGNoaWxkIHZpZXcgZW5kcyAtLTwvZGl2PmBcclxuICAgICsgYFxyXG4gICAgPHAgKm5nSWY9XCJjb21tZW50XCIgY2xhc3M9XCJjb21tZW50XCI+XHJcbiAgICAgIHt7Y29tbWVudH19XHJcbiAgICA8L3A+XHJcbiAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbQ2hpbGRWaWV3Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWZ0ZXJWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgcHJpdmF0ZSBfcHJldkhlcm8gPSAnJztcclxuXHJcbiAgICAvLyBRdWVyeSBmb3IgYSBWSUVXIGNoaWxkIG9mIHR5cGUgYENoaWxkVmlld0NvbXBvbmVudGBcclxuICAgIEBWaWV3Q2hpbGQoQ2hpbGRWaWV3Q29tcG9uZW50KSB2aWV3Q2hpbGQ6IENoaWxkVmlld0NvbXBvbmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnZXI6TG9nZ2VyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5fbG9nSXQoJ0FmdGVyVmlldyBjb25zdHJ1Y3RvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvLyB2aWV3Q2hpbGQgaXMgc2V0IGFmdGVyIHRoZSB2aWV3IGhhcyBiZWVuIGluaXRpYWxpemVkXHJcbiAgICAgICAgdGhpcy5fbG9nSXQoJ0FmdGVyVmlld0luaXQnKTtcclxuICAgICAgICB0aGlzLl9kb1NvbWV0aGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgICAgICAvLyB2aWV3Q2hpbGQgaXMgdXBkYXRlZCBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiBjaGVja2VkXHJcbiAgICAgICAgaWYgKHRoaXMuX3ByZXZIZXJvID09PSB0aGlzLnZpZXdDaGlsZC5oZXJvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ0l0KCdBZnRlclZpZXdDaGVja2VkIChubyBjaGFuZ2UpJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJldkhlcm8gPSB0aGlzLnZpZXdDaGlsZC5oZXJvO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dJdCgnQWZ0ZXJWaWV3Q2hlY2tlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLl9kb1NvbWV0aGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21tZW50ID0gJyc7XHJcblxyXG4gICAgLy8gVGhpcyBzdXJyb2dhdGUgZm9yIHJlYWwgYnVzaW5lc3MgbG9naWMgc2V0cyB0aGUgYGNvbW1lbnRgXHJcbiAgICBwcml2YXRlIF9kb1NvbWV0aGluZygpIHtcclxuICAgICAgICBsZXQgYyA9IHRoaXMudmlld0NoaWxkLmhlcm8ubGVuZ3RoID4gMTAgPyBcIlRoYXQncyBhIGxvbmcgbmFtZVwiIDogJyc7XHJcbiAgICAgICAgaWYgKGMgIT09IHRoaXMuY29tbWVudCkge1xyXG4gICAgICAgICAgICAvLyBXYWl0IGEgdGljayBiZWNhdXNlIHRoZSBjb21wb25lbnQncyB2aWV3IGhhcyBhbHJlYWR5IGJlZW4gY2hlY2tlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29tbWVudCA9IGMsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2dJdChtZXRob2Q6c3RyaW5nKXtcclxuICAgICAgICBsZXQgdmMgPSB0aGlzLnZpZXdDaGlsZDtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IGAke21ldGhvZH06ICR7dmMgPyB2Yy5oZXJvOidubyd9IGNoaWxkIHZpZXdgXHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIC8vIC4uLlxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWZ0ZXItdmlldy1wYXJlbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwicGFyZW50XCI+XHJcbiAgICA8aDI+QWZ0ZXJWaWV3PC9oMj5cclxuXHJcbiAgICA8YWZ0ZXItdmlldyAgKm5nSWY9XCJzaG93XCI+PC9hZnRlci12aWV3PlxyXG5cclxuICAgIDxoND4tLSBBZnRlclZpZXcgTG9ncyAtLTwvaDQ+XHJcbiAgICA8cD48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj48L3A+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cIiNtc2cgb2YgbG9nc1wiPnt7bXNnfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbJy5wYXJlbnQge2JhY2tncm91bmQ6IGJ1cmx5d29vZH0nXSxcclxuICAgIHByb3ZpZGVyczpbTG9nZ2VyU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQWZ0ZXJWaWV3Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWZ0ZXJWaWV3UGFyZW50Q29tcG9uZW50IHtcclxuICAgIGxvZ3M6c3RyaW5nW107XHJcbiAgICBzaG93ID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6TG9nZ2VyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5sb2dzID0gbG9nZ2VyLmxvZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dzLmxlbmd0aD0wO1xyXG4gICAgICAgIC8vIHF1aWNrbHkgcmVtb3ZlIGFuZCByZWxvYWQgQWZ0ZXJWaWV3Q29tcG9uZW50IHdoaWNoIHJlY3JlYXRlcyBpdFxyXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93ID0gdHJ1ZSwgMClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG4gY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
