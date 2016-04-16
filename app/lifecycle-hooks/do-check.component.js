System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Hero, DoCheckComponent, DoCheckParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Hero = (function () {
                function Hero(name) {
                    this.name = name;
                }
                return Hero;
            }());
            DoCheckComponent = (function () {
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
                        template: "\n  <div class=\"hero\">\n    <p>{{hero.name}} can {{power}}</p>\n\n    <h4>-- Change Log --</h4>\n    <div *ngFor=\"#chg of changeLog\">{{chg}}</div>\n  </div>\n  ",
                        styles: [
                            '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
                            'p {background: Yellow; padding: 8px; margin-top: 8px}'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoCheckComponent);
                return DoCheckComponent;
            }());
            exports_1("DoCheckComponent", DoCheckComponent);
            /***************************************/
            DoCheckParentComponent = (function () {
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
            exports_1("DoCheckParentComponent", DoCheckParentComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9kby1jaGVjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFDSSxjQUFtQixJQUFXO29CQUFYLFNBQUksR0FBSixJQUFJLENBQU87Z0JBQUUsQ0FBQztnQkFDckMsV0FBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBaUJEO2dCQUFBO29CQUlJLG1CQUFjLEdBQUcsS0FBSyxDQUFDO29CQUN2QixjQUFTLEdBQVksRUFBRSxDQUFDO29CQUN4QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxpQkFBWSxHQUFHLENBQUMsQ0FBQztvQkFDakIsa0JBQWEsR0FBRyxDQUFDLENBQUM7Z0JBZ0R0QixDQUFDO2dCQTlDRyxvQ0FBUyxHQUFUO29CQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMscUNBQWtDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBVyxJQUFJLENBQUMsV0FBVyxPQUFHLENBQUMsQ0FBQTt3QkFDbkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDdEMsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUNBQThCLElBQUksQ0FBQyxLQUFLLGtCQUFXLElBQUksQ0FBQyxRQUFRLE9BQUcsQ0FBQyxDQUFB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QkFBZ0IsQ0FBQztxQkFDakMsQ0FBQzs7MENBQUE7Z0JBY0YsNkJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELDJEQWFDLENBQUE7Ozs7QUFHRDs7OztHQUlHIiwiZmlsZSI6ImxpZmVjeWNsZS1ob29rcy9kby1jaGVjay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRG9DaGVjaywgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlLCBWaWV3Q2hpbGR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuY2xhc3MgSGVybyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTpzdHJpbmcpe31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RvLWNoZWNrJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImhlcm9cIj5cclxuICAgIDxwPnt7aGVyby5uYW1lfX0gY2FuIHt7cG93ZXJ9fTwvcD5cclxuXHJcbiAgICA8aDQ+LS0gQ2hhbmdlIExvZyAtLTwvaDQ+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cIiNjaGcgb2YgY2hhbmdlTG9nXCI+e3tjaGd9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICAnLmhlcm8ge2JhY2tncm91bmQ6IExpZ2h0WWVsbG93OyBwYWRkaW5nOiA4cHg7IG1hcmdpbi10b3A6IDhweH0nLFxyXG4gICAgICAgICdwIHtiYWNrZ3JvdW5kOiBZZWxsb3c7IHBhZGRpbmc6IDhweDsgbWFyZ2luLXRvcDogOHB4fSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERvQ2hlY2tDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgaGVybzogSGVybztcclxuICAgIEBJbnB1dCgpIHBvd2VyOiBzdHJpbmc7XHJcblxyXG4gICAgY2hhbmdlRGV0ZWN0ZWQgPSBmYWxzZTtcclxuICAgIGNoYW5nZUxvZzpzdHJpbmdbXSA9IFtdO1xyXG4gICAgb2xkSGVyb05hbWUgPSAnJztcclxuICAgIG9sZFBvd2VyID0gJyc7XHJcbiAgICBvbGRMb2dMZW5ndGggPSAwO1xyXG4gICAgbm9DaGFuZ2VDb3VudCA9IDA7XHJcblxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZXJvLm5hbWUgIT09IHRoaXMub2xkSGVyb05hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9nLnB1c2goYERvQ2hlY2s6IEhlcm8gbmFtZSBjaGFuZ2VkIHRvIFwiJHt0aGlzLmhlcm8ubmFtZX1cIiBmcm9tIFwiJHt0aGlzLm9sZEhlcm9OYW1lfVwiYClcclxuICAgICAgICAgICAgdGhpcy5vbGRIZXJvTmFtZSA9IHRoaXMuaGVyby5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG93ZXIgIT09IHRoaXMub2xkUG93ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9nLnB1c2goYERvQ2hlY2s6IFBvd2VyIGNoYW5nZWQgdG8gXCIke3RoaXMucG93ZXJ9XCIgZnJvbSBcIiR7dGhpcy5vbGRQb3dlcn1cImApXHJcbiAgICAgICAgICAgIHRoaXMub2xkUG93ZXIgPSB0aGlzLnBvd2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlRGV0ZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub0NoYW5nZUNvdW50ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBsb2cgdGhhdCBob29rIHdhcyBjYWxsZWQgd2hlbiB0aGVyZSB3YXMgbm8gcmVsZXZhbnQgY2hhbmdlLlxyXG4gICAgICAgICAgICBsZXQgY291bnQgPSB0aGlzLm5vQ2hhbmdlQ291bnQgKz0gMVxyXG4gICAgICAgICAgICBsZXQgbm9DaGFuZ2VNc2cgPSBgRG9DaGVjayBjYWxsZWQgJHtjb3VudH14IHdoZW4gbm8gY2hhbmdlIHRvIGhlcm8gb3IgcG93ZXJgO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFkZCBuZXcgXCJubyBjaGFuZ2VcIiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUxvZy5wdXNoKG5vQ2hhbmdlTXNnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBsYXN0IFwibm8gY2hhbmdlXCIgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VMb2dbdGhpcy5jaGFuZ2VMb2cubGVuZ3RoLTFdID0gbm9DaGFuZ2VNc2c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3BpZWQgZnJvbSBPbkNoYW5nZXNDb21wb25lbnRcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xyXG4gICAgICAgICAgICBsZXQgcHJvcCA9IGNoYW5nZXNbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICBsZXQgY3VyICA9IEpTT04uc3RyaW5naWZ5KHByb3AuY3VycmVudFZhbHVlKVxyXG4gICAgICAgICAgICBsZXQgcHJldiA9IEpTT04uc3RyaW5naWZ5KHByb3AucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9nLnB1c2goYE9uQ2hhbmdlczogJHtwcm9wTmFtZX06IGN1cnJlbnRWYWx1ZSA9ICR7Y3VyfSwgcHJldmlvdXNWYWx1ZSA9ICR7cHJldn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VMb2cubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkby1jaGVjay1wYXJlbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6J3RlbXBsYXRlcy9saWZlY3ljbGUtaG9va3Mvb24tY2hhbmdlcy1wYXJlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbJy5wYXJlbnQge2JhY2tncm91bmQ6IExhdmVuZGVyfSddLFxyXG4gICAgZGlyZWN0aXZlczogW0RvQ2hlY2tDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb0NoZWNrUGFyZW50Q29tcG9uZW50IHtcclxuICAgIGhlcm86SGVybztcclxuICAgIHBvd2VyOnN0cmluZztcclxuICAgIHRpdGxlID0gJ0RvQ2hlY2snO1xyXG4gICAgQFZpZXdDaGlsZChEb0NoZWNrQ29tcG9uZW50KSBjaGlsZFZpZXc6RG9DaGVja0NvbXBvbmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5yZXNldCgpOyB9XHJcblxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgSGVybygnV2luZHN0b3JtJyk7XHJcbiAgICAgICAgdGhpcy5wb3dlciA9ICdzaW5nJztcclxuICAgICAgICB0aGlzLmNoaWxkVmlldyAmJiB0aGlzLmNoaWxkVmlldy5yZXNldCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypcclxuIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbiBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
