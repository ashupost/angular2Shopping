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
    var Hero, OnChangesComponent, OnChangesParentComponent;
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
            OnChangesComponent = (function () {
                function OnChangesComponent() {
                    this.changeLog = [];
                }
                OnChangesComponent.prototype.ngOnChanges = function (changes) {
                    for (var propName in changes) {
                        var prop = changes[propName];
                        var cur = JSON.stringify(prop.currentValue);
                        var prev = JSON.stringify(prop.previousValue);
                        this.changeLog.push(propName + ": currentValue = " + cur + ", previousValue = " + prev);
                    }
                };
                OnChangesComponent.prototype.reset = function () { this.changeLog.length = 0; };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Hero)
                ], OnChangesComponent.prototype, "hero", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], OnChangesComponent.prototype, "power", void 0);
                OnChangesComponent = __decorate([
                    core_1.Component({
                        selector: 'on-changes',
                        template: "\n  <div class=\"hero\">\n    <p>{{hero.name}} can {{power}}</p>\n\n    <h4>-- Change Log  --</h4>\n    <div *ngFor=\"let chg of changeLog\">{{chg}}</div>\n  </div>\n  ",
                        styles: [
                            '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
                            'p {background: Yellow; padding: 8px; margin-top: 8px}'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnChangesComponent);
                return OnChangesComponent;
            }());
            exports_1("OnChangesComponent", OnChangesComponent);
            /***************************************/
            OnChangesParentComponent = (function () {
                function OnChangesParentComponent() {
                    this.title = 'OnChanges';
                    this.reset();
                }
                OnChangesParentComponent.prototype.reset = function () {
                    // new Hero object every time; triggers onChanges
                    this.hero = new Hero('Windstorm');
                    // setting power only triggers onChanges if this value is different
                    this.power = 'sing';
                    this.childView && this.childView.reset();
                };
                __decorate([
                    core_1.ViewChild(OnChangesComponent), 
                    __metadata('design:type', OnChangesComponent)
                ], OnChangesParentComponent.prototype, "childView", void 0);
                OnChangesParentComponent = __decorate([
                    core_1.Component({
                        selector: 'on-changes-parent',
                        templateUrl: 'templates/lifecycle-hooks/on-changes-parent.component.html',
                        styles: ['.parent {background: Lavender;}'],
                        directives: [OnChangesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnChangesParentComponent);
                return OnChangesParentComponent;
            }());
            exports_1("OnChangesParentComponent", OnChangesParentComponent);
        }
    }
});
//# sourceMappingURL=on-changes.component.js.map