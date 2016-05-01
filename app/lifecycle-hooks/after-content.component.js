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
    var ChildComponent, AfterContentComponent, AfterContentParentComponent;
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
            ChildComponent = (function () {
                function ChildComponent() {
                    this.hero = 'Magneta';
                }
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'my-child',
                        template: '<input [(ngModel)]="hero">'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
            //////////////////////
            AfterContentComponent = (function () {
                function AfterContentComponent(_logger) {
                    this._logger = _logger;
                    this._prevHero = '';
                    this.comment = '';
                    this._logIt('AfterContent constructor');
                }
                AfterContentComponent.prototype.ngAfterContentInit = function () {
                    // viewChild is set after the view has been initialized
                    this._logIt('AfterContentInit');
                    this._doSomething();
                };
                AfterContentComponent.prototype.ngAfterContentChecked = function () {
                    // viewChild is updated after the view has been checked
                    if (this._prevHero === this.contentChild.hero) {
                        this._logIt('AfterContentChecked (no change)');
                    }
                    else {
                        this._prevHero = this.contentChild.hero;
                        this._logIt('AfterContentChecked');
                        this._doSomething();
                    }
                };
                // This surrogate for real business logic sets the `comment`
                AfterContentComponent.prototype._doSomething = function () {
                    this.comment = this.contentChild.hero.length > 10 ? "That's a long name" : '';
                };
                AfterContentComponent.prototype._logIt = function (method) {
                    var vc = this.contentChild;
                    var message = method + ": " + (vc ? vc.hero : 'no') + " child view";
                    this._logger.log(message);
                };
                __decorate([
                    core_1.ContentChild(ChildComponent), 
                    __metadata('design:type', ChildComponent)
                ], AfterContentComponent.prototype, "contentChild", void 0);
                AfterContentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-content',
                        template: "\n    <div>-- projected content begins --</div>\n      <ng-content></ng-content>\n    <div>-- projected content ends --</div>"
                            + "\n    <p *ngIf=\"comment\" class=\"comment\">\n      {{comment}}\n    </p>\n  "
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterContentComponent);
                return AfterContentComponent;
            }());
            exports_1("AfterContentComponent", AfterContentComponent);
            //////////////
            AfterContentParentComponent = (function () {
                function AfterContentParentComponent(logger) {
                    this.show = true;
                    this.logs = logger.logs;
                }
                AfterContentParentComponent.prototype.reset = function () {
                    var _this = this;
                    this.logs.length = 0;
                    // quickly remove and reload AfterContentComponent which recreates it
                    this.show = false;
                    setTimeout(function () { return _this.show = true; }, 0);
                };
                AfterContentParentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-content-parent',
                        template: "\n  <div class=\"parent\">\n    <h2>AfterContent</h2>\n\n    <div   *ngIf=\"show\">" +
                            "<after-content>\n        <my-child></my-child>\n      </after-content>"
                            + "</div>\n\n    <h4>-- AfterContent Logs --</h4>\n    <p><button (click)=\"reset()\">Reset</button></p>\n    <div *ngFor=\"let msg of logs\">{{msg}}</div>\n  </div>\n  ",
                        styles: ['.parent {background: burlywood}'],
                        providers: [logger_service_1.LoggerService],
                        directives: [AfterContentComponent, ChildComponent]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterContentParentComponent);
                return AfterContentParentComponent;
            }());
            exports_1("AfterContentParentComponent", AfterContentParentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9hZnRlci1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLGtCQUFrQjtZQUtsQjtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsU0FBUyxDQUFDO2dCQUNyQixDQUFDO2dCQU5EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSw0QkFBNEI7cUJBQ3pDLENBQUM7O2tDQUFBO2dCQUdGLHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBO1lBRUQsc0JBQXNCO1lBYXRCO2dCQU1JLCtCQUFvQixPQUFxQjtvQkFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztvQkFMakMsY0FBUyxHQUFHLEVBQUUsQ0FBQztvQkEwQnZCLFlBQU8sR0FBRyxFQUFFLENBQUM7b0JBcEJULElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFFRCxrREFBa0IsR0FBbEI7b0JBQ0ksdURBQXVEO29CQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxxREFBcUIsR0FBckI7b0JBQ0ksdURBQXVEO29CQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QixDQUFDO2dCQUNMLENBQUM7Z0JBS0QsNERBQTREO2dCQUNwRCw0Q0FBWSxHQUFwQjtvQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO2dCQUNsRixDQUFDO2dCQUVPLHNDQUFNLEdBQWQsVUFBZSxNQUFhO29CQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUMzQixJQUFJLE9BQU8sR0FBTSxNQUFNLFdBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUMsSUFBSSxpQkFBYSxDQUFBO29CQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFuQ0Q7b0JBQUMsbUJBQVksQ0FBQyxjQUFjLENBQUM7OzJFQUFBO2dCQWhCakM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFDLCtIQUcrQjs4QkFDdEMsZ0ZBSUg7cUJBQ0YsQ0FBQzs7eUNBQUE7Z0JBMENGLDRCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCx5REF5Q0MsQ0FBQTtZQUVELGNBQWM7WUFzQmQ7Z0JBSUkscUNBQVksTUFBb0I7b0JBRmhDLFNBQUksR0FBRyxJQUFJLENBQUM7b0JBR1IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDJDQUFLLEdBQUw7b0JBQUEsaUJBS0M7b0JBSkcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO29CQUNuQixxRUFBcUU7b0JBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNsQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN6QyxDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSxxRkFJVzs0QkFDckIsd0VBRW1COzhCQUNqQix3S0FNSDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzt3QkFDM0MsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQzt3QkFDekIsVUFBVSxFQUFFLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDO3FCQUN0RCxDQUFDOzsrQ0FBQTtnQkFlRixrQ0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQscUVBY0MsQ0FBQSIsImZpbGUiOiJsaWZlY3ljbGUtaG9va3MvYWZ0ZXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2V9ICBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktY2hpbGQnLFxyXG4gICAgdGVtcGxhdGU6ICc8aW5wdXQgWyhuZ01vZGVsKV09XCJoZXJvXCI+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hpbGRDb21wb25lbnQge1xyXG4gICAgaGVybyA9ICdNYWduZXRhJztcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWZ0ZXItY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8ZGl2Pi0tIHByb2plY3RlZCBjb250ZW50IGJlZ2lucyAtLTwvZGl2PlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8ZGl2Pi0tIHByb2plY3RlZCBjb250ZW50IGVuZHMgLS08L2Rpdj5gXHJcbiAgICArIGBcclxuICAgIDxwICpuZ0lmPVwiY29tbWVudFwiIGNsYXNzPVwiY29tbWVudFwiPlxyXG4gICAgICB7e2NvbW1lbnR9fVxyXG4gICAgPC9wPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFmdGVyQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzICBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIHByaXZhdGUgX3ByZXZIZXJvID0gJyc7XHJcblxyXG4gICAgLy8gUXVlcnkgZm9yIGEgQ09OVEVOVCBjaGlsZCBvZiB0eXBlIGBDaGlsZENvbXBvbmVudGBcclxuICAgIEBDb250ZW50Q2hpbGQoQ2hpbGRDb21wb25lbnQpIGNvbnRlbnRDaGlsZDogQ2hpbGRDb21wb25lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2VyOkxvZ2dlclNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuX2xvZ0l0KCdBZnRlckNvbnRlbnQgY29uc3RydWN0b3InKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgLy8gdmlld0NoaWxkIGlzIHNldCBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiBpbml0aWFsaXplZFxyXG4gICAgICAgIHRoaXMuX2xvZ0l0KCdBZnRlckNvbnRlbnRJbml0Jyk7XHJcbiAgICAgICAgdGhpcy5fZG9Tb21ldGhpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAgICAgLy8gdmlld0NoaWxkIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIHZpZXcgaGFzIGJlZW4gY2hlY2tlZFxyXG4gICAgICAgIGlmICh0aGlzLl9wcmV2SGVybyA9PT0gdGhpcy5jb250ZW50Q2hpbGQuaGVybykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dJdCgnQWZ0ZXJDb250ZW50Q2hlY2tlZCAobm8gY2hhbmdlKScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXZIZXJvID0gdGhpcy5jb250ZW50Q2hpbGQuaGVybztcclxuICAgICAgICAgICAgdGhpcy5fbG9nSXQoJ0FmdGVyQ29udGVudENoZWNrZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5fZG9Tb21ldGhpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tbWVudCA9ICcnO1xyXG5cclxuXHJcbiAgICAvLyBUaGlzIHN1cnJvZ2F0ZSBmb3IgcmVhbCBidXNpbmVzcyBsb2dpYyBzZXRzIHRoZSBgY29tbWVudGBcclxuICAgIHByaXZhdGUgX2RvU29tZXRoaW5nKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IHRoaXMuY29udGVudENoaWxkLmhlcm8ubGVuZ3RoID4gMTAgPyBcIlRoYXQncyBhIGxvbmcgbmFtZVwiIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nSXQobWV0aG9kOnN0cmluZyl7XHJcbiAgICAgICAgbGV0IHZjID0gdGhpcy5jb250ZW50Q2hpbGQ7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgJHttZXRob2R9OiAke3ZjID8gdmMuaGVybzonbm8nfSBjaGlsZCB2aWV3YFxyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2cobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICAvLyAuLi5cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmdGVyLWNvbnRlbnQtcGFyZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInBhcmVudFwiPlxyXG4gICAgPGgyPkFmdGVyQ29udGVudDwvaDI+XHJcblxyXG4gICAgPGRpdiAgICpuZ0lmPVwic2hvd1wiPmAgK1xyXG4gICAgYDxhZnRlci1jb250ZW50PlxyXG4gICAgICAgIDxteS1jaGlsZD48L215LWNoaWxkPlxyXG4gICAgICA8L2FmdGVyLWNvbnRlbnQ+YFxyXG4gICAgKyBgPC9kaXY+XHJcblxyXG4gICAgPGg0Pi0tIEFmdGVyQ29udGVudCBMb2dzIC0tPC9oND5cclxuICAgIDxwPjxidXR0b24gKGNsaWNrKT1cInJlc2V0KClcIj5SZXNldDwvYnV0dG9uPjwvcD5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IG1zZyBvZiBsb2dzXCI+e3ttc2d9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFsnLnBhcmVudCB7YmFja2dyb3VuZDogYnVybHl3b29kfSddLFxyXG4gICAgcHJvdmlkZXJzOltMb2dnZXJTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtBZnRlckNvbnRlbnRDb21wb25lbnQsIENoaWxkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWZ0ZXJDb250ZW50UGFyZW50Q29tcG9uZW50IHtcclxuICAgIGxvZ3M6c3RyaW5nW107XHJcbiAgICBzaG93ID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6TG9nZ2VyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5sb2dzID0gbG9nZ2VyLmxvZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dzLmxlbmd0aD0wO1xyXG4gICAgICAgIC8vIHF1aWNrbHkgcmVtb3ZlIGFuZCByZWxvYWQgQWZ0ZXJDb250ZW50Q29tcG9uZW50IHdoaWNoIHJlY3JlYXRlcyBpdFxyXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93ID0gdHJ1ZSwgMClcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
