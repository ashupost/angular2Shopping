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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9vbi1jaGFuZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUNJLGNBQW1CLElBQVc7b0JBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztnQkFBRSxDQUFDO2dCQUNyQyxXQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFpQkQ7Z0JBQUE7b0JBSUksY0FBUyxHQUFZLEVBQUUsQ0FBQztnQkFXNUIsQ0FBQztnQkFURyx3Q0FBVyxHQUFYLFVBQVksT0FBK0M7b0JBQ3ZELEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxHQUFHLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7d0JBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBSSxRQUFRLHlCQUFvQixHQUFHLDBCQUFxQixJQUFNLENBQUMsQ0FBQztvQkFDdkYsQ0FBQztnQkFDTCxDQUFDO2dCQUNELGtDQUFLLEdBQUwsY0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQWJ0QztvQkFBQyxZQUFLLEVBQUU7O2dFQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7aUVBQUE7Z0JBakJaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSwwS0FPWDt3QkFDQyxNQUFNLEVBQUU7NEJBQ0osZ0VBQWdFOzRCQUNoRSx1REFBdUQ7eUJBQzFEO3FCQUNKLENBQUM7O3NDQUFBO2dCQWdCRix5QkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsbURBZUMsQ0FBQTtZQUVELHlDQUF5QztZQVF6QztnQkFNSTtvQkFIQSxVQUFLLEdBQUcsV0FBVyxDQUFDO29CQUloQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsd0NBQUssR0FBTDtvQkFDSSxpREFBaUQ7b0JBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2xDLG1FQUFtRTtvQkFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDN0MsQ0FBQztnQkFaRDtvQkFBQyxnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzsyRUFBQTtnQkFWbEM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixXQUFXLEVBQUMsNERBQTREO3dCQUN4RSxNQUFNLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzt3QkFDM0MsVUFBVSxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQ25DLENBQUM7OzRDQUFBO2dCQWtCRiwrQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsK0RBaUJDLENBQUEiLCJmaWxlIjoibGlmZWN5Y2xlLWhvb2tzL29uLWNoYW5nZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCxcclxuICAgIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlXHJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5cclxuY2xhc3MgSGVybyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTpzdHJpbmcpe31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ29uLWNoYW5nZXMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVyb1wiPlxyXG4gICAgPHA+e3toZXJvLm5hbWV9fSBjYW4ge3twb3dlcn19PC9wPlxyXG5cclxuICAgIDxoND4tLSBDaGFuZ2UgTG9nICAtLTwvaDQ+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjaGcgb2YgY2hhbmdlTG9nXCI+e3tjaGd9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICAnLmhlcm8ge2JhY2tncm91bmQ6IExpZ2h0WWVsbG93OyBwYWRkaW5nOiA4cHg7IG1hcmdpbi10b3A6IDhweH0nLFxyXG4gICAgICAgICdwIHtiYWNrZ3JvdW5kOiBZZWxsb3c7IHBhZGRpbmc6IDhweDsgbWFyZ2luLXRvcDogOHB4fSdcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uQ2hhbmdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBoZXJvOiBIZXJvO1xyXG4gICAgQElucHV0KCkgcG93ZXI6IHN0cmluZztcclxuXHJcbiAgICBjaGFuZ2VMb2c6c3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xyXG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgbGV0IHByb3AgPSBjaGFuZ2VzW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgbGV0IGN1ciAgPSBKU09OLnN0cmluZ2lmeShwcm9wLmN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgbGV0IHByZXYgPSBKU09OLnN0cmluZ2lmeShwcm9wLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxvZy5wdXNoKGAke3Byb3BOYW1lfTogY3VycmVudFZhbHVlID0gJHtjdXJ9LCBwcmV2aW91c1ZhbHVlID0gJHtwcmV2fWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc2V0KCkgeyB0aGlzLmNoYW5nZUxvZy5sZW5ndGggPSAwOyB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb24tY2hhbmdlcy1wYXJlbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6J3RlbXBsYXRlcy9saWZlY3ljbGUtaG9va3Mvb24tY2hhbmdlcy1wYXJlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbJy5wYXJlbnQge2JhY2tncm91bmQ6IExhdmVuZGVyO30nXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtPbkNoYW5nZXNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZXNQYXJlbnRDb21wb25lbnQge1xyXG4gICAgaGVybzpIZXJvO1xyXG4gICAgcG93ZXI6c3RyaW5nO1xyXG4gICAgdGl0bGUgPSAnT25DaGFuZ2VzJztcclxuICAgIEBWaWV3Q2hpbGQoT25DaGFuZ2VzQ29tcG9uZW50KSBjaGlsZFZpZXc6T25DaGFuZ2VzQ29tcG9uZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIC8vIG5ldyBIZXJvIG9iamVjdCBldmVyeSB0aW1lOyB0cmlnZ2VycyBvbkNoYW5nZXNcclxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgSGVybygnV2luZHN0b3JtJyk7XHJcbiAgICAgICAgLy8gc2V0dGluZyBwb3dlciBvbmx5IHRyaWdnZXJzIG9uQ2hhbmdlcyBpZiB0aGlzIHZhbHVlIGlzIGRpZmZlcmVudFxyXG4gICAgICAgIHRoaXMucG93ZXIgPSAnc2luZyc7XHJcbiAgICAgICAgdGhpcy5jaGlsZFZpZXcgJiYgdGhpcy5jaGlsZFZpZXcucmVzZXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
