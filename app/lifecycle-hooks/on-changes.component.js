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
var core_1 = require('angular2/core');
var Hero = (function () {
    function Hero(name) {
        this.name = name;
    }
    return Hero;
}());
var OnChangesComponent = (function () {
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
exports.OnChangesComponent = OnChangesComponent;
/***************************************/
var OnChangesParentComponent = (function () {
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
exports.OnChangesParentComponent = OnChangesParentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9vbi1jaGFuZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBR08sZUFBZSxDQUFDLENBQUE7QUFHdkI7SUFDSSxjQUFtQixJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztJQUFFLENBQUM7SUFDckMsV0FBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBaUJEO0lBQUE7UUFJSSxjQUFTLEdBQVksRUFBRSxDQUFDO0lBVzVCLENBQUM7SUFURyx3Q0FBVyxHQUFYLFVBQVksT0FBK0M7UUFDdkQsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsSUFBSSxHQUFHLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUksUUFBUSx5QkFBb0IsR0FBRywwQkFBcUIsSUFBTSxDQUFDLENBQUM7UUFDdkYsQ0FBQztJQUNMLENBQUM7SUFDRCxrQ0FBSyxHQUFMLGNBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWJ0QztRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFqQlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLDBLQU9YO1lBQ0MsTUFBTSxFQUFFO2dCQUNKLGdFQUFnRTtnQkFDaEUsdURBQXVEO2FBQzFEO1NBQ0osQ0FBQzs7MEJBQUE7SUFnQkYseUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDBCQUFrQixxQkFlOUIsQ0FBQTtBQUVELHlDQUF5QztBQVF6QztJQU1JO1FBSEEsVUFBSyxHQUFHLFdBQVcsQ0FBQztRQUloQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHdDQUFLLEdBQUw7UUFDSSxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFaRDtRQUFDLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OytEQUFBO0lBVmxDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFDLDREQUE0RDtZQUN4RSxNQUFNLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztZQUMzQyxVQUFVLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUNuQyxDQUFDOztnQ0FBQTtJQWtCRiwrQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksZ0NBQXdCLDJCQWlCcEMsQ0FBQSIsImZpbGUiOiJsaWZlY3ljbGUtaG9va3Mvb24tY2hhbmdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLFxyXG4gICAgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VcclxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcblxyXG5jbGFzcyBIZXJvIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOnN0cmluZyl7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb24tY2hhbmdlcycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJoZXJvXCI+XHJcbiAgICA8cD57e2hlcm8ubmFtZX19IGNhbiB7e3Bvd2VyfX08L3A+XHJcblxyXG4gICAgPGg0Pi0tIENoYW5nZSBMb2cgIC0tPC9oND5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGNoZyBvZiBjaGFuZ2VMb2dcIj57e2NoZ319PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgICcuaGVybyB7YmFja2dyb3VuZDogTGlnaHRZZWxsb3c7IHBhZGRpbmc6IDhweDsgbWFyZ2luLXRvcDogOHB4fScsXHJcbiAgICAgICAgJ3Age2JhY2tncm91bmQ6IFllbGxvdzsgcGFkZGluZzogOHB4OyBtYXJnaW4tdG9wOiA4cHh9J1xyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT25DaGFuZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGhlcm86IEhlcm87XHJcbiAgICBASW5wdXQoKSBwb3dlcjogc3RyaW5nO1xyXG5cclxuICAgIGNoYW5nZUxvZzpzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xyXG4gICAgICAgICAgICBsZXQgcHJvcCA9IGNoYW5nZXNbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICBsZXQgY3VyICA9IEpTT04uc3RyaW5naWZ5KHByb3AuY3VycmVudFZhbHVlKVxyXG4gICAgICAgICAgICBsZXQgcHJldiA9IEpTT04uc3RyaW5naWZ5KHByb3AucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9nLnB1c2goYCR7cHJvcE5hbWV9OiBjdXJyZW50VmFsdWUgPSAke2N1cn0sIHByZXZpb3VzVmFsdWUgPSAke3ByZXZ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7IHRoaXMuY2hhbmdlTG9nLmxlbmd0aCA9IDA7IH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvbi1jaGFuZ2VzLXBhcmVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDondGVtcGxhdGVzL2xpZmVjeWNsZS1ob29rcy9vbi1jaGFuZ2VzLXBhcmVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFsnLnBhcmVudCB7YmFja2dyb3VuZDogTGF2ZW5kZXI7fSddLFxyXG4gICAgZGlyZWN0aXZlczogW09uQ2hhbmdlc0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uQ2hhbmdlc1BhcmVudENvbXBvbmVudCB7XHJcbiAgICBoZXJvOkhlcm87XHJcbiAgICBwb3dlcjpzdHJpbmc7XHJcbiAgICB0aXRsZSA9ICdPbkNoYW5nZXMnO1xyXG4gICAgQFZpZXdDaGlsZChPbkNoYW5nZXNDb21wb25lbnQpIGNoaWxkVmlldzpPbkNoYW5nZXNDb21wb25lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCl7XHJcbiAgICAgICAgLy8gbmV3IEhlcm8gb2JqZWN0IGV2ZXJ5IHRpbWU7IHRyaWdnZXJzIG9uQ2hhbmdlc1xyXG4gICAgICAgIHRoaXMuaGVybyA9IG5ldyBIZXJvKCdXaW5kc3Rvcm0nKTtcclxuICAgICAgICAvLyBzZXR0aW5nIHBvd2VyIG9ubHkgdHJpZ2dlcnMgb25DaGFuZ2VzIGlmIHRoaXMgdmFsdWUgaXMgZGlmZmVyZW50XHJcbiAgICAgICAgdGhpcy5wb3dlciA9ICdzaW5nJztcclxuICAgICAgICB0aGlzLmNoaWxkVmlldyAmJiB0aGlzLmNoaWxkVmlldy5yZXNldCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
