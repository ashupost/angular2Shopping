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
var Hero = (function () {
    function Hero(name) {
        this.name = name;
    }
    return Hero;
}());
var DoCheckComponent = (function () {
    function DoCheckComponent() {
        this.changeDetected = false;
        this.changeLog = [];
        this.oldHeroName = '';
        this.oldPower = '';
        this.oldLogLength = 0;
        this.noChangeCount = 0;
    }
    DoCheckComponent.prototype.ngDoCheck = function () {
        if (this.hero.name !== this.oldHeroName) {
            this.changeDetected = true;
            this.changeLog.push("DoCheck: Hero name changed to \"" + this.hero.name + "\" from \"" + this.oldHeroName + "\"");
            this.oldHeroName = this.hero.name;
        }
        if (this.power !== this.oldPower) {
            this.changeDetected = true;
            this.changeLog.push("DoCheck: Power changed to \"" + this.power + "\" from \"" + this.oldPower + "\"");
            this.oldPower = this.power;
        }
        if (this.changeDetected) {
            this.noChangeCount = 0;
        }
        else {
            // log that hook was called when there was no relevant change.
            var count = this.noChangeCount += 1;
            var noChangeMsg = "DoCheck called " + count + "x when no change to hero or power";
            if (count === 1) {
                // add new "no change" message
                this.changeLog.push(noChangeMsg);
            }
            else {
                // update last "no change" message
                this.changeLog[this.changeLog.length - 1] = noChangeMsg;
            }
        }
        this.changeDetected = false;
    };
    // Copied from OnChangesComponent
    DoCheckComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var prop = changes[propName];
            var cur = JSON.stringify(prop.currentValue);
            var prev = JSON.stringify(prop.previousValue);
            this.changeLog.push("OnChanges: " + propName + ": currentValue = " + cur + ", previousValue = " + prev);
        }
    };
    DoCheckComponent.prototype.reset = function () {
        this.changeDetected = true;
        this.changeLog.length = 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Hero)
    ], DoCheckComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DoCheckComponent.prototype, "power", void 0);
    DoCheckComponent = __decorate([
        core_1.Component({
            selector: 'do-check',
            template: "\n  <div class=\"hero\">\n    <p>{{hero.name}} can {{power}}</p>\n\n    <h4>-- Change Log --</h4>\n    <div *ngFor=\"let chg of changeLog\">{{chg}}</div>\n  </div>\n  ",
            styles: [
                '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
                'p {background: Yellow; padding: 8px; margin-top: 8px}'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DoCheckComponent);
    return DoCheckComponent;
}());
exports.DoCheckComponent = DoCheckComponent;
/***************************************/
var DoCheckParentComponent = (function () {
    function DoCheckParentComponent() {
        this.title = 'DoCheck';
        this.reset();
    }
    DoCheckParentComponent.prototype.reset = function () {
        this.hero = new Hero('Windstorm');
        this.power = 'sing';
        this.childView && this.childView.reset();
    };
    __decorate([
        core_1.ViewChild(DoCheckComponent), 
        __metadata('design:type', DoCheckComponent)
    ], DoCheckParentComponent.prototype, "childView", void 0);
    DoCheckParentComponent = __decorate([
        core_1.Component({
            selector: 'do-check-parent',
            templateUrl: 'templates/lifecycle-hooks/on-changes-parent.component.html',
            styles: ['.parent {background: Lavender}'],
            directives: [DoCheckComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DoCheckParentComponent);
    return DoCheckParentComponent;
}());
exports.DoCheckParentComponent = DoCheckParentComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9kby1jaGVjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0RSxlQUFlLENBQUMsQ0FBQTtBQUU1RjtJQUNJLGNBQW1CLElBQVc7UUFBWCxTQUFJLEdBQUosSUFBSSxDQUFPO0lBQUUsQ0FBQztJQUNyQyxXQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFpQkQ7SUFBQTtRQUlJLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBWSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBZ0R0QixDQUFDO0lBOUNHLG9DQUFTLEdBQVQ7UUFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQ0FBa0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFXLElBQUksQ0FBQyxXQUFXLE9BQUcsQ0FBQyxDQUFBO1lBQ25HLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUNBQThCLElBQUksQ0FBQyxLQUFLLGtCQUFXLElBQUksQ0FBQyxRQUFRLE9BQUcsQ0FBQyxDQUFBO1lB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QyxJQUFBO0FBYlksOEJBQXNCLHlCQWFsQyxDQUFBO0FBR0Q7Ozs7R0FJRyIsImZpbGUiOiJsaWZlY3ljbGUtaG9va3MvZG8tY2hlY2suY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIERvQ2hlY2ssIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZSwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNsYXNzIEhlcm8ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nKXt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkby1jaGVjaycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJoZXJvXCI+XHJcbiAgICA8cD57e2hlcm8ubmFtZX19IGNhbiB7e3Bvd2VyfX08L3A+XHJcblxyXG4gICAgPGg0Pi0tIENoYW5nZSBMb2cgLS08L2g0PlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgY2hnIG9mIGNoYW5nZUxvZ1wiPnt7Y2hnfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgJy5oZXJvIHtiYWNrZ3JvdW5kOiBMaWdodFllbGxvdzsgcGFkZGluZzogOHB4OyBtYXJnaW4tdG9wOiA4cHh9JyxcclxuICAgICAgICAncCB7YmFja2dyb3VuZDogWWVsbG93OyBwYWRkaW5nOiA4cHg7IG1hcmdpbi10b3A6IDhweH0nXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb0NoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGhlcm86IEhlcm87XHJcbiAgICBASW5wdXQoKSBwb3dlcjogc3RyaW5nO1xyXG5cclxuICAgIGNoYW5nZURldGVjdGVkID0gZmFsc2U7XHJcbiAgICBjaGFuZ2VMb2c6c3RyaW5nW10gPSBbXTtcclxuICAgIG9sZEhlcm9OYW1lID0gJyc7XHJcbiAgICBvbGRQb3dlciA9ICcnO1xyXG4gICAgb2xkTG9nTGVuZ3RoID0gMDtcclxuICAgIG5vQ2hhbmdlQ291bnQgPSAwO1xyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVyby5uYW1lICE9PSB0aGlzLm9sZEhlcm9OYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxvZy5wdXNoKGBEb0NoZWNrOiBIZXJvIG5hbWUgY2hhbmdlZCB0byBcIiR7dGhpcy5oZXJvLm5hbWV9XCIgZnJvbSBcIiR7dGhpcy5vbGRIZXJvTmFtZX1cImApXHJcbiAgICAgICAgICAgIHRoaXMub2xkSGVyb05hbWUgPSB0aGlzLmhlcm8ubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBvd2VyICE9PSB0aGlzLm9sZFBvd2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxvZy5wdXNoKGBEb0NoZWNrOiBQb3dlciBjaGFuZ2VkIHRvIFwiJHt0aGlzLnBvd2VyfVwiIGZyb20gXCIke3RoaXMub2xkUG93ZXJ9XCJgKVxyXG4gICAgICAgICAgICB0aGlzLm9sZFBvd2VyID0gdGhpcy5wb3dlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZURldGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9DaGFuZ2VDb3VudCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbG9nIHRoYXQgaG9vayB3YXMgY2FsbGVkIHdoZW4gdGhlcmUgd2FzIG5vIHJlbGV2YW50IGNoYW5nZS5cclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5ub0NoYW5nZUNvdW50ICs9IDFcclxuICAgICAgICAgICAgbGV0IG5vQ2hhbmdlTXNnID0gYERvQ2hlY2sgY2FsbGVkICR7Y291bnR9eCB3aGVuIG5vIGNoYW5nZSB0byBoZXJvIG9yIHBvd2VyYDtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgbmV3IFwibm8gY2hhbmdlXCIgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VMb2cucHVzaChub0NoYW5nZU1zZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgbGFzdCBcIm5vIGNoYW5nZVwiIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9nW3RoaXMuY2hhbmdlTG9nLmxlbmd0aC0xXSA9IG5vQ2hhbmdlTXNnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29waWVkIGZyb20gT25DaGFuZ2VzQ29tcG9uZW50XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xyXG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgbGV0IHByb3AgPSBjaGFuZ2VzW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgbGV0IGN1ciAgPSBKU09OLnN0cmluZ2lmeShwcm9wLmN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgbGV0IHByZXYgPSBKU09OLnN0cmluZ2lmeShwcm9wLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxvZy5wdXNoKGBPbkNoYW5nZXM6ICR7cHJvcE5hbWV9OiBjdXJyZW50VmFsdWUgPSAke2N1cn0sIHByZXZpb3VzVmFsdWUgPSAke3ByZXZ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTG9nLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZG8tY2hlY2stcGFyZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOid0ZW1wbGF0ZXMvbGlmZWN5Y2xlLWhvb2tzL29uLWNoYW5nZXMtcGFyZW50LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogWycucGFyZW50IHtiYWNrZ3JvdW5kOiBMYXZlbmRlcn0nXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtEb0NoZWNrQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG9DaGVja1BhcmVudENvbXBvbmVudCB7XHJcbiAgICBoZXJvOkhlcm87XHJcbiAgICBwb3dlcjpzdHJpbmc7XHJcbiAgICB0aXRsZSA9ICdEb0NoZWNrJztcclxuICAgIEBWaWV3Q2hpbGQoRG9DaGVja0NvbXBvbmVudCkgY2hpbGRWaWV3OkRvQ2hlY2tDb21wb25lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHRoaXMucmVzZXQoKTsgfVxyXG5cclxuICAgIHJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oJ1dpbmRzdG9ybScpO1xyXG4gICAgICAgIHRoaXMucG93ZXIgPSAnc2luZyc7XHJcbiAgICAgICAgdGhpcy5jaGlsZFZpZXcgJiYgdGhpcy5jaGlsZFZpZXcucmVzZXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG4gY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
