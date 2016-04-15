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
                            + "</div>\n\n    <h4>-- AfterContent Logs --</h4>\n    <p><button (click)=\"reset()\">Reset</button></p>\n    <div *ngFor=\"#msg of logs\">{{msg}}</div>\n  </div>\n  ",
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
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9hZnRlci1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLGtCQUFrQjtZQUtsQjtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsU0FBUyxDQUFDO2dCQUNyQixDQUFDO2dCQU5EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSw0QkFBNEI7cUJBQ3pDLENBQUM7O2tDQUFBO2dCQUdGLHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBO1lBRUQsc0JBQXNCO1lBYXRCO2dCQU1JLCtCQUFvQixPQUFxQjtvQkFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztvQkFMakMsY0FBUyxHQUFHLEVBQUUsQ0FBQztvQkEwQnZCLFlBQU8sR0FBRyxFQUFFLENBQUM7b0JBcEJULElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFFRCxrREFBa0IsR0FBbEI7b0JBQ0ksdURBQXVEO29CQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxxREFBcUIsR0FBckI7b0JBQ0ksdURBQXVEO29CQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QixDQUFDO2dCQUNMLENBQUM7Z0JBS0QsNERBQTREO2dCQUNwRCw0Q0FBWSxHQUFwQjtvQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO2dCQUNsRixDQUFDO2dCQUVPLHNDQUFNLEdBQWQsVUFBZSxNQUFhO29CQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUMzQixJQUFJLE9BQU8sR0FBTSxNQUFNLFdBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUMsSUFBSSxpQkFBYSxDQUFBO29CQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFuQ0Q7b0JBQUMsbUJBQVksQ0FBQyxjQUFjLENBQUM7OzJFQUFBO2dCQWhCakM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFDLCtIQUcrQjs4QkFDdEMsZ0ZBSUg7cUJBQ0YsQ0FBQzs7eUNBQUE7Z0JBMENGLDRCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCx5REF5Q0MsQ0FBQTtZQUVELGNBQWM7WUFzQmQ7Z0JBSUkscUNBQVksTUFBb0I7b0JBRmhDLFNBQUksR0FBRyxJQUFJLENBQUM7b0JBR1IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDJDQUFLLEdBQUw7b0JBQUEsaUJBS0M7b0JBSkcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO29CQUNuQixxRUFBcUU7b0JBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNsQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN6QyxDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSxxRkFJVzs0QkFDckIsd0VBRW1COzhCQUNqQixxS0FNSDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzt3QkFDM0MsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQzt3QkFDekIsVUFBVSxFQUFFLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDO3FCQUN0RCxDQUFDOzsrQ0FBQTtnQkFlRixrQ0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQscUVBY0MsQ0FBQTs7OztBQUdEOzs7O0dBSUciLCJmaWxlIjoibGlmZWN5Y2xlLWhvb2tzL2FmdGVyLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsICBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSAgZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWNoaWxkJyxcclxuICAgIHRlbXBsYXRlOiAnPGlucHV0IFsobmdNb2RlbCldPVwiaGVyb1wiPidcclxufSlcclxuZXhwb3J0IGNsYXNzIENoaWxkQ29tcG9uZW50IHtcclxuICAgIGhlcm8gPSAnTWFnbmV0YSc7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmdGVyLWNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGRpdj4tLSBwcm9qZWN0ZWQgY29udGVudCBiZWdpbnMgLS08L2Rpdj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdj4tLSBwcm9qZWN0ZWQgY29udGVudCBlbmRzIC0tPC9kaXY+YFxyXG4gICAgKyBgXHJcbiAgICA8cCAqbmdJZj1cImNvbW1lbnRcIiBjbGFzcz1cImNvbW1lbnRcIj5cclxuICAgICAge3tjb21tZW50fX1cclxuICAgIDwvcD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZnRlckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyAgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBwcml2YXRlIF9wcmV2SGVybyA9ICcnO1xyXG5cclxuICAgIC8vIFF1ZXJ5IGZvciBhIENPTlRFTlQgY2hpbGQgb2YgdHlwZSBgQ2hpbGRDb21wb25lbnRgXHJcbiAgICBAQ29udGVudENoaWxkKENoaWxkQ29tcG9uZW50KSBjb250ZW50Q2hpbGQ6IENoaWxkQ29tcG9uZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dlcjpMb2dnZXJTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLl9sb2dJdCgnQWZ0ZXJDb250ZW50IGNvbnN0cnVjdG9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIC8vIHZpZXdDaGlsZCBpcyBzZXQgYWZ0ZXIgdGhlIHZpZXcgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcclxuICAgICAgICB0aGlzLl9sb2dJdCgnQWZ0ZXJDb250ZW50SW5pdCcpO1xyXG4gICAgICAgIHRoaXMuX2RvU29tZXRoaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgICAgIC8vIHZpZXdDaGlsZCBpcyB1cGRhdGVkIGFmdGVyIHRoZSB2aWV3IGhhcyBiZWVuIGNoZWNrZWRcclxuICAgICAgICBpZiAodGhpcy5fcHJldkhlcm8gPT09IHRoaXMuY29udGVudENoaWxkLmhlcm8pIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nSXQoJ0FmdGVyQ29udGVudENoZWNrZWQgKG5vIGNoYW5nZSknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2SGVybyA9IHRoaXMuY29udGVudENoaWxkLmhlcm87XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ0l0KCdBZnRlckNvbnRlbnRDaGVja2VkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RvU29tZXRoaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbW1lbnQgPSAnJztcclxuXHJcblxyXG4gICAgLy8gVGhpcyBzdXJyb2dhdGUgZm9yIHJlYWwgYnVzaW5lc3MgbG9naWMgc2V0cyB0aGUgYGNvbW1lbnRgXHJcbiAgICBwcml2YXRlIF9kb1NvbWV0aGluZygpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSB0aGlzLmNvbnRlbnRDaGlsZC5oZXJvLmxlbmd0aCA+IDEwID8gXCJUaGF0J3MgYSBsb25nIG5hbWVcIiA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvZ0l0KG1ldGhvZDpzdHJpbmcpe1xyXG4gICAgICAgIGxldCB2YyA9IHRoaXMuY29udGVudENoaWxkO1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gYCR7bWV0aG9kfTogJHt2YyA/IHZjLmhlcm86J25vJ30gY2hpbGQgdmlld2BcclxuICAgICAgICB0aGlzLl9sb2dnZXIubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgLy8gLi4uXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZnRlci1jb250ZW50LXBhcmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJwYXJlbnRcIj5cclxuICAgIDxoMj5BZnRlckNvbnRlbnQ8L2gyPlxyXG5cclxuICAgIDxkaXYgICAqbmdJZj1cInNob3dcIj5gICtcclxuICAgIGA8YWZ0ZXItY29udGVudD5cclxuICAgICAgICA8bXktY2hpbGQ+PC9teS1jaGlsZD5cclxuICAgICAgPC9hZnRlci1jb250ZW50PmBcclxuICAgICsgYDwvZGl2PlxyXG5cclxuICAgIDxoND4tLSBBZnRlckNvbnRlbnQgTG9ncyAtLTwvaDQ+XHJcbiAgICA8cD48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj48L3A+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cIiNtc2cgb2YgbG9nc1wiPnt7bXNnfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbJy5wYXJlbnQge2JhY2tncm91bmQ6IGJ1cmx5d29vZH0nXSxcclxuICAgIHByb3ZpZGVyczpbTG9nZ2VyU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQWZ0ZXJDb250ZW50Q29tcG9uZW50LCBDaGlsZENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFmdGVyQ29udGVudFBhcmVudENvbXBvbmVudCB7XHJcbiAgICBsb2dzOnN0cmluZ1tdO1xyXG4gICAgc2hvdyA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOkxvZ2dlclNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMubG9ncyA9IGxvZ2dlci5sb2dzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubG9ncy5sZW5ndGg9MDtcclxuICAgICAgICAvLyBxdWlja2x5IHJlbW92ZSBhbmQgcmVsb2FkIEFmdGVyQ29udGVudENvbXBvbmVudCB3aGljaCByZWNyZWF0ZXMgaXRcclxuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvdyA9IHRydWUsIDApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuIGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
