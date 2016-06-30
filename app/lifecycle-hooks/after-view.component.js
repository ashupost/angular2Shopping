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
var core_1 = require('@angular/core');
var logger_service_1 = require('./logger.service');
//////////////////
var ChildViewComponent = (function () {
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
exports.ChildViewComponent = ChildViewComponent;
//////////////////////
var AfterViewComponent = (function () {
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
exports.AfterViewComponent = AfterViewComponent;
//////////////
var AfterViewParentComponent = (function () {
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
            template: "\n  <div class=\"parent\">\n    <h2>AfterView</h2>\n\n    <after-view  *ngIf=\"show\"></after-view>\n\n    <h4>-- AfterView Logs --</h4>\n    <p><button (click)=\"reset()\">Reset</button></p>\n    <div *ngFor=\"let msg of logs\">{{msg}}</div>\n  </div>\n  ",
            styles: ['.parent {background: burlywood}'],
            providers: [logger_service_1.LoggerService],
            directives: [AfterViewComponent]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], AfterViewParentComponent);
    return AfterViewParentComponent;
}());
exports.AfterViewParentComponent = AfterViewParentComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9hZnRlci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFFLGVBQWUsQ0FBQyxDQUFBO0FBRXJGLCtCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBRWhELGtCQUFrQjtBQUtsQjtJQUFBO1FBQ0ksU0FBSSxHQUFHLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBTkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLDRCQUE0QjtTQUN6QyxDQUFDOzswQkFBQTtJQUdGLHlCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwwQkFBa0IscUJBRTlCLENBQUE7QUFFRCxzQkFBc0I7QUFldEI7SUFNSSw0QkFBb0IsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUxqQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBMEJ2QixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBcEJULElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUNJLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0NBQWtCLEdBQWxCO1FBQ0ksdURBQXVEO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFJRCw0REFBNEQ7SUFDcEQseUNBQVksR0FBcEI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyQixvRUFBb0U7WUFDcEUsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1DQUFNLEdBQWQsVUFBZSxNQUFhO1FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsSUFBSSxPQUFPLEdBQU0sTUFBTSxXQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFDLElBQUksaUJBQWEsQ0FBQTtRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBdENEO1FBQUMsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs7eURBQUE7SUFsQmxDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSw2R0FHdUI7a0JBQy9CLGdGQUlIO1lBRUMsVUFBVSxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDbkMsQ0FBQzs7MEJBQUE7SUE2Q0YseUJBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLDBCQUFrQixxQkE0QzlCLENBQUE7QUFFRCxjQUFjO0FBa0JkO0lBSUksa0NBQVksTUFBb0I7UUFGaEMsU0FBSSxHQUFHLElBQUksQ0FBQztRQUdSLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsd0NBQUssR0FBTDtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQ25CLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUE5Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsa1FBVVg7WUFDQyxNQUFNLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztZQUMzQyxTQUFTLEVBQUMsQ0FBQyw4QkFBYSxDQUFDO1lBQ3pCLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ25DLENBQUM7O2dDQUFBO0lBZUYsK0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLGdDQUF3QiwyQkFjcEMsQ0FBQTtBQUdEOzs7O0dBSUciLCJmaWxlIjoibGlmZWN5Y2xlLWhvb2tzL2FmdGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsICBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSAgZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWNoaWxkJyxcclxuICAgIHRlbXBsYXRlOiAnPGlucHV0IFsobmdNb2RlbCldPVwiaGVyb1wiPidcclxufSlcclxuZXhwb3J0IGNsYXNzIENoaWxkVmlld0NvbXBvbmVudCB7XHJcbiAgICBoZXJvID0gJ01hZ25ldGEnO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZnRlci12aWV3JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2Pi0tIGNoaWxkIHZpZXcgYmVnaW5zIC0tPC9kaXY+XHJcbiAgICAgIDxteS1jaGlsZD48L215LWNoaWxkPlxyXG4gICAgPGRpdj4tLSBjaGlsZCB2aWV3IGVuZHMgLS08L2Rpdj5gXHJcbiAgICArIGBcclxuICAgIDxwICpuZ0lmPVwiY29tbWVudFwiIGNsYXNzPVwiY29tbWVudFwiPlxyXG4gICAgICB7e2NvbW1lbnR9fVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcblxyXG4gICAgZGlyZWN0aXZlczogW0NoaWxkVmlld0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFmdGVyVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzICBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0IHtcclxuICAgIHByaXZhdGUgX3ByZXZIZXJvID0gJyc7XHJcblxyXG4gICAgLy8gUXVlcnkgZm9yIGEgVklFVyBjaGlsZCBvZiB0eXBlIGBDaGlsZFZpZXdDb21wb25lbnRgXHJcbiAgICBAVmlld0NoaWxkKENoaWxkVmlld0NvbXBvbmVudCkgdmlld0NoaWxkOiBDaGlsZFZpZXdDb21wb25lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2VyOkxvZ2dlclNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuX2xvZ0l0KCdBZnRlclZpZXcgY29uc3RydWN0b3InKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy8gdmlld0NoaWxkIGlzIHNldCBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiBpbml0aWFsaXplZFxyXG4gICAgICAgIHRoaXMuX2xvZ0l0KCdBZnRlclZpZXdJbml0Jyk7XHJcbiAgICAgICAgdGhpcy5fZG9Tb21ldGhpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICAgICAgLy8gdmlld0NoaWxkIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIHZpZXcgaGFzIGJlZW4gY2hlY2tlZFxyXG4gICAgICAgIGlmICh0aGlzLl9wcmV2SGVybyA9PT0gdGhpcy52aWV3Q2hpbGQuaGVybykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dJdCgnQWZ0ZXJWaWV3Q2hlY2tlZCAobm8gY2hhbmdlKScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXZIZXJvID0gdGhpcy52aWV3Q2hpbGQuaGVybztcclxuICAgICAgICAgICAgdGhpcy5fbG9nSXQoJ0FmdGVyVmlld0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5fZG9Tb21ldGhpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tbWVudCA9ICcnO1xyXG5cclxuICAgIC8vIFRoaXMgc3Vycm9nYXRlIGZvciByZWFsIGJ1c2luZXNzIGxvZ2ljIHNldHMgdGhlIGBjb21tZW50YFxyXG4gICAgcHJpdmF0ZSBfZG9Tb21ldGhpbmcoKSB7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLnZpZXdDaGlsZC5oZXJvLmxlbmd0aCA+IDEwID8gXCJUaGF0J3MgYSBsb25nIG5hbWVcIiA6ICcnO1xyXG4gICAgICAgIGlmIChjICE9PSB0aGlzLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgLy8gV2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgY29tcG9uZW50J3MgdmlldyBoYXMgYWxyZWFkeSBiZWVuIGNoZWNrZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNvbW1lbnQgPSBjLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nSXQobWV0aG9kOnN0cmluZyl7XHJcbiAgICAgICAgbGV0IHZjID0gdGhpcy52aWV3Q2hpbGQ7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgJHttZXRob2R9OiAke3ZjID8gdmMuaGVybzonbm8nfSBjaGlsZCB2aWV3YFxyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2cobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICAvLyAuLi5cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FmdGVyLXZpZXctcGFyZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInBhcmVudFwiPlxyXG4gICAgPGgyPkFmdGVyVmlldzwvaDI+XHJcblxyXG4gICAgPGFmdGVyLXZpZXcgICpuZ0lmPVwic2hvd1wiPjwvYWZ0ZXItdmlldz5cclxuXHJcbiAgICA8aDQ+LS0gQWZ0ZXJWaWV3IExvZ3MgLS08L2g0PlxyXG4gICAgPHA+PGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPlJlc2V0PC9idXR0b24+PC9wPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgbXNnIG9mIGxvZ3NcIj57e21zZ319PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogWycucGFyZW50IHtiYWNrZ3JvdW5kOiBidXJseXdvb2R9J10sXHJcbiAgICBwcm92aWRlcnM6W0xvZ2dlclNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczogW0FmdGVyVmlld0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFmdGVyVmlld1BhcmVudENvbXBvbmVudCB7XHJcbiAgICBsb2dzOnN0cmluZ1tdO1xyXG4gICAgc2hvdyA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOkxvZ2dlclNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMubG9ncyA9IGxvZ2dlci5sb2dzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubG9ncy5sZW5ndGg9MDtcclxuICAgICAgICAvLyBxdWlja2x5IHJlbW92ZSBhbmQgcmVsb2FkIEFmdGVyVmlld0NvbXBvbmVudCB3aGljaCByZWNyZWF0ZXMgaXRcclxuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvdyA9IHRydWUsIDApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuIGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
